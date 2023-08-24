import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-setting',
  templateUrl: './main-setting.component.html',
  styleUrls: ['./main-setting.component.scss']
})
export class MainSettingComponent {
  constructor(private router: Router) {}

  _isOpen: boolean = false;
  _currentTab!: string;

  @Input() set isOpen(value: boolean) {
    this._isOpen = value;
  }

  @Input() set currentTab(value: string) {
    this._currentTab = value;
  }

  @Output() closeNavigation = new EventEmitter();

  changeNavigation(tab: string) {
    this.router.navigate(['settings', tab]);
  }

  close() {
    this.closeNavigation.emit();
  }
}
