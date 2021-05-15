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
    this.renderer.addClass(this.upperSlide.toArray()[this.int].nativeElement, 'active');
    this.renderer.addClass(this.bottomSlide.toArray()[this.int].nativeElement, 'active');

    this.interval = setInterval(() => {
      this.renderer.removeClass(this.upperSlide.toArray()[this.int].nativeElement, 'active');
      this.renderer.removeClass(this.bottomSlide.toArray()[this.int].nativeElement, 'active');
      this.int === this.bottomSlide.toArray().length - 1 ? this.int = 0 : this.int++;
      this.renderer.addClass(this.upperSlide.toArray()[this.int].nativeElement, 'active');
      this.renderer.addClass(this.bottomSlide.toArray()[this.int].nativeElement, 'active');
    }, 8000);
  }

  stopSlider(int: number) {
    this.renderer.removeClass(this.upperSlide.toArray()[this.int].nativeElement, 'active');
    this.renderer.removeClass(this.bottomSlide.toArray()[this.int].nativeElement, 'active');
    this.renderer.removeClass(this.upperSlide.toArray()[this.int].nativeElement, 'complete');
    this.renderer.removeClass(this.bottomSlide.toArray()[this.int].nativeElement, 'complete');
    this.int = int;
    clearInterval(this.interval);
    this.renderer.addClass(this.upperSlide.toArray()[this.int].nativeElement, 'complete');
    this.renderer.addClass(this.bottomSlide.toArray()[this.int].nativeElement, 'complete');
  }
}
