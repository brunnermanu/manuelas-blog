import { Component } from '@angular/core';
import { Article } from "../../Interfaces/articleInterface";
import { Observable } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  articles: Observable<Article[]>
  //
  // constructor(private articlesService: ArticlesService, private router: Router) {
  // }
  //
  // ngOnInit() {
  //   this.articles = this.articlesService.getArticles$()
  // }
}
