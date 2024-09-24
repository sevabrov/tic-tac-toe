export const cellBlockWrabber = (shouldDisable: boolean) => {
  return {
    height: '100%',
    cursor: !shouldDisable ? 'pointer' : 'not-allowed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };
};
