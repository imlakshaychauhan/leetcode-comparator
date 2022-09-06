import React, { useEffect, useRef } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Input_Form = () => {
  const u1 = useRef();
  const u2 = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("users"));
    if (!data) {
      const users = new Array(2).fill("");
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, []);

  const handleSubmit = () => {
    let data = JSON.parse(localStorage.getItem("users"));
    data[0] = u1.current.value;
    data[1] = u2.current.value;
    localStorage.setItem("users", JSON.stringify(data));
    navigate("/compare");
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-3">
              Enter Usernames to Compare Profiles
            </h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="my-4">
                <Form.Control
                  type="text"
                  placeholder="Enter Username 1"
                  required
                  ref={u1}
                />
              </Form.Group>
              <Form.Group className="my-4" controlId="formBasicPassword">
                <Form.Control
                  type="text"
                  placeholder="Enter Username 2"
                  required
                  ref={u2}
                />
              </Form.Group>
              <Button className="w-100" type="submit">
                Compare
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Input_Form;
