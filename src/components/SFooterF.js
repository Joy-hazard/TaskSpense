import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaLink } from 'react-icons/fa'; // Importing icons from react-icons

const SFooterF = () => {
  return (
    <footer className="bg-light text-dark mt-5 p-4 text-center fixed-bottom">
      <Container>
        <Row>
          <Col>
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Joy Pal |
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-dark mx-2">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-dark mx-2">
                <FaLinkedin size={20} />
              </a>
              <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer" className="text-dark mx-2">
                <FaLink size={20} />
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default SFooterF;
