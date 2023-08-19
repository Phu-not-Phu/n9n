import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
})
export class NewProjectComponent {
  @Input()
  quantity: number = 0;

  constructor() {}

  addQuantity() {
    this.quantity += 1;
    console.log(this.quantity);
  }
}
