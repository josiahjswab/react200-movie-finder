import React from 'react';
import { generateKeyPair } from 'crypto';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { movieObj } = this.props;

        return (
            <div>

                {movieObj.map((movie, index) => (
                    <li className='movie-listItem' key={movie['imdbID']}>
                        <div id={movie['imdbID']} className='movie-img-container'>
                            <button>
                                <img className='poster' src={(movie['Poster'] != 'N/A') ? movie['Poster'] : 'https://via.placeholder.com/170/000000/FFFFFF/?text=no_image'}></img>
                            </button>
                        </div>
                        <div className='movie-img-container-2' style={(index % 2) ? { backgroundColor: 'rgba(127, 63, 191, 0.08)' } : { backgroundColor: 'rgba(255, 255, 255, 0.08)'}}>
                            <div className='movie-title-container'>
                                <h2>{movie['Title']}</h2>
                                <h4>{movie['Year']}</h4>
                            </div>
                            <div className='movie-plot-container'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry's standard dummy text 
                                    ever since the 1500s, when an unknown printer took a galley of type 
                                    and scrambled it to make a type specimen book. It has survived not 
                                    only five centuries, but also the leap into electronic.
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </div>
        );
    }
}
