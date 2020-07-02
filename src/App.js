import React from 'react';
import Header from "./components/header/header"
import SearchForm from './components/searchForm/searchForm';
import Results from './components/results/results';

function App() {
  return (
    <div className="App">
      <Header/>
      <SearchForm/>
      <Results/>
    </div>
  );
}

export default App;
