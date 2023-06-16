import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  name: string = 'The River Between'
  author: string = "Ngugi Wa'Thiongo"
  src: string = "https://th.bing.com/th/id/R.60ef3638d16fea1eed31c8cd1a3d94e7?rik=1W7JkWayL4vpGQ&pid=ImgRaw&r=0"

  isShowing: boolean = true

  constructor() { }

  toggleBooks() { this.isShowing = !this.isShowing }

  ngOnInit(): void { }

}
