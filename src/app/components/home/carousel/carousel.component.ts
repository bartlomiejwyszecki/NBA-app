import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { data } from './data/data';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  data = data;
  stopped: boolean = false;
  interval: any;
  int: number = 0;

  @ViewChildren('upperSlide') upperSlide!: QueryList<ElementRef>;
  @ViewChildren('bottomSlide') bottomSlide!: QueryList<ElementRef>;

  constructor(private elem: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {}

  ngAfterViewInit() {
    const DOMElements = [this.upperSlide, this.bottomSlide];

    this.changeClass('active', DOMElements, true);

    this.interval = setInterval(() => {
      this.changeClass('active', DOMElements, false);
      this.int === this.bottomSlide.toArray().length - 1 ? this.int = 0 : this.int++;
      this.changeClass('active', DOMElements, true);
    }, 8000);
  }

  stopSlider(int: number) {
    const DOMElements = [this.upperSlide, this.bottomSlide];

    this.changeClass('active', DOMElements, false);
    this.changeClass('complete', DOMElements, false);
    this.int = int;
    clearInterval(this.interval);
    this.changeClass('complete', DOMElements, true);
  }

  changeClass(elClass: string, elements:QueryList<ElementRef>[], change: boolean): void {
    if (change === true) {
      elements.forEach((el) => {
        this.renderer.addClass(el.toArray()[this.int].nativeElement, elClass);
      })
    } else {
      elements.forEach((el) => {
        this.renderer.removeClass(el.toArray()[this.int].nativeElement, elClass);
      })
    }
  }
}
