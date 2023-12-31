import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: Book = {} as Book;
  @Output() emitBook = new EventEmitter<Book>();

  addToCart() {
    this.emitBook.emit(this.book);
  }

}
