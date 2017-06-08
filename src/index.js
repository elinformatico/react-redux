import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAEer9wsuF8Bm9LpFV-pNM5nLS0vHR3MRY';

// Step to create a Components
// 1) Create a new Component, this Component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// 2) Take this Component's generated HTML and put it on the page (In the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
