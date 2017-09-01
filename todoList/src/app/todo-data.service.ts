import {Injectable} from '@angular/core';
import {Todo} from './todo';

import {ApiService} from './api.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TodoDataService {


  // Placeholder for todo's
  todos: Todo[] = [];

  constructor(
      private api: ApiService
    ) {
  }

  // POST /todos
  addTodo(todo: Todo): Observable<Todo> {
    return this.api.createTodo(todo);    
  }

  // DELETE /todos/:id
  deleteTodoById(todoId: string): Observable<Todo> {
    return this.api.deleteTodoById(todoId)
  }

  // PUT /todos/:id
  updateTodo(todo: Todo): Observable<Todo> {
    return this.api.updateTodo(todo);
  }

  // GET /todos
  getAllTodos(): Observable<Todo[]> {
    return this.api.getAllTodos();
  }

  // GET /todos/:id
  getTodoById(todoId: string): Observable<Todo> {
    return this.api.getTodoById(todoId);
  }

  // Toggle todo complete
  toggleTodoComplete(todo: Todo) {
    todo.complete = !todo.complete;
    return this.api.updateTodo(todo);
  }

}
