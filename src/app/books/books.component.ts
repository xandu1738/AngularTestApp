import { Component } from '@angular/core';

interface Book {
  name: string
  author: string
  src: string
  amount: number
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books: Book[] = [
    {
      name: 'The River Between',
      author: "ngugi wa'thiongo",
      src: "https://th.bing.com/th/id/R.60ef3638d16fea1eed31c8cd1a3d94e7?rik=1W7JkWayL4vpGQ&pid=ImgRaw&r=0",
      amount: 15000
    },
    {
      name: 'The african child',
      author: "Camara Laye",
      src: "https://th.bing.com/th/id/R.decc885b90ac271fdb17840846f7841d?rik=gTsFQ3r%2bywuLlw&pid=ImgRaw&r=0",
      amount: 15000
    },
    {
      name: 'The Adventures of Tom Sawyer',
      author: "Mark Twain",
      amount: 12000,
      src: 'https://th.bing.com/th/id/R.1ad282d211879fddd3d99e20f9ad0f6c?rik=eQXEXP4JMgX3UA&pid=ImgRaw&r=0'
    }
  ]
  isShowing: boolean = true

  constructor() { }

  toggleBooks() { this.isShowing = !this.isShowing }

  ngOnInit(): void { }

}
