import { FormEvent } from 'react';

export interface FormProps {
  handleSubmit: (e: FormEvent) => void;
  handleStakeChange: (value: string) => void;
  handleStakeBlur: (value: string) => void;
  handleOddsChange: (value: string) => void;
  handleOddsBlur: (value: string) => void;
  stakeInput: string;
  oddsInput: string;
  isValid: boolean;
  submitStatus: {
    pending: boolean;
    submitted: boolean;
    success: boolean;
  };
}
