import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Veta-AI" text="Veta-AI issued, is a collaborative AI based open-source ecosystem with public datasets, and APIs that allows everyone to make the most of machine learning, Virtual Reality and more. On our sub platform you can also discover, collect and sell items(NFTs) in the marketplace, new games and entertainment everyday, be at the center of an extraordinary VR universe. Be Veta-AI." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Augumented Reality" text="We want to use AI to augment the abilities of people, to enable us to accomplish more and to allow us to spend more time on our creative endeavors." />
      <Feature title="Our Vision" text="At Veta-AI, we’re conducting research that advances the state-of-the-art in the field, applying AI to products and to new domains." />
      <Feature title="On the go" text="AI is making it easier for people to do things every day, whether it’s searching for photos of loved ones and more, we develop tools to ensure that everyone can access AI." />
    </div>
  </div>
);

export default WhatGPT3;
