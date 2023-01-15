import { Component, OnInit } from '@angular/core';
import { Article } from "../Interfaces/articleInterface";
import { ArticlesService } from "../services/articles.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: Article[]

  constructor(private articlesService: ArticlesService, private router: Router) {
  }

  ngOnInit() {
    this.articles = this.articlesService.getArticles()
  }

  onArticleClick(itemId: number): void {
    this.router.navigate(['/articles', itemId]).then(r => r);
  }


}
