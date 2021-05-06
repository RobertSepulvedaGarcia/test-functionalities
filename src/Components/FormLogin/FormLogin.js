import React from 'react';
import { validate } from './valid';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import './FormLogin.scss';
const FormLogin = () => {
  const { Body, Header } = Card;
  const { Group, Label, Control, Text } = Form;

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validate,
    onSubmit: (formData) => {
      console.log(formData);
    },
  });

  const { handleSubmit, handleChange } = formik;

  return (
    <>
      <Card className="card-login">
        <Header>
          <p className="display-3 text-center font-weight-normal">Login</p>
        </Header>
        <Body className="px-5">
          <Form onSubmit={handleSubmit}>
            <Group controlId="formBasicEmail">
              <Label>Email address</Label>
              <Control
                type="email"
                name="email"
                placeholder="Enter email"
                onChange={handleChange}
              />
              {formik.errors.email ? (
                <div
                  style={{
                    color: 'red',
                    fontStyle: 'italic',
                    fontSize: '15px',
                  }}
                >
                  {formik.errors.email}
                </div>
              ) : null}
              <Text className="text-info">
                We'll never share your email with anyone else.
              </Text>
            </Group>

            <Group controlId="formBasicPassword">
              <Label>Password</Label>
              <Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                autoComplete="on"
              />
              {formik.errors.password ? (
                <div
                  style={{
                    color: 'red',
                    fontStyle: 'italic',
                    fontSize: '15px',
                  }}
                >
                  {formik.errors.password}
                </div>
              ) : null}
            </Group>
            <Row style={{ marginTop: '50px' }}>
              <Col sm={12} lg={12} className="d-flex justify-content-center ">
                <Button variant="outline-light btn-block" type="submit">
                  Submit
                </Button>
              </Col>
              <Col
                sm={12}
                lg={12}
                className="d-flex justify-content-center mt-2"
              >
                <Link to="/sign-up">
                  <Button variant="outline-light btn-block">
                    Create Account
                  </Button>
                </Link>
              </Col>
            </Row>
          </Form>
        </Body>
      </Card>
    </>
  );
};

export default FormLogin;
