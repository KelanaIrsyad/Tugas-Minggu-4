import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(username, password);
      setIsLoggedIn(true);
      if (isLoggedIn == true) {
        navigate("/products", { replace: true });
      } 
    } catch (error) {
      console.log("Login gagal: ", error);
    }
  };
  const cardStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '70vh',
    width: '100%',
  };
  return (
    <Card style={cardStyle} >
      <Form onSubmit={handleLogin}>
        <Row className="mt-2">
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Col xs={2}>
              <Form.Label>Username</Form.Label>
            </Col>
            <Col xs={12}>
              <Form.Control
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Username"
              />
            </Col>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group className="mb-3" controlId="formBasicPassword">
          <Col xs={2}>
            <Form.Label>Password</Form.Label>
          </Col>
          <Col xs={12}>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              />
              </Col>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Card>
  );
}

export default LoginPage;
