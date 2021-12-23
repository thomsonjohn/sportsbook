import React, { useContext } from 'react';

import { Market } from '../../components/Market';
import { ViewMain } from '../../components/ViewMain';
import BetContext from '../../context/BetContext';

export const MarketList = () => {
  const { marketData } = useContext(BetContext);
  return (
    <ViewMain title="Upcoming matches">
      {marketData.map((market) => (
        <Market
          key={`market${market.marketId}`}
          marketId={market.marketId}
          outcomes={market.outcomes}
          homeTeam={market.homeTeam}
          awayTeam={market.awayTeam}
        />
      ))}
    </ViewMain>
  );
};
