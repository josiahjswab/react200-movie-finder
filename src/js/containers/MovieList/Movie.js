import React from 'react';

export default class Movie extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        const { title } = this.props;
        return (
            <div className='movie-container'>
                <div className='movie-img-container'>
                    <img src='http://via.placeholder.com/182x268'></img>
                </div>
                <div>
                    <div className='movie-title-container'>
                        <h1>{ title }</h1> {/*this is not yet receiving data from the axios call*/}
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
            </div>
        );
    }
}
