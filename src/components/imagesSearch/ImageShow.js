import React from 'react';

function ImageShow({ image }) {
  return (
    <div>
      <img className='img-search' src={image.urls.small} alt={image.alt_description} />
    </div>
  );
}

export default ImageShow;
