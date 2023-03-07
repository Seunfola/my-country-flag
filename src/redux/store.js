import { CreateStore, applyMiddleware, Compose, createStore } from 'redux';
import thunk from 'redux-thunk';
const composeEnhancers = window_REDUX_DEVTOOLS_EXTENSION_COMPOSE_|| compose;
import React from 'react'

const configureStore = () => {
  return  createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}

export default configureStore
