import axios from 'axios';
import { createContext, useState, useCallback } from 'react';

const BooksContext = createContext();

function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  // !!! useCallback encapsule fetchBooks to avoid endless rerender in useEffect function !!!
  const fetchBooks = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  }, []);
  ////////////////////////////////////////////////////////////////

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    setBooks(
      books.map((book) => {
        if (book.id === id) {
          return { ...book, ...response.data };
        }
        return book;
      })
    );
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    setBooks(books.filter((book) => book.id !== id));
  };

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });
    const updatedBooks = [...books, response.data];
    setBooks(updatedBooks);
  };

  const value = {
    fetchBooks,
    books,
    deleteBookById,
    editBookById,
    createBook,
    setBooks,
  };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
}

export { BooksProvider };
export default BooksContext;
