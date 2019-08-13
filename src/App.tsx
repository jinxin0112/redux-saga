import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, AnyAction, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { incrementAsync, helloSaga } from './sagas';

const initState = 0;

function reducer(state = initState, action: AnyAction) {
  return state;
}

const enhancer = applyMiddleware(
  createSagaMiddleware({
    context: helloSaga
  })
);

const store = createStore(reducer, enhancer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Provider>
  );
};

export default App;
