import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [BookComponent],
  exports: [BookComponent],
  imports: [CommonModule, BooksRoutingModule],
})
export class BooksModule {}
