import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookPipe } from './book.pipe';

@NgModule({
  declarations: [BookComponent, BookListComponent, BookPipe],
  exports: [BookComponent],
  imports: [CommonModule, BooksRoutingModule],
})
export class BooksModule {}
