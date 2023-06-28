import React from 'react';
import '../css/navigation.css'; 

function Navigation({ title }) {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">예약하기</a></li>
          <li><a href="#">관광</a></li>
          <li><a href="#">뭐넣지</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
