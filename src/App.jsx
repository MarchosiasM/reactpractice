import React from 'react';
import './App.css';
import Header from './components/Header';
import Game from './components/Game';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Header />
      <Game />
    </header>
  </div>
);

export default App;
