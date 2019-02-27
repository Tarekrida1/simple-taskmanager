import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private tasksSer: TasksService,
    private Title: Title) {
      this.Title.setTitle('Task manager');
  }

  ngOnInit() {
  }
  deleteTask(i) {
this.tasksSer.deleteTask(i);
}
}
