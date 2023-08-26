import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(private router: Router) {}

  settingIsOn!: string;
  _currentTab: string = 'personal';

  @Input() set currentNavigation(value: string) {
    this._currentTab = value;
  }

  @Input() set currentSettingsNavigation(value: string) {
    this.settingIsOn = value;
  }

  changeNavigation(tab: string) {
    this.router.navigate(['dashboard', tab]);
    this.settingIsOn = tab;
  }
}
