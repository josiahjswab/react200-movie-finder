import React from 'react';
import axios from 'axios';

export default class MovieDetailContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getMovieDetails(this.props.match.params.id));
      }
    render() {
        const { details } = this.props;

        return (
            <div className='container-details'>
                <div id={details['imdbID']} className='movie-img-container'>
                    <img className='poster' src={(details['Poster'] != 'N/A') ? details['Poster'] : 'https://via.placeholder.com/170/000000/FFFFFF/?text=no_image'}></img>
                </div>
                <div className='information'>
                    <div className='movie-title-container'>
                        <h2>{details['Title']}</h2>
                    </div>
                    <div className='style-border'>
                        <p><br/></p>
                    </div>
                    <div className='movie-plot-container'>
                        <div className='details'>
                            <h6>{details['Year']}</h6>
                            <h6>Rated: {details.Rated}</h6>
                            <h6>Runtime: {details.Runtime}</h6>
                            <h6>Genre: {details.Genre}</h6>
                            <h6 style={(details.Metascore > 80) ? {color: 'green'} : (details.Metascore > 60) ? {color: 'yellow'} : {color: 'red'}}>Metascore: {details.Metascore}</h6>
                        </div>
                        <div className='plot'>
                            <p><span style={{color: 'red'}}>Plot:</span> {details.Plot}</p>
                            <p><span style={{color: 'red'}}>Actors:</span> {details.Actors}</p>
                        </div>
                    </div>
                    <div className='style-border'>
                        <p><br/></p>
                    </div>
                    <div>
                        <a href='/'><button>⏎</button></a>
                    </div>
                </div>
            </div>

        );
    }
}

export const getMovieDetails = (movieID) => ({
    type: 'GET_DETAILS_REQUEST',
    payload: axios.get(`/movie/${movieID}`)
  });