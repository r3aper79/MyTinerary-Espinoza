import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import mainReducer from './redux/reducers/mainReducer'

//crear el store

const miStore = createStore(mainReducer , applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={miStore}>
    <React.Fragment>
      <App />
    </React.Fragment>
  </Provider>,
  document.getElementById('root')
);