import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => (
  <div className="gpt3__features-container__feature">
     {/* This is going to be the small line at the top of the H1 */}
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
