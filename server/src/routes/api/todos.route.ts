import { Router } from "express";

import { todoValidator, getId, joiTodoSchema } from "./../../validation/todo";
import todoController from "../../controllers/todo.controller";
import todoHandler from "../../middlewares/todoHandler";
import passport from "passport";

const todosRouter: Router = Router();

//  /api/todos

todosRouter.get(
  "",
  passport.authenticate("jwt", { session: false }),
  todoHandler(todoController.getAllTodo.bind(todoController))
);

todosRouter.post(
  "",
  todoValidator(joiTodoSchema),
  passport.authenticate("jwt", { session: false }),
  todoHandler(todoController.postTodo.bind(todoController))
);

// /api/todos/:id
todosRouter.put(
  "/:id",
  todoValidator(joiTodoSchema),
  getId(),
  passport.authenticate("jwt", { session: false }),
  todoHandler(todoController.updateTodo.bind(todoController))
);

todosRouter.delete(
  "/:id",
  getId(),
  passport.authenticate("jwt", { session: false }),
  todoHandler(todoController.deleteTodo.bind(todoController))
);


export default todosRouter;
