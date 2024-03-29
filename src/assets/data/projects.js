const projects = [
  {
    title: 'Social Media Doggy',
    description:
      'This app is a social media app which let users to create their own profile and share their daily life with friends. Users can follow/unfollow friends and like/unlike their posts.',
    imageUrl: 'assets/images/doggy.jpg',
    github: 'https://github.com/AllenLiu7/doggy-dev',
    liveDemo: 'https://doggy-testing-4odtf.ondigitalocean.app/',
    id: 1,
    tech: 'React, Typescript, Redux Tool Kit, SASS, Styled-component, Express, Node.js, JWT, MongoDB, Redis, Amazon S3',
  },
  {
    title: 'Passport.js Authentication System',
    description:
      'This app is a authentication system built by React, Redux, Redux-Saga, PassportJS and MongoDB Atlas. User can login by registered email and password or use google or facebook Oauth to reveal the secrect with login persistant using express session. Since the state and action is handled by redux-saga, this app can easily be the starting point of a large project that needs a authentication system.',
    imageUrl: 'assets/images/react-passport.png',
    github: 'https://github.com/AllenLiu7/React-Passport-Authentication-Heroku',
    liveDemo: 'https://lit-dawn-27957.herokuapp.com/',
    id: 2,
    tech: 'React, React Boostrap, Redux, Redux-Saga, Express, Node.js, PassportJS, MongoDB Atlas, Heroku',
  },
  {
    title: 'Online Cloth Shop',
    description:
      'This website is an online shop. It is a project based course taught by Mr YiHua Zhang on Udemy. The frontend of this website is built with React and Redux-Saga. User data and product data are stored at Fire store and authentication system is built upon Firebase. A connnected Stripe button conponent is used in the check out page for the mock payment.',
    imageUrl: 'assets/images/cloth-shop.png',
    github: 'https://github.com/AllenLiu7/A-cloth-online-shop',
    liveDemo: 'https://cloth-ecommerce-allenliu.netlify.app/',
    id: 3,
    tech: 'React, Sass, Redux, Redux-saga, Firebase, Netlify',
  },
  {
    title: 'Image Uploader Using Imgur API',
    description:
      "This web app is used to upload images to Imgur.com and display user's images",
    imageUrl: 'assets/images/image_uploader.png',
    github: 'https://github.com/AllenLiu7/image-uploader-imgur-api-vue',
    liveDemo: 'https://imageuploaderforimgur.netlify.app/',
    id: 4,
    tech: 'Vue, Vuex, Bootstrap, Netlify',
  },
  {
    title: 'Personal Blog',
    description:
      'This is a simple blog app using Nextjs with dynamic routing for each post using fake REST API for learning purpose',
    imageUrl: 'assets/images/personal_blog.png',
    github: 'https://github.com/AllenLiu7/blog-routing-nextjs',
    liveDemo: 'https://nextjs-blog-static.netlify.app/',
    id: 5,
    tech: 'Next.js, React, Netlify',
  },
  {
    title: 'Book Manager',
    description:
      'This is a library manager using simple SQLite database. It has routes to list, add, update and delete books. Technologies include Javascript, Nodejs, Express, Pug and SQL ORM Sequaelize. ',
    imageUrl: 'assets/images/book-manager.png',
    github:
      'https://github.com/AllenLiu7/Library-Manager-TechDegree-Project-10',
    liveDemo: '',
    id: 6,
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
    id: 7,
    tech: 'MongoDB, Mongoose, Express and Node.js',
  },
  {
    title: 'React Flickr Gallery',
    description:
      'This is an image gallery using React and the Flickr API. User can search images by whatever keyword or click the preset button.',
    imageUrl: 'assets/images/react-gallery.jpg',
    github: 'https://github.com/AllenLiu7/Image-Gallery-TechDegree-Project-9',
    liveDemo: 'https://react-gallery-allenliu.netlify.app/',
    id: 8,
    tech: 'React, Netlify',
  },
  {
    title: 'Travel Agent Website',
    description:
      'This website is a course project taught by Mr Jonas Schmedtmann. It is a website buile by HTML and Sass and with the purpose to learn more about CSS and SASS.',
    imageUrl: 'assets/images/travel-agent.png',
    github: 'https://github.com/AllenLiu7/travel_agent_website--css_practice',
    liveDemo: 'https://travel-agent-allenliu.netlify.app/',
    id: 9,
    tech: 'HTML, Sass, Netlify',
  },
  {
    title: 'Online Coffee Shop',
    description:
      'This is a course project taught by Mr John Smilga. The main focus of this project is to learn about GatsbyJS. We are using Contentful as the content manager for this project.',
    imageUrl: 'assets/images/coffee-shop.png',
    github: 'https://github.com/AllenLiu7/ecommerce__coffeeshop--gatsby',
    liveDemo: 'https://coffee-shop-allenliu.netlify.app/',
    id: 10,
    tech: 'React, GatsbyJS, Contentful, Netlify',
  },
  {
    title: 'Tic Tac Toe',
    description:
      'A Tic Tac Toe game built by javascript and jQuery. Player can enter their name and play against the computer and it is impossible for the player to win the game.',
    imageUrl: 'assets/images/tictactoe.jpg',
    github: 'https://github.com/AllenLiu7/Tic-Tac-Toe-TechDegree-Project-4',
    liveDemo: 'https://allenliu7.github.io/Tic-Tac-Toe-TechDegree-Project-4/',
    id: 11,
    tech: 'Javascript, jQuery, CSS, Netlify',
  },
  {
    title: 'Employee Directory',
    description:
      'This Employee Directory is built with the Random User Generator API (https://randomuser.me/) to grab information for 12 random "employees". Modal is added built by javascript',
    imageUrl: 'assets/images/API_modal.jpg',
    github:
      'https://github.com/AllenLiu7/A-Directory-using-Public-API-TechDegree-Project-5',
    liveDemo: 'https://api-and-modal-practice.netlify.app/',
    id: 12,
    tech: 'Javascript, jQuery, CSS',
  },
  {
    title: 'Pagination & Content Filter',
    description:
      'This web page uses JavaScript and jQuery to dynamically divide the long list of students into pages with a search feature to display only the students that match the search criteria.',
    imageUrl: 'assets/images/contentfilter.jpg',
    github:
      'https://github.com/AllenLiu7/Pagination-Content-Filter-TechDegree-Project-2',
    liveDemo: 'https://pagination-and-content-filter.netlify.app/',
    id: 13,
    tech: 'Javascript, jQuery, CSS',
  },
  {
    title: 'Interactive Registration Form',
    description:
      'This is an interactive registration form built by javascript and jQuery. It has customized and conditional behavior and interactivity, and can validate user input and providing helpful error messages when the user enters invalid information into the form fields.',
    imageUrl: 'assets/images/interact_form.jpg',
    github:
      'https://github.com/AllenLiu7/Interactive-Registration-Form-TechDegree-Project-3',
    liveDemo: 'https://interactive-form1.netlify.app/',
    id: 14,
    tech: 'Javascript, jQuery, CSS',
  },
];

export default projects;
