import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @ViewChild('_dialog') dialog: ElementRef<HTMLDialogElement> | undefined;

  @Input() data: any = {};

  @Input() isOpen = false;
  @Output() isOpenChange = new EventEmitter<boolean>();

  openDialog() {
    this.dialog?.nativeElement.showModal();
    this.isOpen = true;
    this.isOpenChange.emit(this.isOpen);
  }

  closeDialog() {
    this.dialog?.nativeElement.classList.add('hide');

    const functionClose = () => {
      this.dialog?.nativeElement.classList.remove('hide');
      this.dialog?.nativeElement.removeEventListener('animationend', functionClose, true);
      this.dialog?.nativeElement.close();
    }

    this.dialog?.nativeElement.addEventListener('animationend', functionClose, true)

    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
  }
}
