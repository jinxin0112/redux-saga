import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, AnyAction, applyMiddleware, bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { watchIncrementAsync, helloSaga } from './sagas';
import * as Actions from './actions';

const initState = 0;

function reducer(state = initState, action: AnyAction) {
  switch (action.type) {
    case Actions.INCREMENT:
      return state + action.payload;
  }
  return state;
}

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(reducer, enhancer);

sagaMiddleware.run(watchIncrementAsync);

const add = bindActionCreators(() => ({ type: Actions.INCREMENT_ASYNC }), store.dispatch);

const App: React.FC = () => {
  const [count, setCount] = React.useState<number>(store.getState());
  React.useEffect(() => {
    store.subscribe(() => setCount(store.getState()));
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{count}</p>
          <button onClick={add}>++++</button>
        </header>
      </div>
    </Provider>
  );
};

export default App;
