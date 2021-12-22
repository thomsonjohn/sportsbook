import React from 'react';
import '../styles/App.css';

import { data } from '../mockData';
import { MarketsList } from '../components/MarketsList';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading1">Today</h1>
        <h2 className="heading2">Soccer Matches</h2>
      </header>
      <MarketsList markets={data} />
    </div>
  );
};

export default App;
