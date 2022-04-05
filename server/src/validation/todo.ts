import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export const todoValidator =
  (Schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    const { error } = Schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.message });
    }
    next();
  };


export const joiTodoSchema = Joi.object().keys({
  title: Joi.string().min(3).max(30).required(),
  description: Joi.string().required().min(2).max(255),
  year: Joi.number().integer().min(2022).max(3000),
  isPublic: Joi.boolean(),
  isCompleted: Joi.boolean(),
});

export const getId =
  () => async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    req.body._id ?? id
      ? next()
      : res.status(400).send({ message: "There is no post with current id" });
  };

