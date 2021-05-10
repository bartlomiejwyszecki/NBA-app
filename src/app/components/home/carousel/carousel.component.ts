import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data = [
    {
      header: "Curry drains 11 3-pointers, scores 49 in Warriors' victory",
      description: "Steph Curry lights up the Thunder for 49 points in 29 minutes and regains the lead for the scoring title while fans serenade him with chants of “MVP! MVP!”",
      img: "https://www.gannett-cdn.com/presto/2019/08/12/USAT/ecebbf02-7aff-49df-bcc2-e4e780b88fdf-GTY_1150199611.JPG"
    },
    {
      header: "Curry drains 11 3-pointers, scores 49 in Warriors' victory",
      description: "Steph Curry lights up the Thunder for 49 points in 29 minutes and regains the lead for the scoring title while fans serenade him with chants of “MVP! MVP!”",
      img: "https://www.gannett-cdn.com/presto/2019/08/12/USAT/ecebbf02-7aff-49df-bcc2-e4e780b88fdf-GTY_1150199611.JPG"
    },
    {
      header: "Curry drains 11 3-pointers, scores 49 in Warriors' victory",
      description: "Steph Curry lights up the Thunder for 49 points in 29 minutes and regains the lead for the scoring title while fans serenade him with chants of “MVP! MVP!”",
      img: "https://www.gannett-cdn.com/presto/2019/08/12/USAT/ecebbf02-7aff-49df-bcc2-e4e780b88fdf-GTY_1150199611.JPG"
    },
    {
      header: "Curry drains 11 3-pointers, scores 49 in Warriors' victory",
      description: "Steph Curry lights up the Thunder for 49 points in 29 minutes and regains the lead for the scoring title while fans serenade him with chants of “MVP! MVP!”",
      img: "https://www.gannett-cdn.com/presto/2019/08/12/USAT/ecebbf02-7aff-49df-bcc2-e4e780b88fdf-GTY_1150199611.JPG"
    },
    {
      header: "Curry drains 11 3-pointers, scores 49 in Warriors' victory",
      description: "Steph Curry lights up the Thunder for 49 points in 29 minutes and regains the lead for the scoring title while fans serenade him with chants of “MVP! MVP!”",
      img: "https://www.gannett-cdn.com/presto/2019/08/12/USAT/ecebbf02-7aff-49df-bcc2-e4e780b88fdf-GTY_1150199611.JPG"
    }
  ]

}
