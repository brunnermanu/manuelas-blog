import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "../../../services/articles.service";
import { Article } from "../../../Interfaces/articleInterface";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  article: Article | undefined;
  id: number;

  constructor(private articlesService: ArticlesService, private route: ActivatedRoute,) {
  }

  ngOnInit() {
    this.route.params
        .subscribe(
            (params: Params) => {
              this.id = +params['id'];
              this.article = this.articlesService.getArticle(this.id);
            }
        );
  }
}
