import { connect } from 'react-redux';
import { test } from '../actions/indexActions';
import Index from '../pages/IndexPage.jsx';

const mapStateToProps = (state: State) => {
    return {
        indexState: state.index
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        test: () => {
            dispatch(test());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index); 
