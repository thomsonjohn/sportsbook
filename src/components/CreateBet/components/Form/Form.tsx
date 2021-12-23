import React, { useContext } from 'react';
import { useFela } from 'react-fela';

import Loader from 'react-loader-spinner';
import { BigButton } from '../BigButton';
import { FormProps } from './Form.types';
import { styles } from '../../CreateBet.styles';
import BetContext from '../../../../context/BetContext';

export const Form = (props: FormProps) => {
  const {
    handleSubmit,
    handleStakeChange,
    handleStakeBlur,
    stakeInput,
    handleOddsChange,
    handleOddsBlur,
    oddsInput,
    isValid,
    submitStatus
  } = props;
  const { clearBet } = useContext(BetContext);
  const { css } = useFela();
  const potentialWinnings = (parseFloat(stakeInput) * parseFloat(oddsInput)).toFixed(2);
  return (
    <form className={css(styles.form)} onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="stake">Stake (USDT)</label>
      <input
        step=".01"
        type="number"
        id="stake"
        onChange={({ target }) => handleStakeChange(target.value)}
        onBlur={({ target }) => handleStakeBlur(target.value)}
        value={stakeInput}
        placeholder="100.00"
      />
      <label htmlFor="stake">Odds</label>
      <input
        step=".01"
        type="number"
        id="odds"
        onChange={({ target }) => handleOddsChange(target.value)}
        onBlur={({ target }) => handleOddsBlur(target.value)}
        value={oddsInput}
        placeholder="1.50"
      />
      <p>
        Potential winnings: <span>{isValid ? potentialWinnings : '0.00'} (USDT)</span>
      </p>
      <BigButton center disabled={!isValid} type="submit">
        {submitStatus.pending ? (
          <Loader type="TailSpin" color="#fff" height={20} width={20} />
        ) : (
          'Place bet'
        )}
      </BigButton>
      <button onClick={() => clearBet()} className={css(styles.cancel)}>
        Cancel
      </button>
    </form>
  );
};
