import { BookPipe } from './book.pipe';

const pipe = new BookPipe();
describe('BookPipe', () => {
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('return 1', () => {
    expect(pipe.transform(1)).toBe(1);
  });
});
