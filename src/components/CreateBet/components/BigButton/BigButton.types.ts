import { ReactNode } from 'react';

export interface BigButtonProps {
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  children: ReactNode;
  onClick?: () => void;
  center?: boolean;
}
