import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-settings',
  templateUrl: './main-settings.component.html',
  styleUrls: ['./main-settings.component.scss'],
})
export class MainSettingsComponent {
  constructor(private router: Router) {}
  _currentTab!: string;

  @Input() set currentTab(value: string) {
    this._currentTab = value;
  }

  changeNavigation(tab: string) {
    this.router.navigate(['dashboard', 'settings', tab]);
  }
}
