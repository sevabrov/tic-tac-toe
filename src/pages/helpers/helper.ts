export const initData = Array(9).fill(null);

export const getWinner = (cellBlocks: Array<string | null>): string | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [firstCell, secondCell, thirdCell] = lines[i];
    if (
      cellBlocks[firstCell] &&
      cellBlocks[firstCell] === cellBlocks[secondCell] &&
      cellBlocks[firstCell] === cellBlocks[thirdCell]
    ) {
      return cellBlocks[firstCell];
    }
  }
  if (!cellBlocks.includes(null)) return 'draw';
  return null;
};

export const setResultText = (value: string): string => {
  switch (value) {
    case 'X':
      return 'You win a robot';
    case 'O':
      return 'The robot beats you! AHAHAHA';

    default:
      return 'It is a draw!';
  }
};

export const userSymbol = 'X';
export const robotSymbol = 'O';
