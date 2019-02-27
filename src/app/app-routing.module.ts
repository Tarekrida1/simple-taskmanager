import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { TaskComponent } from './Components/task/task.component';
import { AddtaskComponent } from './Components/addtask/addtask.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add_task', component: AddtaskComponent},
  {path: 'task', component: TaskComponent},
  {path: 'task/:id', component: TaskComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
