import React from 'react';
import logo from './logo.svg';
import './App.css';

/* responsible for HTML (view) displayed in browser
 content changes dynamically - will be changed in browser if updated here
 this is the App component placed in a .js file
 this is an example of a stateless functional component: the code is a JS function which returns HTML, which describes the UI */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
