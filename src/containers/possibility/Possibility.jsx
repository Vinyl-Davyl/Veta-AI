import React from 'react'
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

function Possibility() {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility"/>
      </div>
      <div className="gpt3__possibility-content">
        <h4>Gear Up, Get Ready!</h4>
        <h1 className="gradient__text">
          The possibilities are beyoud your imagination
        </h1>
        <p>
          Experience new realities with a custom OLED screen and smooth 120fps visuals to create complete immersion in your games. Sit back and immerse yourself with a range of stunning virtual reality experiences, from scaling Mt Everest to exploring the skies.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility
