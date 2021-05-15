import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnInit {
  @Input() article!: Article;

  constructor() { }

  ngOnInit(): void {
  }

}
