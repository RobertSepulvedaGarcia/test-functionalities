import React from 'react';
import { validate } from './valid';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import Layout from '../../components/Layout/LoginLayout/Layout';
import FormInput from '../../components/FormInput/FormInput';
import './login.scss';

// import FormLogin from '../../components/FormLogin/FormLogin';

const Login = () => {
  const { Body, Header } = Card;

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
    <Layout>
      {/* <FormLogin /> */}
      <Card className="card-login">
        <Header>
          <p className="display-3 text-center font-weight-normal">Login</p>
        </Header>
        <Body className="px-5">
          <Form onSubmit={handleSubmit}>
            <FormInput
              control={'formBasicEmail'}
              label={'Email address'}
              type={'email'}
              name={'email'}
              placeholder={'Enter email'}
              text={"We'll never share your email with anyone else"}
              handler={handleChange}
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
            <FormInput
              control={'formBasicPassword'}
              label={'Password'}
              type={'password'}
              name={'password'}
              placeholder={'Enter password'}
              handler={handleChange}
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
    </Layout>
  );
};

export default Login;
