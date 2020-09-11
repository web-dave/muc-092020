export interface IBook {
  title: string;
  isbn: string;
  subtitle: string;
  abstract: string;
  numPages: number;
  author: string;
  publisher: {
    name: string;
    url: string;
  };
  cover: string;
}
