import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
  selector: '[appFilmShow]'
})

export class FilmDisplayDirective {
  constructor(private element: ElementRef) {
  }

  @HostListener('mouseover') onMouseOver() {
    this.setDisplayProperty('60px', '-60px', '0', 'visible');
  }

  @HostListener('mouseout') onMouseOut() {
    this.setDisplayProperty('40px', '-40px', '20px', 'hidden');
  }

  private setDisplayProperty(height, top, marginBottom, val) {
    this.element.nativeElement.children[1].children[1].style.visibility = val;
    this.element.nativeElement.children[1].style.height = height;
    this.element.nativeElement.children[1].style.top = top;
    this.element.nativeElement.parentNode.parentNode.style.marginBottom = marginBottom;
  }

}
