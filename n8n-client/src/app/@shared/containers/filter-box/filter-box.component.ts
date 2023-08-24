import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss'],
})
export class FilterBoxComponent {
  _isOpen: boolean = false;
  currentTab: string = 'credentials';

  openFilter() {
    this._isOpen = !this._isOpen;
    console.log(this.currentTab);
  }

  @Input() set currentNavigation(value: string) {
    this.currentTab = value;
  }
}
