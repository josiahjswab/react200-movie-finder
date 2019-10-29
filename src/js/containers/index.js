import {connect} from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store){
    return {
        searchValue: store.search.value,
    };
}

export default connect(mapStoreToProps)(MovieSearchContainer);