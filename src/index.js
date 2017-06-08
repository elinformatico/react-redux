import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyAEer9wsuF8Bm9LpFV-pNM5nLS0vHR3MRY';

class App extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { videos : [] };

        YTSearch({ key : API_KEY, term : 'Playstation 4'}, (videos) => {
            this.setState({ videos });  // Instead of this.setState({ videos : videos });
        });
    }

    render () {
        return (
            <div>
                <SearchBar />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
