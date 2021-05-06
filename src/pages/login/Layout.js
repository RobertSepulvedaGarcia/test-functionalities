import React from 'react';
import { Container } from 'react-bootstrap';

import './Layout.scss';
const Layout = ({ children }) => {
  return (
    <div className="bg-img">
      <Container className="layout-login d-flex justify-content-center align-items-center">
        {children}
      </Container>
    </div>
  );
};

export default Layout;
