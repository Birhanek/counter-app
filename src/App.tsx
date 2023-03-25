import React from 'react';
import './App.css';
import Counter from './counter/Counter';
import Home from './Pages/Home';

function App() {
  return (
    <div className="app">
      <Counter/>
      <Home/>
    </div>
  );
}

export default App;
