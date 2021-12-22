import React from 'react';
import { useFela } from 'react-fela';

import { styles } from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button = (props: ButtonProps) => {
  const { text, onClick, active } = props;
  const { css } = useFela();
  return (
    <button className={css(styles.button)} onClick={onClick}>
      {text}
    </button>
  );
};
