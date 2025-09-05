import { Component, Input, inject } from '@angular/core';
import {NewTaskModel} from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) UserId!: string;
  isAddingTasks = false;
  constructor(private tasksService: TaskService) { }
  // private tasksService = inject(TaskService);

  get SelecteduserTasks() {
    return this.tasksService.getuserTasks(this.UserId);
  }

  // Doing it directly from the task.component since we are using services
  // OnCompletetask(id: string) {
  //   this.tasksService.removeTask(id);
  // }
  
  OnStartAddTask(){
    this.isAddingTasks = true;
  }

  OnCancelAddTask() {
    this.isAddingTasks = false;
  }

  OnAddTasks(taskData: NewTaskModel) {
    this.tasksService.addTask(taskData, this.UserId);
    this.isAddingTasks = false;
  }
}
