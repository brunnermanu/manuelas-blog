import { Component, Input } from '@angular/core';
import { Article } from "../../../Interfaces/articleInterface";

@Component({
  selector: 'app-article-pre-view',
  templateUrl: './article-pre-view.component.html',
  styleUrls: ['./article-pre-view.component.scss']
})


export class ArticlePreViewComponent {
  @Input() article: Article;
  @Input() index: number;

}
