import { useState } from 'react';
import BookCreate from '../components/BooksApp/BookCreate';
import BookList from '../components/BooksApp/BookList';

const BooksApp = () => {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    setBooks(
      books.map((book) => {
        if (book.id === id) {
          return { ...book, title: newTitle };
        }
        return book;
      })
    );
  };

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
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default BooksApp;
