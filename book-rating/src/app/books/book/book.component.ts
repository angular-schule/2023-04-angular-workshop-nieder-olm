import { Component, Input } from '@angular/core';
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

  @Input()
  book?: Book;

}
