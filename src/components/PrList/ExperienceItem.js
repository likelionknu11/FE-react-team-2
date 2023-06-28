import React from 'react';

function ExperienceItem({imageUrl, title, price, alt}) {
  return (
    <div className="experience-item">
      <a href="./booking.html">
        <div className="experience-image">
          <img src={imageUrl} alt={alt} />
        </div>
        <div className="experience-description">
          <h2>{title}</h2>
          <p>{price}</p>
        </div>
      </a>
    </div>
  );
}

export default ExperienceItem;
