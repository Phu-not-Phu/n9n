import { Component, Input } from '@angular/core';

@Component({
  selector: 'filter-credential',
  templateUrl: './credential.component.html',
  styleUrls: ['./credential.component.scss'],
})
export class CredentialComponent {
  _isOpen: boolean = false;
  currentTab: string = 'credentials';

  openFilter() {
    this._isOpen = !this._isOpen;
    console.log(this.currentTab);
  }
}
