import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskHistoryService {

  apiUrl: string ='https://localhost:7080/api/task-history'

  constructor(private http: HttpClient) { }

  List_TaskHistory(){
    let listApiUrl = `${this.apiUrl}/List_TaskHistory`;
    return this.http.get<any>(listApiUrl);
  }

  List_TodayTask(){
    let listApiUrl = `${this.apiUrl}/List_TodayTask`;
    return this.http.get<any>(listApiUrl);
  }
}
