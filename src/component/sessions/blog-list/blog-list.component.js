import React, { Component } from 'react';
import BlogCard from '../../blog-card/blog-card.component';
import Fade from 'react-reveal/Fade';
import './blog-list.styles.scss';

export default class BlogList extends Component {
  render() {
    const blogs = [
      {
        title:
          'How to set up ReactJS, Redux-Saga and Passport.js in an authentication app with OAuth and local strategy Part 1',
        id: '1',
        imageUrl: 'assets/images/part1.jpg',
        link:
          'https://medium.com/@allen6qi/how-to-set-up-reactjs-redux-saga-and-passport-js-a5d1e7caca90',
        description:
          'I love all the technologies mentioned in the title and I want to build a simple authentication app using the them. There are not too many…',
      },
      {
        title:
          'How to set up ReactJS, Redux-Saga and Passport.js in an authentication app with OAuth and local strategy Part 2',
        id: '2',
        imageUrl: 'assets/images/part2.jpg',
        link:
          'https://medium.com/@allen6qi/how-to-set-up-reactjs-redux-saga-and-passport-js-8f4380a5d116',
        description:
          'This is the Part 2 of my authentication app series. Part 1 is here. In Part 2, we will go through how to construct the frontend code using…',
      },
      {
        title:
          'How to set up ReactJS, Redux-Saga and Passport.js in an authentication   app with OAuth and local strategy Part 3',
        id: '3',
        imageUrl: 'assets/images/part3.jpg',
        link:
          'https://medium.com/@allen6qi/how-to-set-up-reactjs-redux-saga-and-passport-js-3152cac4b20a',
        description:
          'This is the Part 3 of my authentication app series. In Part 2 we have talked about how to setup Redux, Redux, Redux-saga, forms that users…',
      },
    ];

    return (
      <div className='blog-session'>
        <div className='blog-list'>
          <Fade left delay={200}>
            <h1 className='blog-list__title'>BLOGS</h1>
          </Fade>
          <Fade right>
            <div className='blog-list__title-bar'></div>
          </Fade>
          <Fade>
            <div className='blog-list__card-container'>
              {blogs.map(({ id, ...otherProjectProps }) => (
                <BlogCard key={id} {...otherProjectProps} />
              ))}
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}
