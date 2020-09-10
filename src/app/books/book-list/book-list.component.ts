import { Component, OnInit } from '@angular/core';
import { IBook } from '../ibook';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styles: [],
})
export class BookListComponent implements OnInit {
  books: IBook[] = [
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

  ngOnInit(): void {}
}
