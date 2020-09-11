import { Injectable } from '@angular/core';
import { IBook } from './ibook';
import { Observable, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private books: IBook[] = [
    {
      title: 'Design Patterns',
      isbn: 1,
      subtitle: 'Elements of Reusable Object-Oriented Software',
    },
    {
      title: 'REST und HTTP',
      isbn: 2,
      subtitle: 'Entwicklung und Integration nach dem Architekturstil des Web',
    },
    {
      title: 'Eloquent JavaScript',
      isbn: 3,
      subtitle: 'A Modern Introduction to Programming',
    },
  ];
  constructor() {}

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }
  getBooks2(): Observable<IBook> {
    return from(this.books);
  }
}
