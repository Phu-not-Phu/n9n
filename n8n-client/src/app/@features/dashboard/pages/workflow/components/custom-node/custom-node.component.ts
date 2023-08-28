import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnChanges,
} from '@angular/core';
import { ClassicPreset } from 'rete';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-custom-node',
  templateUrl: './custom-node.component.html',
  styleUrls: ['./custom-node.component.scss'],
  host: {
    'data-testid': 'node',
  },
})
export class CustomNodeComponent implements OnChanges {
  @Input() data!: ClassicPreset.Node;
  @Input() emit!: (data: any) => void;
  @Input() rendered!: () => void;

  seed = 0;

  @HostBinding('class.selected') get selected() {
    return this.data.selected;
  }

  constructor(private cdr: ChangeDetectorRef) {
    this.cdr.detach();
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
