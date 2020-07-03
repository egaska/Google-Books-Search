import React from "react";
import Header from "./components/header/header";
import Search from "./pages/search";
import Results from "./components/results/results";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path = "/">
          <Header />
          <Search />
          
        </Route>
      </Router>
    </div>
  );
}

export default App;
