import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssignerService {

  apiUrl: string ='https://localhost:7080/api/assigner'

  constructor(private http: HttpClient) { }

  Assign(){
    let assignApiUrl = `${this.apiUrl}/Assign`;
    return this.http.get<any>(assignApiUrl);
  }
}
