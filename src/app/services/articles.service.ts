import { Injectable } from "@angular/core";
import { Article } from "../Interfaces/articleInterface";
import { Observable, of } from "rxjs";

@Injectable()
export class ArticlesService {
  private articles: Article[] = [
    {
      id: 1,
      title: "How to become a Frontend Dev?",
      titleImage: "/assets/images/careerchange.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies nisi a porttitor tincidunt. Nam at congue elit. Nullam sed imperdiet purus, non tempor metus. Aenean luctus libero id elit bibendum, a viverra enim tristique. Donec nec porttitor turpis.",
      createdAt: "1.1.2023",
      authorName: "Manuela",
      authorImage: "assets/images/manu-profile-image.png",
      timeToRead: "3 Min Read"
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      titleImage: "/assets/images/careerchange.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies nisi a porttitor tincidunt. Nam at congue elit. Nullam sed imperdiet purus, non tempor metus. Aenean luctus libero id elit bibendum, a viverra enim tristique. Donec nec porttitor turpis.",
      createdAt: "2.1.2023",
      authorName: "Manuela",
      authorImage: "assets/images/manu-profile-image.png",
      timeToRead: "5 Min Read"
    },
    {
      id: 3,
      title: "Article Lorem",
      titleImage: "/assets/images/careerchange.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies nisi a porttitor tincidunt. Nam at congue elit. Nullam sed imperdiet purus, non tempor metus. Aenean luctus libero id elit bibendum, a viverra enim tristique. Donec nec porttitor turpis.",
      createdAt: "1.1.2023",
      authorName: "Manuela",
      authorImage: "assets/images/manu-profile-image.png",
      timeToRead: "3 Min Read"
    },
    {
      id: 4,
      title: "Sit amet bacon ipsum",
      titleImage: "/assets/images/careerchange.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies nisi a porttitor tincidunt. Nam at congue elit. Nullam sed imperdiet purus, non tempor metus. Aenean luctus libero id elit bibendum, a viverra enim tristique. Donec nec porttitor turpis.",
      createdAt: "2.1.2023",
      authorName: "Manuela",
      authorImage: "assets/images/manu-profile-image.png",
      timeToRead: "5 Min Read"
    },
  ]

  getArticles$(start: number): Observable<Article[]> {
    return of(this.articles.slice(start));
  }
}
