import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService){
    
  }
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks)=> {
      this.tasks = tasks;
    }) 
  }

  addTask(task: Task): void {
   this.taskService.addTask(task).subscribe((task)=>this.tasks.push(task)) 
  }

  deleteTask(task:Task): void {
    this.taskService.deleteTask(task).subscribe(
      ()=> this.tasks = this.tasks.filter((t)=> t.id !== task.id)
    )
  }

  toggleReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe() 
  }

}
