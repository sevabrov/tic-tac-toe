import { FC } from 'react';
import Paper from '@mui/material/Paper';
import { cellBlockWrabber } from './styles';
import { Typography } from '@mui/material';

type CellBlockProps = {
  value: string | null;
  onClick: () => void;
  shouldDisable: boolean;
};

export const CellBlock: FC<CellBlockProps> = ({
  value,
  onClick,
  shouldDisable = false,
}) => {
  return (
    <Paper elevation={3} onClick={onClick} sx={cellBlockWrabber(shouldDisable)}>
      <Typography color='primary' variant='h2' sx={{ position: 'absolute' }}>
        {value}
      </Typography>
    </Paper>
  );
};
