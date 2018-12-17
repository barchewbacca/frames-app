import { connect } from 'react-redux';
import List from './../components/List';

const mapStateToProps = state => {
  return {
    frames: state.frames,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(mapStateToProps)(List);
