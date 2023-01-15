import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "../services/articles.service";
import { Article } from "../Interfaces/articleInterface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: Article[]

  constructor(private articlesService: ArticlesService) {
  }

  ngOnInit() {
    this.articles = this.articlesService.getArticles()
  }

}
