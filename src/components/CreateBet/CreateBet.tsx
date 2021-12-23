import React, { useState, useContext, FormEvent, useEffect } from 'react';
import { useFela } from 'react-fela';
import toast from 'react-hot-toast';

import { styles } from './CreateBet.styles';

import { Card } from '../Card';
import { ViewMain } from '../ViewMain';
import { Form } from './components/Form';
import BetContext from '../../context/BetContext';
import { submitBet } from '../../hooks/useApi';
import { Success } from './components/Success';

export const CreateBet = () => {
  const { marketData, bet, updateBet } = useContext(BetContext);
  const [stakeInput, setStakeInput] = useState(bet.stake);
  const [oddsInput, setOddsInput] = useState(bet.odds);
  const [submitStatus, setSubmitStatus] = useState({
    pending: false,
    submitted: false,
    success: false
  });
  const { marketId, outcome } = bet;
  const match = marketData.find((market) => {
    return market.marketId === marketId;
  });
  const isValid = stakeInput.length > 3 && oddsInput.length > 3;
  const { css } = useFela();

  useEffect(() => {
    if (isValid && stakeInput && oddsInput) {
      updateBet({
        ...bet,
        stake: stakeInput,
        odds: oddsInput
      });
    }
  }, [isValid, stakeInput, oddsInput]);

  const handleStakeChange = (value: string) => {
    setStakeInput(value);
  };

  const handleOddsChange = (value: string) => {
    setOddsInput(value);
  };

  const handleStakeBlur = (value: string) => {
    if (value.length > 0) {
      const num = parseFloat(value);
      const cleanNum = num.toFixed(2);
      setStakeInput(cleanNum.toString());
    }
  };

  const handleOddsBlur = (value: string) => {
    if (value.length > 0) {
      const num = parseFloat(value);
      const cleanNum = num.toFixed(2);
      setOddsInput(cleanNum.toString());
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitStatus({
      ...submitStatus,
      pending: true
    });
    toast
      .promise(submitBet(bet), {
        loading: 'Submitting bet...',
        success: 'Success',
        error: 'Oops! Something went wrong'
      })
      .then((res) => {
        setSubmitStatus({
          pending: false,
          submitted: true,
          success: res.success
        });
      });
  };

  return (
    <ViewMain title="Create your bet">
      <div className={css(styles.market)}>
        <h4>
          {match?.homeTeam} v {match?.awayTeam}
        </h4>
        <p>{outcome}</p>
      </div>
      <Card>
        {submitStatus && submitStatus.submitted && submitStatus.success ? (
          <Success />
        ) : (
          <Form
            handleSubmit={handleSubmit}
            handleStakeChange={handleStakeChange}
            handleStakeBlur={handleStakeBlur}
            stakeInput={stakeInput}
            handleOddsChange={handleOddsChange}
            handleOddsBlur={handleOddsBlur}
            oddsInput={oddsInput}
            isValid={isValid}
            submitStatus={submitStatus}
          />
        )}
      </Card>
    </ViewMain>
  );
};
