import React, { useState, useEffect} from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import style from "./styles.css";
import API from "../../utils/API"

function SearchForm() {
    const [bookState, setBookState] = useState({
        searchterm: "",
        results: []
    })

  const handleSubmit = () => {
    API.getBook(bookState.searchterm).then(res => {
        console.log(res)
        setBookState({...bookState, results: res})
        console.log(bookState)
    })
  };

  function formatBook(book){
      
    return {
        _id: bookData.id,
        title: bookData.volumeInfo.title,
        authors: bookData.volumeInfo.authors,
        description: bookData.volumeInfo.description,
        image: bookData.volumeInfo.imageLinks.thumbnail,
        link: bookData.volumeInfo.previewLink
    }}

  return (
    <div>
<Container fluid>
      <Form>
        <Form.Group as={Row} controlId="SearchId">
          <Form.Label column sm={10}>
            <h3>Book Search:</h3>
          </Form.Label>
          <Form.Control
          type="text"
          onChange={(event) =>
            setBookState({ ...bookState, searchterm: event.target.value })
          }
        />
         
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="button" onClick={handleSubmit}>Search</Button>
          </Col>
        </Form.Group>
      </Form>
          </Container>
    </div>
  );
}

export default SearchForm;
