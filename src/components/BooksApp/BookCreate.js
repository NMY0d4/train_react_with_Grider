import React, { useState } from 'react';
import useBooksContext from '../../hooks/use-books-context';

const BookCreate = () => {
  const [title, setTitle] = useState('');
  const { createBook } = useBooksContext();

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
