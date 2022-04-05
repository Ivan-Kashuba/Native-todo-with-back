import config from "config";
import User from "./../models/User";
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.get("jwtSecret"),
};

const authMiddleware = (passport: any) => {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload: any, done: any) => {
      try {
        const user = await User.findById(jwt_payload.userId);
        if (user) {
          done(undefined, user);
        } else {
          done(undefined, false);
        }
      } catch (error) {
        throw new Error(`${error}`);
      }
    })
  );
};

export default authMiddleware;
