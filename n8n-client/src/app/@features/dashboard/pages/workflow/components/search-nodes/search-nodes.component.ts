import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-nodes',
  templateUrl: './search-nodes.component.html',
  styleUrls: ['./search-nodes.component.scss'],
})
export class SearchNodesComponent {
  _isOpenTrigger: boolean = false;

  openTrigger() {
    this._isOpenTrigger = !this._isOpenTrigger;
  }

  clickOutside() {
    this._isOpenTrigger = false;
  }
}
