import { Component, Input, OnInit } from '@angular/core';
import { Article } from "../../../Interfaces/articleInterface";
import { ArticlesService } from "../../../services/articles.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  @Input() showLatest: boolean;
  @Input() title: string;
  articles$: Observable<Article[]>;

  constructor(private articlesService: ArticlesService, private router: Router) {
  }

  ngOnInit() {
    if (this.showLatest) {
      this.articles$ = this.articlesService.getArticles$(-3);
    } else {
      this.articles$ = this.articlesService.getArticles$(0)
    }
  }

  onArticleClick(itemId: number): void {
    void this.router.navigate(['/articles', itemId]);
  }
}
