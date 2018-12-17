import React from 'react';

// TODO: add implementation of the responsive image component

const ResponviveImage = props => {
  return (
    <img
      data-sizes="auto"
      data-src={props.src}
      data-srcset="image1.jpg 300w,
      image2.jpg 600w,
      image3.jpg 900w"
      class="lazyload"
    />
  );
};

export default ResponsiveImage;
