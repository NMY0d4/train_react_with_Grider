import { useState } from 'react';
import ImageList from '../components/imagesSearch/ImageList';
import SearchBar from '../components/imagesSearch/SearchBar';
import searchImages from '../utils/api';

function SearchImages() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const imgs = await searchImages(term);
    setImages(imgs);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default SearchImages;
