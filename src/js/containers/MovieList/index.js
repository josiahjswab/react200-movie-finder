import { connect } from 'react-redux';
import Movie from './Movie';

function mapStoreToProps(store) {
    return {
        movieObj: store.searchRoot.movie,
    };
}

export default connect(mapStoreToProps)(Movie);