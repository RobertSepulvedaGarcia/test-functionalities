import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import Layout from './Layout';
const login = () => {
  const { Body, Header } = Card;
  const { Group, Label, Control, Text } = Form;

  return (
    <Layout>
      <Card>
        <Header>
          <p className='display-3'>Login</p>
        </Header>
        <Body>
          <Form>
            <Group controlId='formBasicEmail'>
              <Label>Email address</Label>
              <Control type='email' placeholder='Enter email' />
              <Text className='text-muted'>
                We'll never share your email with anyone else.
              </Text>
            </Group>

            <Group controlId='formBasicPassword'>
              <Label>Password</Label>
              <Control type='password' placeholder='Password' />
            </Group>

            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Body>
      </Card>
    </Layout>
  );
};

export default login;
