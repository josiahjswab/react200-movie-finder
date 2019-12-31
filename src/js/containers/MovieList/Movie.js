import React from 'react';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { movieObj } = this.props;

        return (
            <div>
                {(movieObj == undefined) ? (<p style={{color: 'red'}}>Oops invalid search</p>): movieObj.map((movie, index) => (
                    <li className='movie-listItem' key={movie['imdbID']}>
                        <div id={movie['imdbID']} className='movie-img-container'>
                            <a href={`/#/movie/${movie['imdbID']}`}>
                                <img className='poster' src={(movie['Poster'] != 'N/A') ? movie['Poster'] : 'https://via.placeholder.com/170/000000/FFFFFF/?text=no_image'}></img>
                            </a>
                        </div>
                        <div className='movie-img-container-2' style={(index % 2) ? { backgroundColor: 'rgba(127, 63, 191, 0.08)' } : { backgroundColor: 'rgba(255, 255, 255, 0.08)'}}>
                            <div className='movie-title-container'>
                                <h2>{movie['Title']}</h2>
                                <h4>{movie['Year']}</h4>
                            </div>
                            <div className='movie-plot-container'>
                                <p>
                                    click poster for movie details
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
                
            </div>
        );
    }
}
