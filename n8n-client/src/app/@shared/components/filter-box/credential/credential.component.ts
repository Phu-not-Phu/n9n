import { Component, Input } from '@angular/core';

@Component({
  selector: 'filter-credential',
  templateUrl: './credential.component.html',
  styleUrls: ['./credential.component.scss'],
})
export class CredentialComponent {
  _isOpen: boolean = false;

  @Input() set isOpen(value: boolean) {
    this._isOpen = value;
  }
}
