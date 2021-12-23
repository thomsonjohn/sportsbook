export const styles = {
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& > p': {
      fontSize: '1em',
      color: '#333',
      fontWeight: 500,
      margin: '0.6em'
    },
    '& > span': {
      fontSize: '1em',
      color: '#a8a8a8',
      fontWeight: 400
    }
  },
  outcomes: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '370px'
  }
};
