import { Component } from '@angular/core';

@Component({
  selector: 'app-sort-list-box',
  templateUrl: './sort-list-box.component.html',
  styleUrls: ['./sort-list-box.component.scss']
})
export class SortListBoxComponent {
  defaultOption: string = "Sort by last updated"; // Giá trị mặc định của Sort by
}
