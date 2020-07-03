import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import style from "./styles.css";
import API from "../../utils/API";
import Results from "../results/results";

function SearchForm() {
  const [bookState, setBookState] = useState({
    searchterm: "",
    results: [],
  });

  const handleSubmit = () => {
    API.getBook(bookState.searchterm).then((res) => {
      setBookState({ ...bookState, results: res.data.items });

      console.log(bookState.searchterm);
    });
  };

  const handleSave = (results) => {
    const bookData = {
      title: results.volumeInfo.title,
      authors: results.volumeInfo.authors,
      description: results.volumeInfo.description,
      image: results.volumeInfo.imageLinks.thumbnail,
      link: results.volumeInfo.previewLink,
    }
    API.createBook(bookData).then(() => console.log("Added Book"))
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setBookState({ ...bookState, [name]: value });
    console.log(value);
  };


  return (
    <div>
      {console.log(bookState.results)}
      <Container fluid>
        <Form>
          <Form.Group as={Row} controlId="SearchId">
            <Form.Label column sm={10}>
              <h3>Book Search:</h3>
            </Form.Label>
            <Form.Control
              value={bookState.searchterm}
              type="text"
              name="searchterm"
              onChange={handleOnChange}
            />
          </Form.Group>
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="button" onClick={handleSubmit}>
                Search
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </Container>
      <Results results={bookState.results} handleSave = {handleSave} />
    </div>
  );
}

export default SearchForm;
