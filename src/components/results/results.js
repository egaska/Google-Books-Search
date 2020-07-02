import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import style from "./styles.css";

function SearchForm() {
  return (
    
      <Card>
        <Card.Body>
          <Image src="https://via.placeholder.com/150" />
          <Card.Title>Book Title</Card.Title>
          <small className="text-muted">Author Name</small>
          <Card.Text>
            This will be the book description. This will be the book
            description. This will be the book description. This will be the
            book description.
          </Card.Text>
          <Button>View</Button>
          <Button>Save</Button>
        </Card.Body>
      </Card>
    
  );
}

export default SearchForm;
