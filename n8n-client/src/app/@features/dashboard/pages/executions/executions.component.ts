import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-executions',
  templateUrl: './executions.component.html',
  styleUrls: ['./executions.component.scss']
})
export class ExecutionsComponent {
  currentTab: string = 'executions';

  @Input() set currentNavigation(value: string) {
    this.currentTab = value;
  }
}
