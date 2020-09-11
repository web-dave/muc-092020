import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'book',
})
export class BookPipe implements PipeTransform {
  transform(value: number): number {
    console.log('Book Pipe', value);
    return value;
  }
}
