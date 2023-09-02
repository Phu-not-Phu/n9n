import { Component } from '@angular/core';

@Component({
  selector: 'app-sort-list-box',
  templateUrl: './sort-list-box.component.html',
  styleUrls: ['./sort-list-box.component.scss']
})
export class SortListBoxComponent {

  isDropdownOpen: boolean = false;
  selectedOption: string = "Sort by last updated"; // Giá trị mặc định
  options: string[] = ["Sort by last updated", "Sort by last created", "Sort by name (A-Z)", "Sort by name (Z-A)"];

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isDropdownOpen = false;
  }
}
