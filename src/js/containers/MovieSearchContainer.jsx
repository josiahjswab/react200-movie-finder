import React from 'react';
import axios from 'axios';

export default class MovieSearchContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handler = this.handler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
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

    render() {
        const { search } = this.props;
        return (
            <div>
                <div><h1>Movie Finder</h1></div>
                <div><input value={search} placeholder='//search' onChange={ this.handler }></input></div>
                <div><button onClick={this.clickHandler}>Submit</button></div>
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
    console.log(`action creator searchInput,  ${searchValue}`);
    return {
        type: 'GET_SEARCH_REQUEST',
        payload: axios.get(`/movieInfo/${searchValue}`)
    };
}