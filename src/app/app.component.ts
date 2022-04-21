import { Task } from './interfaces/task';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TaskService } from './services/task.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';


//const ELEMENT_DATA: Task[] = [
//  {userId: {{tasks.id}}, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
 
//];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit {
  title = 'AplicacionAngular';
  tasks: any;
  displayedColumns: string[] = ['userid', 'id', 'titulo', 'completado'];
 //dataSource = new MatTableDataSource (ELEMENT_DATA);
  
 resultsLength = 0;
 isLoadingResults = true;
 isRateLimitReached = false;
 
 //exampleDatabase: ExampleHttpDatabase | null;

 @ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;
 
  private _httpClient: any;


  constructor(private taskService: TaskService) {}
 
  ngOnInit(){
    this.taskService.getAllTasks()
    .subscribe(tasks => {
      this.tasks = tasks;
    });
  }

}

