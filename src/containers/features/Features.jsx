import React from 'react'
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Through research and initiatives to build the AI ecosystem, we’re working to use AI to address societal challenges.',
  },
  {
    title: 'Become the tended active',
    text: 'At Veta-AI we believe that AI can provide new ways of approaching problems and meaningfully improve people’s lives.',
  },
  {
    title: 'The World, AI and You',
    text: 'We believe that we can meaningfully contribute, drawing on the scale of our products and services.',
  },
  {
    title: 'Early access, Early AI',
    text: 'Yeah, We’re doing that through AI for Social Good, a program that focuses on AI to solve humanitarian problems.',
  },
]

function Features() {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
            The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features
