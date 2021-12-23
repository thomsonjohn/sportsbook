import React, { useContext } from 'react';
import { useFela } from 'react-fela';

import { MarketProps } from './Market.types';
import { Button } from './components/Button';
import { styles } from './Market.styles';

import BetContext from '../../context/BetContext';
import { Card } from '../Card';

export const Market = (props: MarketProps) => {
  const { homeTeam, awayTeam, outcomes, marketId } = props;
  const { bet, toggleShowBet, updateBet } = useContext(BetContext);
  const { css } = useFela();

  const handleBetSelect = (outcome: string) => {
    toggleShowBet(true);
    updateBet({
      ...bet,
      marketId,
      outcome
    });
  };

  return (
    <Card>
      <div className={css(styles.title)}>
        <span>H</span>
        <p>{homeTeam}</p>
        <span>vs</span>
        <p>{awayTeam}</p>
        <span>A</span>
      </div>
      <div className={css(styles.outcomes)}>
        {outcomes.map((outcome, index) => (
          <div key={`market${index}-${outcome}`}>
            <Button text={outcome} onClick={() => handleBetSelect(outcome)} />
          </div>
        ))}
      </div>
    </Card>
  );
};
