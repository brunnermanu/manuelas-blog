import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from "./pages/about-me/about-me.component";
import { HomeComponent } from "./pages/home/home.component";
import { ArticlesComponent } from "./pages/articles/articles-list/articles.component";
import { ArticleComponent } from "./pages/articles/article-detail/article.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: ArticleComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
