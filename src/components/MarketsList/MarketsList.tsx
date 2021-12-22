import React from 'react';

import { MarketsListProps } from './MarketsList.types';
import { Header, Title, Wrapper } from './MarketsList.styles';

import { Market } from '../Market';

export const MarketsList = (props: MarketsListProps) => {
  const { markets } = props;
  return (
    <Wrapper>
      <Header>
        <Title>Upcoming matches</Title>
      </Header>
      {markets.map((market) => (
        <Market
          key={`market${market.marketId}`}
          marketId={market.marketId}
          outcomes={market.outcomes}
          homeTeam={market.homeTeam}
          awayTeam={market.awayTeam}
        />
      ))}
    </Wrapper>
  );
};
