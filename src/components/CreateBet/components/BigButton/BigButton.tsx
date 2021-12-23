import React from 'react';
import { useFela } from 'react-fela';

import { BigButtonProps } from './BigButton.types';
import { makeStyles } from './BigButton.styles';

export const BigButton = ({ disabled, type, center, children, onClick }: BigButtonProps) => {
  const { css } = useFela();
  const styles = makeStyles({
    disabled,
    center
  });
  return (
    <button onClick={onClick} className={css(styles.button)} disabled={disabled} type={type}>
      {children}
    </button>
  );
};
