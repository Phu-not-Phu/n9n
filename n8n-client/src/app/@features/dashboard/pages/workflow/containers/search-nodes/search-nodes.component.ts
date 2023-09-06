import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'search-nodes-container',
  templateUrl: './search-nodes.component.html',
  styleUrls: ['./search-nodes.component.scss'],
})
export class SearchNodesComponent {
  _isOpenSearch: boolean = false;
  _isOpenTrigger: boolean = false;
  _isSelectTrigger: boolean = false;

  @Output() isSelectTrigger = new EventEmitter<boolean>();

  openSearch() {
    this._isOpenSearch = !this._isOpenSearch;
  }

  openTrigger() {
    this._isOpenTrigger = !this._isOpenTrigger;
  }

  clickOutside() {
    this._isOpenTrigger = false;
  }

  selectTrigger() {
    console.log(this._isSelectTrigger);
    this._isSelectTrigger = !this._isSelectTrigger;
  }
}
