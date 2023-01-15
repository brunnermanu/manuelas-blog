import { Component, Input } from '@angular/core';


interface Article {
  id: number;
  title: string;
  titleImage: string;
  content: string;
  createdAt: string;
  authorName: string;
  authorImage: string;
  timeToRead: string;
}

@Component({
  selector: 'app-article-pre-view',
  templateUrl: './article-pre-view.component.html',
  styleUrls: ['./article-pre-view.component.scss']
})


export class ArticlePreViewComponent {
  @Input() article: Article;

}
