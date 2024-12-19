import React from 'react';
import PropTypes from 'prop-types';

const ExampleCarouselImage = ({ text }) => {
  return (
    <div className="carousel-image-container" style={{ textAlign: 'center', height: '400px', backgroundColor: '#eee' }}>
      {/* Simulación de una imagen con texto */}
      <p style={{ lineHeight: '400px', margin: 0, fontSize: '1.5rem', color: '#333' }}>
        {text}
      </p>
    </div>
  );
};

ExampleCarouselImage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;