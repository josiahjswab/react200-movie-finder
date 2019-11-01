import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

function mapStoreToProps(store) {
    return {
        details: store.detailsRoot.details,
        movieObj: store.searchRoot.movie
    };
}

export default connect(mapStoreToProps)(MovieDetailContainer);