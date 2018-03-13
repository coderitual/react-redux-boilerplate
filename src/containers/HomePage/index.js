import React from 'react';
import image from 'images/image.jpg';

export default () => {
  return (
    <div className="home">
      <h1>Home page</h1>
      <img src={image} alt="home" />
    </div>
  );
};
