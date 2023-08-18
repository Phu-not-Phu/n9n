import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  currentTab: string = 'projects';
  _isOpen: boolean = true;

  @Input() set openNavigation(value: boolean) {
    this._isOpen = value;
  }

  @Input() set currentNavigation(value: string) {
    this.currentTab = value;
  }
}
