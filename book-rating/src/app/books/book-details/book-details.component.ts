import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, map, of, retry, shareReplay, switchMap, tap } from 'rxjs';

import { BooksslowService } from '../shared/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'br-book-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export default class BookDetailsComponent {

  booksService = inject(BooksslowService);

  book$ = inject(ActivatedRoute).paramMap.pipe(
    map(paramMap => paramMap.get('isbn') || ''),
    // tap(console.log),
    switchMap(isbn => this.booksService.booksIsbnSlowGet(isbn).pipe(
      retry({
        count: 3,
        delay: 1000
      }),
      catchError((err: HttpErrorResponse) => of({
        title: 'Fehler',
        description: err.message
      }))
    ))
  );

}
