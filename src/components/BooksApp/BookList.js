import { useContext } from 'react';
import BooksContext from '../../context/books.context';
import BookShow from './BookShow';

const BookList = ({ books, onDelete, onEdit }) => {
  const { count, incrementCount } = useContext(BooksContext);

  const renderedBooks = books.map((book) => (
    <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
  ));
  return (
    <div className='book-list'>
      <div>
        <p>{count}</p>
        <button onClick={incrementCount}>click</button>
      </div>
      {renderedBooks}
    </div>
  );
};

export default BookList;
