import { Component, EventEmitter, Output, inject} from '@angular/core';
import {NewTaskModel} from '../task/task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskModel>();

  // We can add Tasks directly from here too instead of add event Listener
  private tasksService = inject(TaskService);
 
  EnteredTitle = '';
  EnteredSummary = '';
  EnteredDate = '';

  OnCancel(){
    this.cancel.emit();
  }

  OnSubmit() {
    this.add.emit({
      title: this.EnteredTitle,
      summary: this.EnteredSummary,
      date : this.EnteredDate,      
    });
  }
}
