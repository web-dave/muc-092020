import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Observable } from 'rxjs';
import { IBook } from '../ibook';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [],
})
export class DetailsComponent implements OnInit, OnDestroy {
  book$: Observable<IBook>;
  book1$: Observable<IBook>;
  constructor(private route: ActivatedRoute, private service: BookService) {
    console.log(route);
  }
  ngOnDestroy(): void {
    console.log('DEST');
  }

  getKeys(book: IBook) {
    return Object.keys(book);
  }

  ngOnInit(): void {
    this.book$ = this.service.getBook(this.route.snapshot.params['isbn']);
    // this.route.params.subscribe((params: { isbn: string }) => {
    //   this.book1$ = this.service.getBook(params.isbn);
    // });
    this.book1$ = this.route.params.pipe(
      switchMap((params: { isbn: string }) => this.service.getBook(params.isbn))
    );
  }
}
