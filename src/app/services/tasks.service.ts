import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks: Array <Task> = [];
  constructor() {
    let savedTasks = localStorage.getItem('tasks');
    if (savedTasks) { this.tasks = JSON.parse(savedTasks); } else { this.tasks = []; }
  }
  deleteTask(i) {
    this.tasks.splice( i , 1 );
    this.savaALL();
  }
  saveTask(title, description) {
  this.tasks.push({
      title,
      description
        });
        this.savaALL();
}
editTask(i, data) {
  this.tasks[i] = data;
  this.savaALL();
}
savaALL() {
  localStorage.setItem('tasks', JSON.stringify(this.tasks));
}
}
