import React, { useState } from "react";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";

const Register = () => {
  const [state, setState] = useState({
    user: { userName: "", email: "", password: "" },
  });

  const register = (e) => {
    e.preventDefault();
    console.log(state.user);
  };
  const updateHandler = (e) => {
    setState({
      user: {
        ...state.user,
        [e.target.name]: e.target.value,
      },
    });
    console.log(state.user);
  };
  //   const usernameChangeHandler =(e)=>{
  //     setState({
  //         ...state,
  //         userName:e.target.value
  //     })
  //   }
  //   const passwordChangeHandler =(e)=>{
  //     setState({
  //         ...state,
  //         password:e.target.value
  //     })
  //   }
  //   const emailChangeHandler =(e)=>{
  //     setState({
  //         ...state,
  //         email:e.target.value
  //     })
  //   }

  return (
    <>
      <Container >
        <Row>
          <Col xs={3}>
            <Card className="mt-2" style={{ width: "400px", height: "350px" }}>
              <Card.Header style={{ backgroundColor: "#f5c151" }}>
                <h3>Register</h3>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Control
                    className="mb-3"
                    placeholder="User Name"
                    type="text"
                    name="userName"
                    onChange={updateHandler}
                  />
                  <Form.Control
                    className="mb-3"
                    placeholder="Email"
                    type="email"
                    name="email"
                    onChange={updateHandler}
                  />
                  <Form.Control
                    className="mb-3"
                    placeholder="Paasword"
                    type="password"
                    name="password"
                    onChange={updateHandler}
                  />
                  <Button variant="primary" type="submit" onClick={register}>
                    Submit
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
