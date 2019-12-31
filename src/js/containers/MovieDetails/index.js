import { connect } from 'react-redux';
import MovieDetailContainer from './MovieDetailContainer';

function mapStoreToProps(store) {
    return {
        details: store.detailsRoot.details,
        toggle: store.detailsRoot.toggle,
        movieObj: store.searchRoot.movie
    };
}

export default connect(mapStoreToProps)(MovieDetailContainer);