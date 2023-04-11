import React, { useContext, useState } from 'react';
import BooksContext from '../../context/books.context';

const BookCreate = () => {
  const [title, setTitle] = useState('');
  const { createBook } = useContext(BooksContext);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle('');
  };

  return (
    <div className='book-create'>
      <h3>Add a Book</h3>
      <form onSubmit={onSubmitHandler}>
        <label>Title</label>
        <input className='input' value={title} onChange={handleChange} />
        <button className='button'>Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;
