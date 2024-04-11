import { Component, OnInit } from '@angular/core';
import { TaskHistoryService } from 'src/app/service/task-history.service';

@Component({
  selector: 'app-task-history',
  templateUrl: './task-history.component.html',
  styleUrls: ['./task-history.component.css']
})
export class TaskHistoryComponent implements OnInit {

  list_data: any[] = [];

  constructor(private taskHistoryService : TaskHistoryService) { }

  ngOnInit(): void {
    this.List_History();
  }

  List_History(){
    this.taskHistoryService.List_TaskHistory().subscribe(result =>{
      this.list_data = result.data;     
    })
  }

}
