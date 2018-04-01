import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) {
  this.elem.native Element.style.testDecoration="line-through";
 }

}
