import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import App from './App';
import {Provider} from 'react-redux'
import { rootReducer } from './reducers/rootReducer';
import thunk from 'redux-thunk'

const store = createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk))
  )

ReactDOM.render(
  <Provider store={store}>
      {/* <Router> */}
        <App />
      {/* </Router> */}
  </Provider>,
  
  document.getElementById('root')
);


