import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.scss'],
})
export class FilterBoxComponent {
  _isOpen: boolean = false;

  openFilter() {
    this._isOpen = !this._isOpen;
  }
}
