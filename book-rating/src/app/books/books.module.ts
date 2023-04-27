import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BookComponent } from './book/book.component';
import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
    imports: [
        CommonModule,
        BooksRoutingModule,
        BookComponent,
        DashboardComponent
    ]
})
export default class BooksModule { }
