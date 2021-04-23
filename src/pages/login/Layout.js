import React from 'react';
import { Container } from 'react-bootstrap';
import './Layout.scss';
const Layout = ({ children }) => {
  return (
    <div className='bg-img'>
      <Container fluid className='layout-login'>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
