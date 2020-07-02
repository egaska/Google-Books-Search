import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";


function SearchForm() {
  return (
    <Form>
      <Form.Group as={Row} controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Search
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="test" placeholder="Search" />
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Search</Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default SearchForm;
