import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { articles } from './data/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  main!: Article;
  others: Article[] = [];

  constructor() { }

  ngOnInit(): void {
    this.main = articles.main;
    this.others = articles.other;
  }

}
