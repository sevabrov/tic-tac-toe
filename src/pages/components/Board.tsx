import { FC } from 'react';
import Grid from '@mui/material/Grid2';
import { CellBlock } from 'components';
import { boardWrapper } from './styles';

type BoardProps = {
  cellBlocks: Array<string | null>;
  handleClick(idx: number): void;
  shouldDisable: boolean;
};

export const Board: FC<BoardProps> = ({
  cellBlocks,
  handleClick,
  shouldDisable,
}: BoardProps) => {
  return (
    <Grid container spacing={2} sx={boardWrapper}>
      {cellBlocks.map((_, idx: number) => (
        <Grid size={4} key={`cellBlock-${idx}`}>
          <CellBlock
            value={cellBlocks[idx]}
            onClick={() => handleClick(idx)}
            shouldDisable={shouldDisable}
          />
        </Grid>
      ))}
    </Grid>
  );
};
