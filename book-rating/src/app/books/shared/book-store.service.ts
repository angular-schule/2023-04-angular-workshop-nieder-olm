import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://api.angular.schule/books')
  }

  getSingleBook(isbn: string): Observable<Book> {
    return this.http.get<Book>('http://api.angular.schule/books/' + isbn)
  }
}
