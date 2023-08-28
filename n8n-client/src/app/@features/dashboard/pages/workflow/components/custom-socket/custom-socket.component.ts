import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-custom-socket',
  templateUrl: './custom-socket.component.html',
  styleUrls: ['./custom-socket.component.scss'],
})
export class CustomSocketComponent {
  name: string = 'custom-socket';

  @Input() data!: any;
  @Input() rendered!: any;

  @HostBinding('title') get title() {
    return this.data.name;
  }

  constructor(private cdr: ChangeDetectorRef) {
    this.cdr.detach();
  }

  ngOnInit(): void {
    this.name = this.data.name;
    this.cdr.detectChanges();
  }

  ngOnChanges(): void {
    this.cdr.detectChanges();
    requestAnimationFrame(() => this.rendered());
  }
}
