import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import  { TASKS } from '../mock-task';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks;
  }
}
