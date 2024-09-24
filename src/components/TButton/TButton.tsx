import { FC } from 'react';
import Button from '@mui/material/Button';
import RefreshIcon from '@mui/icons-material/Refresh';

type TButtonProps = {
  handleClick: () => void;
};

export const TButton: FC<TButtonProps> = ({ handleClick }: TButtonProps) => {
  return (
    <Button
      variant='outlined'
      onClick={handleClick}
      startIcon={<RefreshIcon />}
      color='primary'
      fullWidth
    >
      Play again
    </Button>
  );
};
