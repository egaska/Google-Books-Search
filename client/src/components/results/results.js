import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import style from "./styles.css";

function formatBook(book) {
  return {
    _id: book.id,
    title: book.volumeInfo.title,
    authors: book.volumeInfo.authors,
    description: book.volumeInfo.description,
    image: book.volumeInfo.imageLinks.thumbnail,
    link: book.volumeInfo.previewLink,
  };
}

function SearchForm({results, handleSave}) {
  return (
    <Card>
      {console.log(results, "Results")}
      {results
        ? results.map((book, index) => {
            return (
              <Card.Body>
                <Image src={book.volumeInfo.imageLinks.thumbnail} />
                <Card.Title>{book.volumeInfo.title}</Card.Title>
                <small className="text-muted">{book.volumeInfo.authors}</small>
                <Card.Text>{book.volumeInfo.description}</Card.Text>
                <Button>View</Button>
                <Button onClick = {() => handleSave(book)}>Save</Button>
              </Card.Body>
            );
          })
        : "No Books Found"}
    </Card>
  );
}

export default SearchForm;
