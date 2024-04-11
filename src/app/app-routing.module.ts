import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskHistoryComponent } from './task-history/task-history/task-history.component';
import { TodayTaskComponent } from './today-task/today-task/today-task.component';


const routes: Routes = [
  {path:'task-history',component:TaskHistoryComponent},
  {path:'todays-tasks',component:TodayTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
