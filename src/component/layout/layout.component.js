import React from 'react';
import Header from '../header/header.component';
import './layout.styles.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
        <footer />
      </div>
    </>
  );
};

export default Layout;
