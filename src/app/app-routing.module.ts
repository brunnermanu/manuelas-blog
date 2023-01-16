import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from "./about-me/about-me.component";
import { HomeComponent } from "./home/home.component";
import { ArticlesComponent } from "./articles/articles.component";
import { ArticleComponent } from "./article/article.component";

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'articles', component: ArticlesComponent
  },
  { path: 'articles/:id', component: ArticleComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
