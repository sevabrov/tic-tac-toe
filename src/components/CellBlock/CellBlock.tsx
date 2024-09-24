import { FC } from 'react';
import Paper from '@mui/material/Paper';
import { cellBlockWrabber } from './styles';

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
      {value}
    </Paper>
  );
};
