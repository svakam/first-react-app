import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet' // if named export used, need to import Greet constant within curly braces or else Attempted import error: './components/Greet does not contain a default export
// import Greet from './components/Greet' // component can be called anything since it was exported with 'default'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

/* responsible for HTML (view) displayed in browser
 content changes dynamically - will be changed in browser if updated here
 this is the App component placed in a .js file
 this is an example of a stateless functional component: the code is a JS function which returns HTML, which describes the UI */
function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
    </div> // if no content that goes within the custom Greet tag, then make it a self-closing tag
  );
}

export default App;
