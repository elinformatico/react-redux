import React from 'react';
import ReactDOM from 'react-dom';

// Step to create a Components

// 1) Create a new Component, this Component should produce some HTML
const App = () => {
  return <h2>Hi, Welcome to the REACT Library, Just another great JS Library</h2>
}

// 2) Take this Component's generated HTML and put it on the page (In the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
