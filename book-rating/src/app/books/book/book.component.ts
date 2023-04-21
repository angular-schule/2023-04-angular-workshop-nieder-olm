import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../shared/book';
import { NgIf } from '@angular/common';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  standalone: true,
  imports: [NgIf]
})
export class BookComponent {

  @Input() book?: Book;
  @Output() rateUp = new EventEmitter<Book>();
  @Output() rateDown = new EventEmitter<Book>();

  doRateUp() {
    this.rateUp.emit(this.book);
  }

  doRateDown() {
    this.rateDown.emit(this.book);
  }
}
