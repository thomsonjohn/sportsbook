import React from 'react';

import { Card, Outcomes, TeamName, TitleWrapper, Versus } from './Market.styles';
import { MarketProps } from './Market.types';

import { Button } from './components/Button';

export const Market = (props: MarketProps) => {
  const { homeTeam, awayTeam, outcomes } = props;
  return (
    <Card>
      <TitleWrapper>
        <TeamName>{homeTeam}</TeamName>
        <Versus>vs</Versus>
        <TeamName>{awayTeam}</TeamName>
      </TitleWrapper>
      <Outcomes>
        {outcomes.map((outcome, index) => (
          <div key={`market${index}-${outcome}`}>
            <Button text={outcome} onClick={() => console.log(outcome)} />
          </div>
        ))}
      </Outcomes>
    </Card>
  );
};
