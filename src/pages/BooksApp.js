import { useState, useEffect } from 'react';
import BookCreate from '../components/BooksApp/BookCreate';
import BookList from '../components/BooksApp/BookList';
import axios from 'axios';

const BooksApp = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

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

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });

    const updatedBooks = [...books, response.data];
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
