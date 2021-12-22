import React from 'react';
import { useFela } from 'react-fela';

import { MarketsListProps } from './MarketsList.types';
import { styles } from './MarketsList.styles';

import { Market } from '../Market';

export const MarketsList = (props: MarketsListProps) => {
  const { markets } = props;
  const { css } = useFela();

  return (
    <div className={css(styles.wrapper)}>
      <header className={css(styles.header)}>
        <h3 className={css(styles.title)}>Upcoming matches</h3>
      </header>
      {markets.map((market) => (
        <Market
          key={`market${market.marketId}`}
          marketId={market.marketId}
          outcomes={market.outcomes}
          homeTeam={market.homeTeam}
          awayTeam={market.awayTeam}
        />
      ))}
    </div>
  );
};
