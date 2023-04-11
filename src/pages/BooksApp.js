import { useContext, useEffect } from 'react';
import BookCreate from '../components/BooksApp/BookCreate';
import BookList from '../components/BooksApp/BookList';
import BooksContext from '../context/books.context';

const BooksApp = () => {
  const { fetchBooks } = useContext(BooksContext);

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
};

export default BooksApp;
