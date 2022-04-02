import { Directive, ElementRef, HostBinding, Input, OnChanges, OnInit, Renderer2, SimpleChanges, HostListener } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(
    private el: ElementRef
  ) {
    this.el.nativeElement.style.backgroundColor = 'red';
  }
  @Input() appHighlight : boolean = false;
  @HostListener('click') onClick() {
    if (this.appHighlight) {
      this.el.nativeElement.style.backgroundColor = 'red';
    } else {
      this.el.nativeElement.style.backgroundColor = 'green';
    }
  }
}


/*
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) { }
  @Input() set appHighlight(isActive: boolean) {
    if (isActive) {
      this.renderer.setStyle(
        this.el.nativeElement,
        'background-color',
        'green'
      )
    } else {
      this.renderer.setStyle(
        this.el.nativeElement,
        'background-color',
        'red'
      )
    }
  }
}
*/

/*
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() set appHighlight(isActive: boolean) {
    if (isActive) {
      this.color = 'green'
    } else {
      this.color = 'red'
    }
  }
  @HostBinding('style.backgroundColor') color = 'red';
}
*/

/*
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {
  @Input() isActive!: boolean;
  constructor(
    private elementRef: ElementRef
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isActive'].currentValue) {
      this.elementRef.nativeElement.style.backgroundColor = 'green';
    } else {
      this.elementRef.nativeElement.style.backgroundColor = 'red';
    }
  }
}
*/
