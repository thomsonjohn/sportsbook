import React, { useContext } from 'react';
import { useFela } from 'react-fela';

import { styles } from './Success.styles';
import { BigButton } from '../BigButton';
import BetContext from '../../../../context/BetContext';

export const Success = () => {
  const { css } = useFela();
  const { clearBet } = useContext(BetContext);

  return (
    <>
      <i className={css(styles.message)}>It&apos;s on!</i>
      <span className={css(styles.emoji)}>🎉</span>
      <p className={css(styles.copy)}>Check out the lobby for more exciting markets.</p>
      <BigButton onClick={() => clearBet()} center type="button">
        Go to market
      </BigButton>
    </>
  );
};
