import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectBooks, } from '../store/book.selectors';

import { BooksService } from '../shared/http';
import * as BookActions from './book.actions';


@Injectable()
export class BookEffects  implements OnInitEffects {

  booksService = inject(BooksService);
  store = inject(Store);

  loadBooks$ = createEffect(() => {
    return inject(Actions).pipe(

      ofType(BookActions.loadBooks),
      withLatestFrom(this.store.select(selectBooks)),
      filter(([action, books]) => !(books.length > 0)),
      switchMap(() =>
        this.booksService.booksGet().pipe(
          map(books => BookActions.loadBooksSuccess({ books })),
          catchError(error => of(BookActions.loadBooksFailure({ error }))))
      )
    );
  });

  ngrxOnInitEffects() {
    return BookActions.loadBooks()
  }
}
//
