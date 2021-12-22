import React from 'react';

import { Outcome } from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button = (props: ButtonProps) => {
  const { text, onClick, active } = props;
  return <Outcome onClick={onClick}>{text}</Outcome>;
};
