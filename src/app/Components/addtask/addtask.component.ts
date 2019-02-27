import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.scss']
})
export class AddtaskComponent implements OnInit {

  constructor(private tasksSer: TasksService,
    private router: Router,
    private Title: Title) {
      this.Title.setTitle('Add New Task');
    }

  ngOnInit() {
  }
saveTask(title, des) {
this.tasksSer.saveTask(title.value, des.value);
this.router.navigate(['/']);
}
}
