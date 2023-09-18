import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from 'src/app/task';
import { UiService } from 'src/app/service/ui.service';
import { Subscription}  from 'rxjs';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{
  @Output() onAdd: EventEmitter<Task> = new EventEmitter();
  text: string = "";
  description: string = "";
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription!: Subscription;
  constructor(private uiService: UiService){
    this.subscription = this.uiService.onToggle().subscribe((value)=>{this.showAddTask = value});
  }
  ngOnInit(): void {
    
  }

  onSubmit(){
    if(!this.text){
      alert('Please add a task!');
      return;
    }

    const newTask: Task ={
      text: this.text,
      description: this.description,
      reminder: this.reminder
    };

    this.onAdd.emit(newTask);

    this.text = '';
    this.description = '';
    this.reminder = false;
  }

}
