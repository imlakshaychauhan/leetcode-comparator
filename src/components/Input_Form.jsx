import React, { useEffect, useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const Input_Form = () => {
  const navigate = useNavigate();
  const [username1, setUsername1] = useState("");
  const [username2, setUsername2] = useState("");

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("users"));
    if (!data) {
      const users = new Array(2).fill("");
      localStorage.setItem("users", JSON.stringify(users));
    }
  }, []);

  const handleSubmit = () => {
    let data = JSON.parse(localStorage.getItem("users"));
    data[0] = username1;
    data[1] = username2;
    localStorage.setItem("users", JSON.stringify(data));
    navigate("/compare");
  };

  const autoFill = () => {
    setUsername1("lakshayhere");
    setUsername2("striver_79");
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100%", flexDirection: "column", marginBottom: "0%" }}
    >
        <div style={{  display: "flex", justifyContent: "center", color: "black", marginBottom:"0", fontStyle: "italic", marginBottom: "10%", marginTop: "5%", textDecoration: "underline"}}>
          <h1>LeetCode Profile Comparator</h1>
        </div>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card style={{ backgroundColor: "#e6ebea" }}>
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
                  value={username1}
                  onChange={e => setUsername1(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="my-4" controlId="formBasicPassword">
                <Form.Control
                  type="text"
                  placeholder="Enter Username 2"
                  required
                  value={username2}
                  onChange={e => setUsername2(e.target.value)}
                />
              </Form.Group>
              <Button className="w-100 mb-1" type="submit">
                Compare
              </Button>
              <div className='w-100 text-center mt-2'> Auto fill for demo? <Link onClick={autoFill} to="/"> Click Here </Link> </div>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Input_Form;
