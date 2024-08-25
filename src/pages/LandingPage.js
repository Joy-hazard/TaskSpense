import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const LandingPage = () => {
  const location = useLocation();
  const userName = localStorage.getItem('username') || 'Guest';

  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col>
          <Card className="text-center text-dark font-monospace mt-4 mb-5">
            <Card.Body>
              <Card.Title as="h1">Welcome, {userName}!</Card.Title>
              <Card.Text>
                Your personal task manager and expense tracker. Manage your tasks efficiently and keep track of your expenses effortlessly.
              </Card.Text>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-4">
          <Card className="text-center border-info">
            <Card.Body>
              <Card.Title as="h3">To-Do List</Card.Title>
              <Card.Text>
                Stay organized and on top of your tasks with our intuitive to-do list feature. Easily add, remove, and manage your daily tasks.
              </Card.Text>
              <Button variant="info" href="/tasks">
                Explore To-Do List
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card className="text-center border-success">
            <Card.Body>
              <Card.Title as="h3">Expenses Tracker</Card.Title>
              <Card.Text>
                Keep track of your expenses and manage your budget effectively. Analyze your spending and make informed financial decisions.
              </Card.Text>
              <Button variant="success" href="/expenses">
                Explore Expenses Tracker
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
