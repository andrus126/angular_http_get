import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from './../interfaces/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url = 'https://jsonplaceholder.typicode.com/todos'

  constructor(private http: HttpClient) { }

  getAllTasks() {
    
    return this.http.get(this.url)
  }
}

