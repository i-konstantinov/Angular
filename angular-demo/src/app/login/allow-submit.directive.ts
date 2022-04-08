import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appAllowSubmit]'
})
export class AllowSubmitDirective {
  @HostBinding('disabled') d = true;
  @Input() set appAllowSubmit(allow: boolean) {
    if (allow) {
      this.d = false;
    } else {
      this.d = true;
    }
  } 
}
