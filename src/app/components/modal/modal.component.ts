import { Component, ElementRef, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  host: {
    'tabindex': '-1',
  }
})
export class ModalComponent implements OnInit {

  @ViewChild('closeBtn') closeBtnRef!: ElementRef;
  @ViewChild('dialog') dialogRef!: ElementRef;

  @Input() title: string = '';
  @Input() onClose?: any;
  @Input('size') dialogSize?: string;

  private sizeOptions = ['sm', 'lg', 'xl'];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (!this.onClose) {
      this.onClose = () => {};
    }
    if (this.dialogSize) {
      this._resize(this.dialogSize);
    }
  }

  private _resize(size: string) {
    const dialog = this.dialogRef.nativeElement;
    if (this.sizeOptions.includes(size)) {
      dialog.classList.add(`modal-${size}`);
    }
  }
}
