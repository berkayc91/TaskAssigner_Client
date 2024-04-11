import { Component, OnInit } from '@angular/core';
import { AssignerService } from 'src/app/service/assigner.service';
import { TaskHistoryService } from 'src/app/service/task-history.service';

@Component({
  selector: 'app-today-task',
  templateUrl: './today-task.component.html',
  styleUrls: ['./today-task.component.css']
})
export class TodayTaskComponent implements OnInit {

  list_data: any[] = [];
  constructor(
    private taskHistoryService : TaskHistoryService,
    private assignService : AssignerService) { }

  ngOnInit(): void {
    this.Todays_Task();
  }

  Todays_Task(){
    this.taskHistoryService.List_TodayTask().subscribe(result =>{
      this.list_data = result.data;     
    })
  }

  Assign(){
    this.assignService.Assign().subscribe(result => {
      this.ngOnInit();
    })
  }

}
