import { connect } from 'react-redux';
import Details from './../components/Details';

const mapStateToProps = state => {
  return {
    frames: state.frames,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(mapStateToProps)(Details);
