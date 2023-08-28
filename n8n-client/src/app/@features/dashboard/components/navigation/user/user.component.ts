import { Component, Input } from '@angular/core';

@Component({
  selector: 'navigation-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  _isOpen: boolean = false;

  @Input() set isOpen(value: boolean) {
    this._isOpen = value;
  }
}
