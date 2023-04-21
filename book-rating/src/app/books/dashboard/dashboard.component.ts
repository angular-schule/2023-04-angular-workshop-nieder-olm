import { Component } from '@angular/core';
import { Book } from '../shared/book';
import { BookComponent } from '../book/book.component';
import { NgFor } from '@angular/common';

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
}
