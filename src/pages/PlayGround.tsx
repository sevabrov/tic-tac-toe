import { FC } from 'react';
import Box from '@mui/material/Box';
import UsePlayField from './helpers/hooks';
import { Board } from './components';
import { TButton } from 'components';
import { boxWrapper } from './style';
import {
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from '@mui/material';
import { setResultText } from './helpers/helper';

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

      {winner && (
        <Dialog open={winner !== null}>
          <DialogContent>
            <Typography align='center' color='primary' variant='h4'>
              {setResultText(winner)}
            </Typography>
          </DialogContent>
          <DialogActions>
            <TButton handleClick={handleReset} />
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default PlayGround;
