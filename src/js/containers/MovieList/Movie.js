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
                            <img className='poster' src={(movie['Poster'] != 'N/A') ? movie['Poster'] : 'https://via.placeholder.com/170/000000/FFFFFF/?text=no_image'}></img>
                        </div>
                        <div className='movie-img-container-2' style={(index % 2) ? { backgroundColor: 'rgba(31, 0, 234, 0.12)' } : { backgroundColor: 'rgba(0, 234, 11, 0.12)'}}>
                            <div className='movie-title-container'>
                                <h1>{movie['Title']}</h1>
                                <h3>{movie['Year']} - <small>{index}</small></h3>
                                
                            </div>
                            <div className='movie-plot-container'>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
                                    industry. Lorem Ipsum has been the industry's standard dummy text 
                                    ever since the 1500s, when an unknown printer took a galley of type 
                                    and scrambled it to make a type specimen book. It has survived not 
                                    only five centuries, but also the leap into electronic.
                                </p>
                            </div>
                            <div className='movie-more-info'>
                                <button>Details</button>
                            </div>
                        </div>
                    </li>
                ))}
            </div>
        );
    }
}
