import { ConfigT, filterDataT } from './../types/types';
import axios from 'axios';
import HttpService from './http.service';

axios.defaults.baseURL = 'http://localhost:5000/api/';

class TodoServiceClass extends HttpService {
  constructor() {
    super();
  }

  async getAllTodos(config: ConfigT) {
    let url = config.url;
    if (config.data) {
      const { titleFilter, status }:filterDataT = config.data;
      url = `${config.url}?search=${(titleFilter)}&status=${status}`;
    }
    const todos = await this.get({
      url,
    });
    return todos.data;
  }

  async postTodo(config: ConfigT) {
    const todos = await this.post({ url: config.url, data: config.data });
    return todos;
  }

  async editTodo(config: ConfigT) {
    const editedTodo = await this.put({
      url: config.url,
      data: config.data,
    });
    return editedTodo;
  }

  async deleteTodo(config: ConfigT) {
    const todo = await this.delete({
      url: config.url,
    });
    return todo;
  }
}

const TodoService = new TodoServiceClass();
export default TodoService;
