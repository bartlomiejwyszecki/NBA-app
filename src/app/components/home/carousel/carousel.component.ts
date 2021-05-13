import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { data } from './data/data';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  data = data;
  stop!: boolean;

  constructor(private elem: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.runSlider();
    }, 0);
  }
 
  runSlider() {
    const elements = this.elem.nativeElement.querySelectorAll('.bottom');
    const currentUpperElement = this.elem.nativeElement.querySelectorAll('.upperSlide');
    let int = 0;

    let interval = setInterval(() => {
      this.renderer.removeClass(elements[int], 'active');
      this.renderer.removeClass(currentUpperElement[int], 'active');
      int === elements.length - 1 ? int = 0 : int++;
      this.renderer.addClass(elements[int], 'active');
      this.renderer.addClass(currentUpperElement[int], 'active');
    }, 8000);

    let switchSlide = () => {
      this.renderer.addClass(elements[int], 'active');
      this.renderer.addClass(currentUpperElement[int], 'active');
      interval;
    }

    switchSlide();
  }
}
