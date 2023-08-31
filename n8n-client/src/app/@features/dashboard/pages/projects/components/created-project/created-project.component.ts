import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-created-project',
  templateUrl: './created-project.component.html',
  styleUrls: ['./created-project.component.scss']
})
export class CreatedProjectComponent {
  constructor(private router: Router) {}
  
  changeNavigation() {
    this.router.navigate(['dashboard', 'your-project']);
  }
}
