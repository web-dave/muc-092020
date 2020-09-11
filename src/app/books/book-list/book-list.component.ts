import { Component, OnInit, OnDestroy } from '@angular/core';
import { IBook } from '../ibook';
import { BookService } from '../book.service';
import { interval, merge, Observable, Subscription } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styles: [],
})
export class BookListComponent implements OnInit, OnDestroy {
  book$: Observable<IBook[]>;
  bar: Observable<IBook>;
  foo: Observable<string>;
  baz: Subscription;
  a = interval(1500).pipe(map(() => 'affa'));
  b = interval(500).pipe(map(() => 'baffe'));
  c = interval(700).pipe(map(() => 'caffe'));
  d = interval(2500).pipe(map(() => 'daffe'));
  constructor(private service: BookService) {}

  ngOnInit(): void {
    this.book$ = this.service
      .getBooks()
      .pipe(map((x) => x.filter((b) => b.isbn === 2)));
    this.foo = merge<string>(this.a, this.b, this.c, this.d);
    this.bar = this.service.getBooks2().pipe(
      tap((data) => console.log(data)),
      filter((b) => b.isbn === 1)
    );

    this.baz = this.service.getBooks2().subscribe();
  }

  ngOnDestroy() {
    this.baz.unsubscribe();
  }
}
