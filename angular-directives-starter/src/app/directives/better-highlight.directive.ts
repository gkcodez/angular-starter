import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  @HostBinding('style.color') color: string = 'black';
  @HostBinding('style.padding') padding: string = '10px';
  @HostBinding('style.borderRadius') borderRadius: string = '5px';
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'yellow';

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.element.nativeElement, 'padding', '10px');
    // this.renderer.setStyle(this.element.nativeElement, 'borderRadius', '5px');  
    this.backgroundColor = this.defaultColor;
    this.color = 'white';

  }

  @HostListener('mouseover') mouseover(event: Event){
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'blue');
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    this.backgroundColor = this.highlightColor;

  }

  @HostListener('mouseleave') mouseleave(event: Event){
    // this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'transparent');
    // this.renderer.setStyle(this.element.nativeElement, 'color', 'black'); 
    this.backgroundColor = this.defaultColor;
  }

  
}
