import { connect } from 'react-redux';
import {
  fetchData,
  startFetch,
  errorFetch,
  updateFetch
} from './../actions/index';

import App from './../components/App';

const mapStateToProps = state => {
  return {
    frames: state.frames,
    isLoading: state.isLoading,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData()),
    startFetch: () => dispatch(startFetch()),
    errorFetch: () => dispatch(errorFetch()),
    updateFetch: payload => dispatch(updateFetch(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
