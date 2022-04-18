import { Task } from './interfaces/task';
import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AplicacionAngular';
  tasks:any;

  constructor(private taskService: TaskService) {}
 
  ngOnInit(){
    this.taskService.getAllTasks()
    .subscribe(tasks => {
      this.tasks = tasks;
    });
  }
  
  ngTasks(){
    return this.taskService.getAllTasks.length>0;
  }
  
}
