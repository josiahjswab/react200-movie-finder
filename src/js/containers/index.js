import {connect} from 'react-redux';
import Search from './Search';

function mapStoreToProps(store){
    return {
        search: store.search
    };
}

export default connect(mapStoreToProps)(Search);