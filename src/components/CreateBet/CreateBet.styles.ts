interface StyleProps {
  isValid?: boolean;
}

export const makeStyles = ({ isValid }: StyleProps) => ({
  market: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    color: '#fff',
    borderRadius: '1em',
    padding: '0 2em',
    background:
      'linear-gradient(32deg,rgba(225, 132, 73, 1) 0%,rgba(177, 36, 224, 1) 35%,rgba(94, 140, 244, 1) 100%)',
    '& > h4': {
      fontSize: '1.5em',
      margin: '1em 0 0 0',
      fontWeight: 400
    },
    '& > p': {
      fontSize: '1em',
      fontWeight: 900,
      margin: '0 0 1.5em 0'
    }
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 1em',
    alignItems: 'flex-start',
    '& > label': {
      fontSize: '.75em',
      textTransform: 'uppercase',
      fontWeight: 700,
      color: '#5e8cf4'
    },
    '& > input': {
      fontWeight: 500,
      fontSize: '2em',
      padding: '0.25em 0',
      width: '250px',
      border: 'none',
      borderBottom: '4px solid #a8a8a8',
      marginBottom: '0.75em',
      borderRadius: '3px',
      color: '#333',
      outline: 'none',
      transition: 'border-bottom .4s ease',
      '&:focus': {
        borderBottom: '4px solid #5e8cf4 !important'
      }
    },
    '& > p': {
      marginTop: 0,
      '& > span': {
        color: '#5e8cf4',
        fontWeight: 700
      }
    }
  },
  cancel: {
    background: 'none',
    border: 'none',
    outline: 'none',
    color: '#5e8cf4',
    alignSelf: 'center',
    margin: '1.5em 0',
    cursor: 'pointer'
  }
});
