import React from 'react';
import { useFela } from 'react-fela';

import { CardProps } from './Card.types';
import { styles } from './Card.styles';

export const Card = (props: CardProps) => {
  const { css } = useFela();
  const { children } = props;

  return <div className={css(styles.card)}>{children}</div>;
};
