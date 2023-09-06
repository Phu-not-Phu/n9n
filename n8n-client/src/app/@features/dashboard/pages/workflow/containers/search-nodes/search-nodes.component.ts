import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'search-nodes-container',
  templateUrl: './search-nodes.component.html',
  styleUrls: ['./search-nodes.component.scss'],
})
export class SearchNodesComponent {
  _isOpenSearch: boolean = false;

  @Input() _isOpenTrigger = false;
  @Output() isOpenTriggerChange = new EventEmitter<boolean>();

  openSearch() {
    this._isOpenSearch = !this._isOpenSearch;
  }

  openTrigger() {
    this._isOpenTrigger = !this._isOpenTrigger;
    this.isOpenTriggerChange.emit(this._isOpenTrigger);
  }

  clickOutside() {
    this._isOpenSearch = false;
    this._isOpenTrigger = false;
  }
}
