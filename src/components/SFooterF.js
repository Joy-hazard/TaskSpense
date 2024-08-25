import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const SFooterF = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      <Container>
        <Row>
          <Col>
            &copy; {new Date().getFullYear()} Joy Pal | 
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"> GitHub</a> | 
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"> LinkedIn</a> | 
            <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer"> Portfolio</a>
          </Col>
        </Row>
     </Container>
    </footer>
  );
};

export default SFooterF;
