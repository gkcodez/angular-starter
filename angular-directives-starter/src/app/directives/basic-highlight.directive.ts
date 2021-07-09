import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{

  constructor(private element: ElementRef) { }

  ngOnInit(){
    this.element.nativeElement.style.backgroundColor = 'green';
    this.element.nativeElement.style.color = 'white';
    this.element.nativeElement.style.padding = '10px';
    this.element.nativeElement.style.borderRadius = '5px';
  }

}
