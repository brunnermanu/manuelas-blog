import { Component, Input } from '@angular/core';
import { Article } from "../../../Interfaces/articleInterface";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent {
  @Input() article: Article | undefined;
}
