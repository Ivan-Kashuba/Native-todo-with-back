import { Response, Request, NextFunction } from "express";
const todoHandler =
  (callback: any) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await callback(req, res, next);
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  };

export default todoHandler;
