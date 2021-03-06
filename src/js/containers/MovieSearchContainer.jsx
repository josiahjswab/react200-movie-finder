import React from 'react';
import axios from 'axios';
import Movie from './MovieList';

export default class MovieSearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handler = this.handler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.enterKey = this.enterKey.bind(this);
    }

    handler(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(adjustInput(value));
    }

    clickHandler() {
        event.preventDefault();
        const { dispatch, searchValue } = this.props;
        dispatch(searchInput(searchValue));
    }

    enterKey() {
        if(event.keyCode == 13) {
            this.clickHandler();
        }
    }

    render() {
        const { searchValue } = this.props;


        return (
            <div className='movie-search-container'>
                <div className='movie-search-bar'>
                    <h1>Movie Finder</h1>
                    <input 
                        autoFocus 
                        value={ searchValue } 
                        onChange={ this.handler }
                        onKeyDown={this.enterKey}
                        placeholder='Enter Movie Title'
                    ></input>
                    <button onClick={ this.clickHandler }>Submit</button>
                </div>
                <div className='movie-search-list'>
                    <ul>
                        <Movie/>
                    </ul>
                </div>
            </div>
        )
    }
}

function adjustInput(value) {
    return {
        type: 'UPDATE_SEARCH_VALUE',
        payload: {value}
    };
}

function searchInput(searchValue) {
    return {
        type: 'GET_SEARCH_REQUEST',
        payload: axios.get(`/movieInfo/${searchValue}&plot=short`)
    };
}
