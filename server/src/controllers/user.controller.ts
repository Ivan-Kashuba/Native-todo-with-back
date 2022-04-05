import { Request, Response } from "express";
import UserService from "./../services/user.service";

export class AuthController {
  constructor(private UserService: UserService) {}

  async registration(req: Request, res: Response) {
    const { email, password } = req.body;

    const registeredUser = await this.UserService.isRegistered(req.body.email);

    if (!registeredUser) {
      const user = await this.UserService.registration(email, password);
      res.status(201).json(user);
    } else {
      res.status(409).json("This user already exists");
    }
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const registeredUser = await this.UserService.login(email, password);

    if (!registeredUser) {
      res.status(409).json("Wrong login or password");
    } else {
      const token = await this.UserService.generateToken(email);
      res.send(token);
    }
  }
}

const authController = new AuthController(new UserService());
export default authController;
