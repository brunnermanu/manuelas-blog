import { Component } from '@angular/core';
import { Article } from "../../Interfaces/articleInterface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  articles: Article[];
}
