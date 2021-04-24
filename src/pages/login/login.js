import React from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import Layout from './Layout';
import './login.scss';
const login = () => {
  const { Body, Header } = Card;
  const { Group, Label, Control, Text } = Form;

  return (
    <Layout>
      <Card className="card-login">
        <Header>
          <p className="display-3 text-center">Login</p>
        </Header>
        <Body>
          <Form>
            <Group controlId="formBasicEmail">
              <Label>Email address</Label>
              <Control type="email" placeholder="Enter email" />
              <Text className="text-muted">
                We'll never share your email with anyone else.
              </Text>
            </Group>

            <Group controlId="formBasicPassword">
              <Label>Password</Label>
              <Control
                type="password"
                placeholder="Password"
                autocomplete="on"
              />
            </Group>
            <Row style={{ marginTop: '50px' }}>
              <Col sm={12} lg={6} className="d-flex justify-content-center">
                <Button variant="outline-primary" type="submit">
                  Submit
                </Button>
              </Col>
              <Col sm={12} lg={6} className="d-flex justify-content-center">
                <Button variant="outline-secondary">Create Account</Button>
              </Col>
            </Row>
          </Form>
        </Body>
      </Card>
    </Layout>
  );
};

export default login;
