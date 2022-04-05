import User from "./../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "config";

export default class UserService {
  expire: string = config.get("jwtExpiration");
  jwtKey: string = config.get("jwtSecret");

  async registration(email: string, password: string) {
    const candidate = await User.findOne({ email });

    if (candidate) {
      return "The user already exists";
    } else {
      const saltResult = bcrypt.genSaltSync(7);
      const user = new User({
        email: email,
        password: bcrypt.hashSync(password, saltResult),
      });
      await user.save();
      return user;
    }
  }

  async isRegistered(email: string) {
    const candidate = await User.findOne({ email });
    return candidate ? true : false;
  }

  async login(email: string, password: string) {
    const candidate = await User.findOne({ email });

    if (candidate) {
      const passwordResult = bcrypt.compareSync(password, candidate.password);
      return passwordResult ? true : false;
    } else {
      return false;
    }
  }

  async generateToken(email: string) {
    const candidate = await User.findOne({ email });

    if (candidate) {
      const token = jwt.sign(
        {
          email: candidate.email,
          userId: candidate._id,
        },
        this.jwtKey,
        { expiresIn: this.expire }
      );
      return {
        token: `Bearer ${token}`,
      };
    } else {
      return "Current user is not founded in system";
    }
  }
}
