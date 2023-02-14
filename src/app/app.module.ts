import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ButtonWithIconComponent } from './components/buttons/button-with-icon/button-with-icon.component';
import { ArticlesComponent } from './pages/articles/articles-list/articles.component';
import { ButtonComponent } from './components/buttons/button/button.component';
import { ArticlePreViewComponent } from './pages/articles/articles-list/article-pre-view/article-pre-view.component';
import { ArticlesService } from "./services/articles.service";
import { ArticleComponent } from './pages/articles/article-detail/article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutMeComponent,
    ButtonWithIconComponent,
    ArticlesComponent,
    ButtonComponent,
    ArticlePreViewComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ArticlesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
