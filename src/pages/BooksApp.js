import { useState } from 'react';
import BookCreate from '../components/BooksApp/BookCreate';

const BooksApp = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    console.log(`Need to add book with : ${title}`);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default BooksApp;
