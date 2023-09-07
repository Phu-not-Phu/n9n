import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnChanges,
} from '@angular/core';
import { ClassicPreset } from 'rete';
import { KeyValue } from '@angular/common';
import { NodeInformation } from '../../models/node.model';
import { CoreServerService } from '../../services/core-server.service';
import { lastValueFrom } from 'rxjs';

import { environment } from 'src/environments/environment';
const { backend } = environment;

@Component({
  selector: 'app-custom-node',
  templateUrl: './custom-node.component.html',
  styleUrls: ['./custom-node.component.scss'],
  host: {
    'data-testid': 'node',
  },
})
export class CustomNodeComponent implements OnChanges {
  nodeInformation: NodeInformation | undefined;
  serverAPI = backend.apiServer;

  @Input() data!: ClassicPreset.Node;
  @Input() emit!: (data: any) => void;
  @Input() rendered!: () => void;

  seed = 0;

  @HostBinding('class.selected') get selected() {
    return this.data.selected;
  }

  constructor(
    private cdr: ChangeDetectorRef,
    private coreServerService: CoreServerService
  ) {
    this.cdr.detach();
  }

  async ngAfterViewInit() {
    const nodeType = this.data.label.split('|')[1];

    if (nodeType) {
      this.nodeInformation = await lastValueFrom(
        this.coreServerService.getNodeInformation(nodeType)
      );
    }

    this.cdr.detectChanges();
  }

  ngOnChanges(): void {
    this.cdr.detectChanges();
    requestAnimationFrame(() => this.rendered());
    this.seed++; // force render sockets
  }

  sortByIndex = <
    T extends object,
    U extends KeyValue<string, (T & { index?: number }) | undefined>
  >(
    a: U,
    b: U
  ) => {
    const ai = a.value?.index || 0;
    const bi = b.value?.index || 0;

    return ai - bi;
  };
}
