
import React, {useState} from "react";
import Form from "../components/Form";
import Results from "../components/Results";
import API from "../utils/API";


const [bookState, setBookState] = useState({
    value: "",
    books: []
  });

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setBookState({
      [name]: value
    });
  };