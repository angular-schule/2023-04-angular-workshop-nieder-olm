import { Component } from '@angular/core';
import { Book } from '../shared/book';
import { BookComponent } from '../book/book.component';
import { NgFor } from '@angular/common';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
    selector: 'br-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: true,
    imports: [NgFor, BookComponent]
})
export class DashboardComponent {

  books: Book[] = [{
    isbn: '000',
    title: 'Angular',
    description: 'Tolles Buch',
    rating: 5
  }, {
    isbn: '111',
    title: 'AngularJS',
    description: 'Altes Buch',
    rating: 3
  }, {
    isbn: '222',
    title: 'jQuery',
    description: 'Blubb',
    rating: 1
  }];

  constructor(private br: BookRatingService) { }

  doRateUp(book: Book): void {
    const ratedBook = this.br.rateUp(book);
    this.updateAndSort(ratedBook);
  }

  doRateDown(book: Book): void {
    const ratedBook = this.br.rateDown(book);
    this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book) {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating);
  }
}
