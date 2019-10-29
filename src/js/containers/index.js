import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store) {
    return {
        searchValue: store.search.value,
        movieObj: store.search.movie
    };
}

export default connect(mapStoreToProps)(MovieSearchContainer);