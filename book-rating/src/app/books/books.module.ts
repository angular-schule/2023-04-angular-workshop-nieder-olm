import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Store } from '@ngrx/store';

import { BookComponent } from './book/book.component';
import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StoreModule } from '@ngrx/store';
import * as fromBook from './store/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './store/book.effects';
import { loadBooks } from './store/book.actions';


@NgModule({
    imports: [
        CommonModule,
        BooksRoutingModule,
        BookComponent,
        DashboardComponent,
        StoreModule.forFeature(fromBook.bookFeatureKey, fromBook.reducer),
        EffectsModule.forFeature([BookEffects])
    ]
})
export default class BooksModule {

  constructor(store: Store) {
    store.dispatch(loadBooks());

    setTimeout(() => store.dispatch(loadBooks()), 1000)
  }
}
