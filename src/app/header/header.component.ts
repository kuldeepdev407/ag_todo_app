import { Component } from '@angular/core';
import { UiService } from '../service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService){
    this.subscription = this.uiService.onToggle().subscribe(value=> this.showAddTask = value)
  }
  toggleAddTask(){
    this.uiService.toggleAddTask();
  }
}
