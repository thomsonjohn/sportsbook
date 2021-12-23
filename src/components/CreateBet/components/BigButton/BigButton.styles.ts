interface StyleProps {
  disabled?: boolean;
  center?: boolean;
}

export const makeStyles = ({ disabled, center }: StyleProps) => ({
  button: {
    border: 'none',
    background: disabled
      ? '#a8a8a8'
      : 'linear-gradient(32deg,rgba(225, 132, 73, 1) 0%,rgba(177, 36, 224, 1) 35%,rgba(94, 140, 244, 1) 100%)',
    color: '#fff',
    padding: '1em',
    borderRadius: '2em',
    width: '250px',
    fontSize: '1em',
    fontWeight: 900,
    cursor: 'pointer',
    alignSelf: center ? 'center' : ''
  }
});
