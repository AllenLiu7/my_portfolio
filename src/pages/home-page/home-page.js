import React from 'react';
import Layout from '../../component/layout/layout.component';
import Landing from '../../component/sessions/landing/landing.component';
import ProjectList from '../../component/sessions/project-list/project-list.component';
import TechList from '../../component/sessions/tech-list/tech-list.component';
import Contact from '../../component/sessions/contact/contact.component';

import './home-page.scss';

class Homepage extends React.Component {
  render() {
    return (
      <Layout>
        <div className='landing'>
          <Landing />
        </div>
        <div className='tech-list'>
          <TechList />
        </div>
        <div className='project-list'>
          <ProjectList />
        </div>
        <Contact />
      </Layout>
    );
  }
}

export default Homepage;
