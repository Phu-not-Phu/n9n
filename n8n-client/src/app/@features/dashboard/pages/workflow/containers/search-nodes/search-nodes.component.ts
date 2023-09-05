import { Component } from '@angular/core';

@Component({
  selector: 'search-nodes-container',
  templateUrl: './search-nodes.component.html',
  styleUrls: ['./search-nodes.component.scss'],
})
export class SearchNodesComponent {
  _isOpenSearch: boolean = false;
  _isOpenTrigger: boolean = false;

  openSearch() {
    this._isOpenSearch = !this._isOpenSearch;
    console.log('open search');
  }

  openTrigger() {
    this._isOpenTrigger = !this._isOpenTrigger;
  }

  clickOutside() {
    this._isOpenSearch = false;
    this._isOpenTrigger = false;
  }
}
