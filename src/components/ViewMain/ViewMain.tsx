import React from 'react';
import { useFela } from 'react-fela';

import { ViewMainProps } from './ViewMain.types';
import { styles } from './ViewMain.styles';

export const ViewMain = (props: ViewMainProps) => {
  const { title, children } = props;
  const { css } = useFela();
  return (
    <div className={css(styles.wrapper)}>
      <header className={css(styles.header)}>
        <h3 className={css(styles.title)}>{title}</h3>
      </header>
      <>{children}</>
    </div>
  );
};
