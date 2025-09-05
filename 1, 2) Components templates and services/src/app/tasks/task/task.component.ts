import { Component , EventEmitter, Input, Output, inject} from '@angular/core';
import { Task } from './task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  @Input({required:true}) task! : Task;
  // @Output() complete = new EventEmitter<string>();

  constructor(private tasksService: TaskService) { }

  OnCompleteTask () {
    this.tasksService.removeTask(this.task.id);
  }

}
