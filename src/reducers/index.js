import * as types from './../constants/actionTypes';

const defaultState = {
  frames: [],
  isLoading: false,
  error: null
};

const rootReducer = (state = defaultState, action = {}) => {
  const { error, payload } = action;

  switch (action.type) {
    case types.ERROR: {
      return {
        ...state,
        error,
        isLoading: false
      };
    }
    case types.START: {
      return {
        ...state,
        isLoading: true
      };
    }
    case types.UPDATE: {
      return {
        ...state,
        frames: payload,
        error: null,
        isLoading: false
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
