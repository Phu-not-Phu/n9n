import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navigation-helper',
  templateUrl: './helper.component.html',
  styleUrls: ['./helper.component.scss'],
})
export class HelperComponent {
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
    if (tab == 'settings') {
      this.router.navigate(['dashboard', tab, 'personal']);
    }
  }
}
