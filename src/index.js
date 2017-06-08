import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAEer9wsuF8Bm9LpFV-pNM5nLS0vHR3MRY';

// Calling a REST API from Youtube API
YTSearch({ key : API_KEY, term : 'Playstation 4'}, function(response){
    console.log(response);
});

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
