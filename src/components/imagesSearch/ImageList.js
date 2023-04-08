import React from 'react';
import ImageShow from './ImageShow';

function ImageList({ images }) {
  
  return (
    <div>
      {images &&
        images.map((image) => <ImageShow key={image.id} image={image} />)}
    </div>
  );
}

export default ImageList;
