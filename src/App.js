import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from './logo.svg';
import increment, { incrementAsync, decrement } from './actions';
import Counter from './Counter';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.count)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <Counter
        value={counter}
        onIncrement={() => dispatch(increment())}
        onDecrement={() => dispatch(decrement())}
        onIncrementAsync={() => dispatch(incrementAsync())}
      />
    </div>
  );
}

export default App;
