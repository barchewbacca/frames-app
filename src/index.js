import 'react-app-polyfill/ie11';
import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';

import store from './store';
import AppContainer from './containers/AppContainer';
import Home from './pages/Home';
import Frame from './pages/Frame';
import * as serviceWorker from './serviceWorker';

render(
  <Provider store={store}>
    <Router>
      <AppContainer path="/">
        <Home path="/" />
        <Frame path="/:frameId" />
      </AppContainer>
    </Router>
    ,
  </Provider>,
  document.getElementById('react-root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
