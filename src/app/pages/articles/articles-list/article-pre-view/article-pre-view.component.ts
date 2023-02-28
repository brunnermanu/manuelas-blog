import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";
import { Article } from "../../../../Interfaces/articleInterface";

@Component({
  selector: 'app-article-pre-view',
  templateUrl: './article-pre-view.component.html',
  styleUrls: ['./article-pre-view.component.scss']
})


export class ArticlePreViewComponent {
  @Input() article: Article;

  constructor(private router: Router) {}

  onArticleClick(id: number): void {
    this.router.navigate(['article', id]).then(r => r);
  }
}
