import React, { useState } from 'react';
import BookEdit from './BookEdit';
import useBooksContext from '../../hooks/use-books-context';

const BookShow = ({ book }) => {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteBookById } = useBooksContext();

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const onSubmit = () => {
    setShowEdit(false);
  };

  let content = showEdit ? (
    <BookEdit onSubmit={onSubmit} book={book} />
  ) : (
    <h3>{book.title}</h3>
  );

  return (
    <div className='book-show'>
      <img alt='books' src={`https://picsum.photos/seed/${book.id}/300/200`} />
      <div>{content}</div>
      <div className='actions'>
        <button className='edit' onClick={handleEditClick}>
          Edit
        </button>
        <button className='delete' onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
