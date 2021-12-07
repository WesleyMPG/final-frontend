import { Component, OnInit, ViewChild, ElementRef, Input, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @ViewChild('headerWrapper') headerWrapper!: ElementRef;
  @ViewChild('footerWrapper') footerWrapper!: ElementRef;

  @Input() justifyHeader?: string;
  @Input() justifyFooter?: string;

  @ContentChild('header') headerRef!: TemplateRef<any>;
  @ContentChild('footer') footerRef!: TemplateRef<any>;
  @ContentChild('body') bodyRef!: TemplateRef<any>;
 

  private justifyOptions = ['start', 'end', 'center', 'between',
    'around', 'evenly'];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this._applyJustify();
  }

  private _applyJustify() {
    if (this.justifyHeader !== undefined) {
      console.log(this.headerWrapper)
      this._setJustify(this.headerWrapper, this.justifyHeader);
    }
    if (this.justifyFooter !== undefined) {
      this._setJustify(this.footerWrapper, this.justifyFooter);
    }
  }

  private _setJustify(el: ElementRef, justifyValue: string) {
    if (this.justifyOptions.includes(justifyValue)) {
      el.nativeElement.classList.remove = 'justify-content-start';
      el.nativeElement.classList.add(`justify-content-${justifyValue}`);
    }
  }

}
