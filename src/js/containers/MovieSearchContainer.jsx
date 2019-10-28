import React from 'react';

export default class MovieSearchContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    handler(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(triggerSearch(value));
    }


    render() {
        const { search } = this.props;
        return (
            <div>
                <div><h1>Movie Finder</h1></div>
                <div><input value={ search } placeholder='//search' onChange={ this.handler }></input></div>
                <p>{ search }</p>
            </div>
        )
    }
}

function triggerSearch(search) {
    return {
        type: 'UPDATE_SEARCH',
        payload: {search}
    };
}