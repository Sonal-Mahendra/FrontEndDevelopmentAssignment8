import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers:[TodoService]
})
export class TodoComponent implements OnInit {
  todos=[];
  
  
  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todos=this.todoService.getTodo();
  }
addTodo(e,task){
  e.preventDefault();

this.todoService.addTodo(task.value);
task.value="";


}

}
