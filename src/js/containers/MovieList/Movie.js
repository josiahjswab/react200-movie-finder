import React from 'react';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { movieObj } = this.props;
        return (
            <div>
                {movieObj.map(movie => (
                    <li className='movie-listItem' key={movie['imdbID']}>
                        <div className='movie-img-container'>
                            <img className='poster' src={movie['Poster']}></img>
                        </div>
                        <div>
                            <div className='movie-title-container'>
                                <h1>{movie['Title']}</h1>
                                <h3>{movie['Year']}</h3>
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
