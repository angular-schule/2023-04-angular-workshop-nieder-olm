import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../shared/book';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  standalone: true,
  imports: [NgIf, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent {

  @Input() book?: Book;

  @Output() rateUp = new EventEmitter<Book>();
  @Output() rateDown = new EventEmitter<Book>();

  doRateUp() {
    if (this.book) {
      this.rateUp.next(this.book);
    }
  }

  doRateDown() {
    if (this.book) {
      this.rateDown.next(this.book);
    }
  }

  log() {
    console.log(+new Date());
  }
}
