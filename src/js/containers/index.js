import { connect } from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store) {
    return {
        searchValue: store.searchRoot.value,
        movieObj: store.searchRoot.movie
    };
}

export default connect(mapStoreToProps)(MovieSearchContainer);