import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CoreServerService } from '../../services/core-server.service';
import { lastValueFrom } from 'rxjs';

import { environment } from 'src/environments/environment';
import { EditorService } from '../../services/editor.service';
const { backend } = environment;

@Component({
  selector: 'app-search-nodes',
  templateUrl: './search-nodes.component.html',
  styleUrls: ['./search-nodes.component.scss'],
})
export class SearchNodesComponent {
  _server = backend.apiServer;

  constructor(
    private coreServerService: CoreServerService,
    private editorService: EditorService
  ) {}

  _list: any[] = [];

  async ngOnInit() {
    this._list = await lastValueFrom(this.coreServerService.getNodesList());
  }

  async addNode(name: string, type: string) {
    const node = await this.editorService.createNode({
      name,
      type,
    });

    this.editorService.addNode(node);
  }
}
