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
  isDropdownOpen: boolean = false;
  options: string[] = ["Sort by last updated", "Sort by last created", "Sort by name (A-Z)", "Sort by name (Z-A)"];

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: string) {
    this.isDropdownOpen = false;
  }

  clickOutside() {
    this._isOpen = false;
  }
}
