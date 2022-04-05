import { Response, Request } from "express";
import TodoService from "../services/todo.service";

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodo(req: Request, __: Response) {
    const { search, status } = req.query;
    return await this.todoService.findAll({ search, status });
  }

  async postTodo(req: Request, _: Response) {
    const todo = await this.todoService.postElem(req.body);
    await todo.save();
    return todo;
  }

  async updateTodo(req: Request, _: Response) {
    const data = await this.todoService.putElem(req.params.id, req.body);
    return data;
  }

  async deleteTodo(req: Request, _: Response) {
    const data = await this.todoService.deleteElem(req.params.id);
    return data;
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
