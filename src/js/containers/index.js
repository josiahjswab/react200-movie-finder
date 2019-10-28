import {connect} from 'react-redux';
import MovieSearchContainer from './MovieSearchContainer';

function mapStoreToProps(store){
    return {
        search: store.search.search
    };
}

export default connect(mapStoreToProps)(MovieSearchContainer);