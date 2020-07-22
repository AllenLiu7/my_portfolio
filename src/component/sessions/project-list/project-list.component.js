import React, { Component } from 'react';
import ProjectCard from '../../project-card/project-card.component';
import Fade from 'react-reveal/Fade';
import './project-list.styles.scss';

export default class ProjectList extends Component {
  render() {
    const projects = [
      {
        title: 'Passport Login System',
        description:
          'This app is a login system built by React, Redux-Saga, PassportJS and MongoDB Atlas. User can log in by registered email and password or use google or facebook Oauth to reveal the secrect with login persistant provided by express session. Since the state and action is handled by redux-saga, this app can easily be the starting point of a large project that needs a login system.',
        imageUrl: 'assets/images/react-passport.png',
        github:
          'https://github.com/AllenLiu7/React-Passport-Authentication-Heroku',
        liveDemo: 'https://lit-dawn-27957.herokuapp.com/',
        id: 1,
        tech:
          'React, React Boostrap, Redux, Redux-Saga, Express, Node.js, PassportJS, MongoDB Atlas, Heroku',
      },
      {
        title: 'Online Cloth Shop',
        description:
          'This website is an online shop with full functionality. It is a course project taught by Mr YiHua Zhang on Udemy. The frontend of this website is built using React and Redux-Saga. User data and product data are stored at Firebase and login system is built upon Firebase. A server is established for the integration with Stripe.',
        imageUrl: 'assets/images/cloth-shop.png',
        github: 'https://github.com/AllenLiu7/A-cloth-online-shop',
        liveDemo: 'https://cloth-ecommerce-allenliu.netlify.app/',
        id: 2,
        tech:
          'React, Sass, Redux, Redux-saga, Express, Node.js, Firebase, Netlify',
      },
      {
        title: 'My Portfolio Site',
        description:
          'This website is my portfolio site built by React and Sass. It is mobile responsive using flex box, CSS grid and media query.',
        imageUrl: 'assets/images/portfolio.jpg',
        github: 'https://github.com/AllenLiu7/my_portfolio',
        liveDemo: 'https://my-portfolio-allenliu.netlify.app/',
        id: 3,
        tech: 'React, Sass, Netlify',
      },
      {
        title: 'Book Manager',
        description:
          'This is a library manager using simple SQLite database. It has routes to list, add, update and delete books. Technologies include Javascript, Nodejs, Express, Pug and SQL ORM Sequaelize. ',
        imageUrl: 'assets/images/book-manager.png',
        github:
          'https://github.com/AllenLiu7/Library-Manager-TechDegree-Project-10',
        liveDemo: '',
        id: 4,
        tech: 'Javascript, Node.js, Express, Pug, Sequaelize',
      },
      {
        title: 'Course Rating API',
        description:
          'This project is a REST API using MongoDB, Mongoose, Express.js and Node.js.The API will provide a way for users to review educational courses, users can see a list of courses in a database; add courses to the database; and add reviews for a specific course. Postman is suggested to test this API.',
        imageUrl: 'assets/images/course-rating-api.png',
        github:
          'https://github.com/AllenLiu7/Course-rating-API-TechDegree-Project-11',
        liveDemo: '',
        id: 5,
        tech: 'MongoDB, Mongoose, Express and Node.js',
      },
      {
        title: 'React Flickr Gallery',
        description:
          'This is an image gallery using React and the Flickr API. User can search images by whatever keyword or click the preset button.',
        imageUrl: 'assets/images/react-gallery.jpg',
        github:
          'https://github.com/AllenLiu7/Image-Gallery-TechDegree-Project-9',
        liveDemo: 'https://react-gallery-allenliu.netlify.app/',
        id: 6,
        tech: 'React, Netlify',
      },
      {
        title: 'Travel Agent Website',
        description:
          'This website is a course project taught by Mr Jonas Schmedtmann. It is a website buile by HTML and Sass and with the purpose to learn more about CSS and SASS.',
        imageUrl: 'assets/images/travel-agent.png',
        github:
          'https://github.com/AllenLiu7/travel_agent_website--css_practice',
        liveDemo: 'https://travel-agent-allenliu.netlify.app/',
        id: 7,
        tech: 'HTML, Sass, Netlify',
      },
      {
        title: 'Online Coffee Shop',
        description:
          'This is a course project taught by Mr John Smilga. The main focus of this project is to learn about GatsbyJS. We are using Contentful as the content manager for this project.',
        imageUrl: 'assets/images/coffee-shop.png',
        github: 'https://github.com/AllenLiu7/ecommerce__coffeeshop--gatsby',
        liveDemo: 'https://coffee-shop-allenliu.netlify.app/',
        id: 8,
        tech: 'React, GatsbyJS, Contentful, Netlify',
      },
      {
        title: 'Tic Tac Toe',
        description:
          'A Tic Tac Toe game built by javascript and jQuery. Player can enter their name and play against the computer and it is impossible for the player to win the game.',
        imageUrl: 'assets/images/tictactoe.jpg',
        github: 'https://github.com/AllenLiu7/Tic-Tac-Toe-TechDegree-Project-4',
        liveDemo:
          'https://allenliu7.github.io/Tic-Tac-Toe-TechDegree-Project-4/',
        id: 9,
        tech: 'Javascript, jQuery, CSS, Netlify',
      },
    ];
    return (
      <div className='project-session'>
        <div className='project-list'>
          <Fade left delay={200}>
            <h1 className='project-list__title'>PROJECTS</h1>
          </Fade>
          <Fade right>
            <div className='project-list__title-bar'></div>
          </Fade>

          <div className='project-list__card-container'>
            {projects.map(({ id, ...otherProjectProps }) => (
              <div key={id}>
                <Fade>
                  <ProjectCard {...otherProjectProps} />
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
