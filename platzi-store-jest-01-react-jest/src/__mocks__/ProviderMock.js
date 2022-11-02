import React from 'react';
import { createStore } from 'redux';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';
import initialState from '../initialState';
import reducer from '../reducers';

const store = createStore(reducer, initialState);
const history = createMemoryHistory();

const ProviderMock = (props) => {
  return (
    <Provider store={store}>
      <Router history={history}>
        {props.children}
      </Router>
    </Provider>
  );
};

export default ProviderMock;
