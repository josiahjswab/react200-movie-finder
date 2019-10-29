import { connect } from 'react-redux';
import Movie from './Movie';

function mapStoreToProps(store) {
    return {
        title: store.search.movie.title,
    };
}

export default connect(mapStoreToProps)(Movie);