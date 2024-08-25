import React from 'react';
import { Container, Card } from 'react-bootstrap';

const LandingPage = () => {
  return (
    <Container className="my-5">
      <Card className="text-center">
        <Card.Body>
          <Card.Title as="h1">Welcome to TaskSpense</Card.Title>
          <Card.Text>
            Your personal task manager and expense tracker.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LandingPage;
