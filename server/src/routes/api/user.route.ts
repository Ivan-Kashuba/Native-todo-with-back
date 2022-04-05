import { Router, Request, Response } from "express";
import userController from "./../../controllers/user.controller";

const router: Router = Router();

// @route   POST api/user
// @desc    Register user given their email and password,
// returns the token upon successful registration
// @access  Public

// api/user/register
router.post("/register", async (req: Request, res: Response) => {
  userController.registration(req, res);
});

// api/user/login
router.post("/login", async (req: Request, res: Response) => {
  userController.login(req, res);
});

export default router;
