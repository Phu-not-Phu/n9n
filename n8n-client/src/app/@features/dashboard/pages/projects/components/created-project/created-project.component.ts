import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-created-project',
  templateUrl: './created-project.component.html',
  styleUrls: ['./created-project.component.scss']
})
export class CreatedProjectComponent {
  isDialogOpen: boolean = false;
  currentDialog: string = '';

  constructor(private router: Router) {}
  
  changeNavigation() {
    this.router.navigate(['dashboard', 'your-project']);
  }

  openSettingDialog(){
    this.currentDialog = 'Setting Project';
  }

  openDeleteDialog(){
    this.currentDialog = 'Delete Project';
  }
}
