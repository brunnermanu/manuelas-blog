import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ButtonWithIconComponent } from './button-with-icon/button-with-icon.component';
import { ArticlesComponent } from './articles/articles.component';
import { ButtonComponent } from './button/button.component';
import { ArticlePreViewComponent } from './article-pre-view/article-pre-view.component';
import { ArticlesService } from "./services/articles.service";
import { ArticleComponent } from './article/article.component';

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
