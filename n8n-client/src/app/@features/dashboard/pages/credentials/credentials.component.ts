import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss']
})
export class CredentialsComponent {
  currentTab: string = 'credentials';

  @Input() set currentNavigation(value: string) {
    this.currentTab = value;
  }
}
