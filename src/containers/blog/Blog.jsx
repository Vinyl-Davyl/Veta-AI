import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';
//NB: Blog is connected to Article.jsx 

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Aug 27, 2021" text="Veta-AI and GPT-3 is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Jan 30, 2021" text="How AI creates photorealistic images from text" />
        <Article imgUrl={blog03} date="Nov 11, 2020" text="Building a more helpful browser with ML Tech" />
        <Article imgUrl={blog04} date="Jul 16, 2020" text="How we build with and for people with disabilities" />
        <Article imgUrl={blog05} date="Jul 04, 2022" text="Mahima Karna is making data easier to get" />
      </div>
    </div>
  </div>
);

export default Blog;
