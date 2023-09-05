import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-nodes',
  templateUrl: './search-nodes.component.html',
  styleUrls: ['./search-nodes.component.scss'],
})
export class SearchNodesComponent {
  @Output() _isOpenTrigger = new EventEmitter<void>();

  openTrigger(): void {
    this._isOpenTrigger.emit();
  }
}
