import React, { Component } from 'react';

/*const SearchBar = () => {
    return <input />;
}*/

class SearchBar extends Component
{
    constructor(props) {
        super(props);
        this.state = { terms : '' };
    }

    render () {
        // return <input onChange={this.onInputChange} />;
        return <input onChange={(event) => console.log(event.target.value)} />;
    };

    /*onInputChange(event){
        console.log(event, ' --> Target Value: ' + event.target.value);
    }*/
}

export default SearchBar;
