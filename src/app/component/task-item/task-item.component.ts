import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Task } from 'src/app/task';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDelete:EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder:EventEmitter<Task> = new EventEmitter();
  faDelete = faTrash;
  constructor(){
  }
  deleteTask(task: Task){
    this.onDelete.emit(task);
  }
  onToggle(task: Task){
    this.onToggleReminder.emit(task);
  }
}
