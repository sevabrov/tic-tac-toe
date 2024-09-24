import { FC } from 'react';
import Box from '@mui/material/Box';
import UsePlayField from './helpers/hooks';
import { Board } from './components';
import { TButton } from 'components';
import { boxWrapper } from './style';
import { Dialog, DialogActions, DialogTitle } from '@mui/material';

const PlayGround: FC = () => {
  const { cellBlocks, handleClick, handleReset, userIsNext, winner } =
    UsePlayField();
  return (
    <Box sx={boxWrapper}>
      <Board
        cellBlocks={cellBlocks}
        handleClick={handleClick}
        shouldDisable={!userIsNext}
      />

      <Dialog open={winner !== null}>
        <DialogTitle>{`The winner is: ${winner}`}</DialogTitle>
        <DialogActions>
          <TButton handleClick={handleReset} />
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default PlayGround;
