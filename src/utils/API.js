import axios from "axios";

export default {
    //Gets a specfic book from the Google Books API
    getBook: function (input) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${input}`);
      },
      deleteBook: function (id) {
        return axios.delete("/api/books/" + id).then(result => result.data);
      }
}