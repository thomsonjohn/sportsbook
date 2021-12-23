import React, { FC, useState, createContext } from 'react';
import { BetProps } from '../components/CreateBet/CreateBet.types';
import { data } from '../mockData';

interface IBetContext {
  showBet: boolean;
  toggleShowBet: (showBet: boolean) => void;
  bet: BetProps;
  updateBet: ({ marketId, outcome, stake, odds }: BetProps) => void;
  marketData: {
    marketId: number;
    outcomes: string[];
    homeTeam: string;
    awayTeam: string;
  }[];
  clearBet: () => void;
}

const defaultState = {
  showBet: false,
  bet: {
    marketId: 0,
    outcome: '',
    stake: '',
    odds: ''
  },
  marketData: data,
  toggleShowBet: () => console.log('toggle'),
  updateBet: () => console.log('update bet'),
  clearBet: () => console.log('clear bet')
};

const BetContext = createContext<IBetContext>(defaultState);

export const BetProvider: FC = ({ children }) => {
  const [showBet, setShowBet] = useState(defaultState.showBet);
  const [bet, setBet] = useState(defaultState.bet);
  const marketData = defaultState.marketData;

  const toggleShowBet = (showBet: boolean) => {
    setShowBet(showBet);
  };

  const updateBet = ({ marketId, outcome, stake, odds }: BetProps) => {
    setBet({
      marketId,
      outcome,
      stake,
      odds
    });
  };

  const clearBet = () => {
    toggleShowBet(false);
    updateBet({
      marketId: 0,
      outcome: '',
      stake: '',
      odds: ''
    });
  };

  return (
    <BetContext.Provider
      value={{
        showBet,
        toggleShowBet,
        bet,
        updateBet,
        marketData,
        clearBet
      }}>
      {children}
    </BetContext.Provider>
  );
};

export default BetContext;
