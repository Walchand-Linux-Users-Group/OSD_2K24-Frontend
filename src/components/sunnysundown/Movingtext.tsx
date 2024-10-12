// MovingText.tsx
import React from 'react';
import './Movingtext.css';

const MovingText: React.FC = () => {
  return (
    <div id="page2">
      <div id="moving-text">
        {[...Array(3)].map((_, index) => (
          <div className="con" key={index}>
            <h1>EXPERIENCES</h1>
            <div className="gola"></div>
            <h1>CONTENT</h1>
            <div className="gola"></div>
            <h1>ENVIRONMENTS</h1>
            <div className="gola"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovingText;
