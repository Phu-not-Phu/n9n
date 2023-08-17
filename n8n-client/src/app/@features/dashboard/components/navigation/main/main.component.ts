import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(private router: Router) {}

  _isOpen: boolean = false;
  _currentTab!: string;

  @Input() set isOpen(value: boolean) {
    this._isOpen = value;
  }

  @Input() set currentTab(value: string) {
    this._currentTab = value;
  }

  changeNavigation(tab: string) {
    this.router.navigate(['dashboard', tab]);
  }
}
