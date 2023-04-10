import { useState } from 'react';
import BookCreate from '../components/BooksApp/BookCreate';
import BookList from '../components/BooksApp/BookList';

const BooksApp = () => {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 99999), title },
    ];
    setBooks(updatedBooks);
  };

  return (
    <div className='app'>
      <BookList books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default BooksApp;
