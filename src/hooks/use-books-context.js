import { useContext } from 'react';
import BooksContext from '../context/books.context';

export default function useBooksContext() {
  return useContext(BooksContext);
}
