import { Component, Input, OnInit } from '@angular/core';
import { Article } from "../Interfaces/articleInterface";
import { ArticlesService } from "../services/articles.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  @Input() showLatest: boolean;
  articles: Article[]

  constructor(private articlesService: ArticlesService, private router: Router) {
  }

  ngOnInit() {
    if (this.showLatest) {
      this.articles = this.articlesService.getArticles().slice(-3);
    } else {
      this.articles = this.articlesService.getArticles()
    }
  }

  onArticleClick(itemId: number): void {
    this.router.navigate(['/articles', itemId]).then(a => a);
  }


}
