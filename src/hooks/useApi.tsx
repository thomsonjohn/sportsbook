import { BetProps } from '../components/CreateBet/CreateBet.types';

export const submitBet = (bet: BetProps) => {
  return delay(2000).then(() => {
    console.log(bet);
    return { success: true };
  });
};

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
