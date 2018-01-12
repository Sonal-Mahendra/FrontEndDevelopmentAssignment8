import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
todos=[];
  constructor() { }

  addTodo(task)
  {
    this.todos.unshift(task);
  }
getTodo(){
  return this.todos;
}

}
