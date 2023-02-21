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
      linkedIn: "https://www.linkedin.com/in/manuelabrunner/",
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
      timeToRead: "5 Min Read",
      linkedIn: "https://www.linkedin.com/in/manuelabrunner/"
    },
    {
      id: 3,
      title: "Article Lorem",
      titleImage: "/assets/images/careerchange.jpg",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultricies nisi a porttitor tincidunt. Nam at congue elit. Nullam sed imperdiet purus, non tempor metus. Aenean luctus libero id elit bibendum, a viverra enim tristique. Donec nec porttitor turpis.",
      createdAt: "1.1.2023",
      authorName: "Manuela",
      authorImage: "assets/images/manu-profile-image.png",
      timeToRead: "3 Min Read",
      linkedIn: "https://www.linkedin.com/in/manuelabrunner/"
    },
    {
      id: 4,
      title: "Sit amet bacon ipsum",
      titleImage: "/assets/images/careerchange.jpg",
      content: "Bacon ipsum dolor amet pork loin jowl ball tip capicola, kielbasa meatloaf tail fatback sirloin burgdoggen pig alcatra tongue pork chop picanha. Chislic shank drumstick jerky pig short ribs, porchetta shankle tongue. Jerky filet mignon pork chop pig doner. Strip steak pork loin alcatra tongue meatloaf leberkas jowl bresaola cupim. Jerky burgdoggen kevin, salami shankle jowl cow tenderloin ball tip corned beef ground round sirloin chuck turkey turducken. Kielbasa landjaeger filet mignon biltong shoulder turkey hamburger beef ribs capicola doner burgdoggen pork chop tenderloin shank. Kielbasa ball tip buffalo tri-tip tongue hamburger sausage brisket.\n" +
          "\n" +
          "Venison picanha tenderloin beef pork bacon meatball t-bone. Chuck tail ground round, tri-tip pig brisket pork loin swine ribeye tongue capicola. Tenderloin chicken chislic tri-tip ground round ribeye biltong jerky t-bone kielbasa short ribs pork cupim. T-bone turducken venison, bacon prosciutto capicola swine tenderloin buffalo spare ribs. Ribeye pork loin shoulder, tail buffalo shank short ribs. Pig filet mignon beef flank ham buffalo. Venison ground round filet mignon cupim fatback.\n" +
          "\n" +
          "Alcatra fatback turducken, buffalo pork chop pork belly tail. Jerky sirloin burgdoggen shank sausage andouille capicola rump turducken. Chicken pig t-bone tri-tip pork chuck porchetta pork loin pancetta alcatra short loin boudin beef fatback. Hamburger beef leberkas chislic alcatra shoulder. Chicken rump jowl pastrami ribeye doner kevin ball tip filet mignon picanha hamburger landjaeger leberkas ham hock biltong. Brisket bresaola strip steak swine corned beef, sirloin picanha jerky prosciutto buffalo turkey beef ribs chuck.\n" +
          "\n" +
          "Turducken fatback chicken tri-tip, ribeye porchetta meatloaf jowl short loin. T-bone pork chop shankle venison tongue short ribs rump. Flank venison picanha kevin jowl porchetta. Biltong fatback venison tenderloin jerky meatloaf. Flank bresaola kevin turducken prosciutto. Meatloaf tongue burgdoggen kevin venison beef ribs strip steak frankfurter corned beef ball tip sausage pork loin.\n" +
          "\n" +
          "Picanha short ribs ribeye pork belly bresaola pig boudin. Sirloin cupim fatback spare ribs meatloaf prosciutto landjaeger. Kielbasa doner t-bone corned beef pork belly shank biltong sausage jerky. Frankfurter pancetta shankle ball tip chicken short loin ham buffalo doner ground round cow pork belly andouille. Filet mignon jowl burgdoggen hamburger capicola. Salami turducken short loin ground round. Sirloin biltong turkey capicola.\n" +
          "\n" +
          "Does your lorem ipsum text long for something a little meatier? Give our generator a try… it’s tasty!",
      createdAt: "2.1.2023",
      authorName: "Manuela",
      authorImage: "assets/images/manu-profile-image.png",
      timeToRead: "5 Min Read",
      linkedIn: "https://www.linkedin.com/in/manuelabrunner/"
    },
  ]

  getArticles$(start: number): Observable<Article[]> {
    return of(this.articles.slice(start));
  }

  getArticle(id: number) {
    return this.articles.find(article => article.id === id);
  }
}
