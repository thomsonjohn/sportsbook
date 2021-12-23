import React, { useContext } from 'react';
import BetContext from '../context/BetContext';
import '../styles/App.css';
import { Toaster } from 'react-hot-toast';

import { MarketList } from '../components/MarketList';
import { CreateBet } from '../components/CreateBet';

const App = () => {
  const { showBet } = useContext(BetContext);
  return (
    <div className="App">
      <Toaster />
      <header className="App-header">
        <h1 className="heading1">Today</h1>
        <h2 className="heading2">Soccer Matches</h2>
      </header>
      <main>{showBet ? <CreateBet /> : <MarketList />}</main>
    </div>
  );
};

export default App;
