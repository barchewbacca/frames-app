import axios from 'axios';
import * as types from './../constants/actionTypes';
import { API } from './../constants/endpointTypes';

function getFramesWithImages(data) {
  let variationsArray = [];

  data.forEach(item => {
    if (item.variants.length) {
      variationsArray = variationsArray.concat(item.variants);
    }
  });

  return variationsArray;
}

export const fetchData = () => {
  return dispatch => {
    dispatch(startFetch());

    axios
      .get(API)
      .then(result => {
        const frames = getFramesWithImages(result.data);
        dispatch(updateFetch(frames));
      })
      .catch(error => dispatch(errorFetch(error)));
  };
};

export const errorFetch = () => ({
  type: types.ERROR
});

export const startFetch = () => ({
  type: types.START
});

export const updateFetch = payload => ({
  type: types.UPDATE,
  payload
});
