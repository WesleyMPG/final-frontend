import { ModalComponent } from './modal.component';
import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[closeBtnStyle]'
})
export class CloseBtnStyleDirective {

  @Input('closeBtnText') text!: string;
  
  constructor(private component: ModalComponent) {}
  
  ngAfterViewInit() {
    const btn = this.component.closeBtnRef.nativeElement;
    btn.classList.remove('btn-primary');
    btn.classList.add('btn-secondary');
    if (this.text) {
      btn.innerText = this.text
    }
  }
}
