import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Title } from '@angular/platform-browser';
import { side, fadeInAnimation } from 'src/app/animations/animation';
import { trigger, transition, style, animate, query, keyframes, animation, useAnimation, group, animateChild } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    side,
    trigger('taskAnimation', [
      transition(':enter', useAnimation(fadeInAnimation, { params: { duration: '300ms', easy: 'ease-in-out' } })),
      transition(':leave', [
        style({ opacity: 0 }),
        animate(2000)
      ])
    ]),
  trigger('tasksssAnimation', [
    transition(':enter', [
  query('h1', [
    style({
      transform: 'translateY(-20px)'
    }),
    animate(1000)
  ])
    ])
  ])
  ]
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
