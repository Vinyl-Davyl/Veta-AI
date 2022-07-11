import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai2.png';


function Header() {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Create your own VR and OpenAI Reality with VetaAI
        </h1>
        <p>
          An autoregressive language model that can learn and replicate human writing mannerisms, potentially creating human-like text. Adds with a plus of making it easy to meet with friends online, Join in games while also immersing in virtual reality.
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="The Future is now, Your Email!"/>
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people}  alt="people"/>
          <p>1.600 people requested access a visit in last 24 hours</p>
        </div>
      </div>

        <div className="gpt3__header-image">
          <img src={ai} alt="ai"/>
        </div>
    </div>
  )
}

export default Header
