import React from 'react';
import NavBar from '../nav-bar/nav-bar.component';
import SideBar from '../nav-sidebar/nav-sidebar.component';
import Footer from '../footer/footer.component';
//import './layout.styles.scss';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <NavBar toggleSidebar={toggleSidebar} />
        <SideBar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
