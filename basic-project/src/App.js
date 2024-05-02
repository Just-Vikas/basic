import { useState } from "react";

import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { SearchResultsList } from "./components/SearchResultsList";
import Navbar from "./Navbar";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      
      <header className="App-header">
          <Navbar/>
      </header>

      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
      
    </div>
     
  );
}

export default App;
