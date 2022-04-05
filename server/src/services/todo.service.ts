import { filterT } from "./../types/todos.type";
import Todo, { ITodo } from "./../models/Todo";

export default class TodoService {
  async findAll(filter: filterT) {
    const { search, status } = filter;
    const isPublicStatus = status === "public" ? true : false;
    if (
      (search === "" || search === undefined) &&
      (status === "all" || status === undefined)
    ) {
      return Todo.find({});
    }
    if (
      (search !== "" || search !== undefined) &&
      (status === "all" || status === undefined)
    ) {
      return Todo.find({
        title: search,
      });
    }
    if ((search === "" || search === undefined) && status !== "all") {
      return Todo.find({
        isPublic: isPublicStatus,
      });
    }
    if (
      (search !== "" || search !== undefined) &&
      (status !== "all" || status !== undefined)
    ) {
      return Todo.find({
        title: search,
        isPublic: isPublicStatus,
      });
    }
  }

  async postElem(post: ITodo) {
    const todo = new Todo(post);
    return todo;
  }

  async putElem(id: String, body: any) {
    const todo = Todo.findByIdAndUpdate(id, body, {
      useFindAndModify: false,
    });

    return todo;
  }

  async deleteElem(id: String) {
    const todo = Todo.findByIdAndDelete(id);
    return todo;
  }
}
