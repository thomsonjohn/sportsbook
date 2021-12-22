import React from 'react';
import { useFela } from 'react-fela';

import { MarketProps } from './Market.types';
import { Button } from './components/Button';
import { styles } from './Market.styles';

export const Market = (props: MarketProps) => {
  const { homeTeam, awayTeam, outcomes } = props;
  const { css } = useFela();
  return (
    <div className={css(styles.card)}>
      <div className={css(styles.title)}>
        <p className={css(styles.teamName)}>{homeTeam}</p>
        <span className={css(styles.versus)}>vs</span>
        <p className={css(styles.teamName)}>{awayTeam}</p>
      </div>
      <div className={css(styles.outcomes)}>
        {outcomes.map((outcome, index) => (
          <div key={`market${index}-${outcome}`}>
            <Button text={outcome} onClick={() => console.log(outcome)} />
          </div>
        ))}
      </div>
    </div>
  );
};
