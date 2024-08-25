import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import registerImage from '../images/regitrationimg.png'; // Replace with the correct path to your image

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem('token', data.token);
        navigate('/tasks');
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error('Registration failed:', err);
    }
  };

  return (
    <Container fluid className=" mt-5 d-flex align-items-center justify-content-center">
      <Row className="w-100">

        <Col md={6} className="d-flex align-items-center justify-content-center">
          <div className="registration-form-container p-4 p-md-5 bg-light rounded shadow-sm" style={{ maxWidth: '600px' }}>
            <h2 className="text-center mb-4">Register</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mt-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="mt-4 w-100">Register</Button>
            </Form>
          </div>
        </Col>
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <img
            src={registerImage}
            alt="Register"
            className="img-fluid"
            style={{
              maxWidth: '80%',
              height: 'auto',
              borderRadius: '10px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
