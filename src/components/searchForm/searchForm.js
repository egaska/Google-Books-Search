import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import style from "./styles.css";

function SearchForm() {
  return (
    <div>
<Container fluid>
      <Form>
        <Form.Group as={Row} controlId="SearchId">
          <Form.Label column sm={10}>
            Book Search:
          </Form.Label>
          <br/>
            <Form.Control type="test" placeholder="Search" />
         
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Search</Button>
          </Col>
        </Form.Group>
      </Form>
          </Container>
    </div>
  );
}

export default SearchForm;
