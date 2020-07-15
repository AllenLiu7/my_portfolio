import React from 'react';
//import Header from '../header/header.component';
import './layout.styles.scss';

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
        <footer />
      </div>
    </>
  );
};

export default Layout;
