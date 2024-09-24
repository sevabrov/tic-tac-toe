import { useRef, useState } from 'react';
import { getWinner, initData, robotSymbol, userSymbol } from './helper';

const UsePlayField = () => {
  const [cellBlocks, setCellBlocks] = useState<Array<string | null>>(initData);
  const [userIsNext, setUserIsNext] = useState<boolean>(true);
  const selectedCellBlocks = useRef(0);
  const shouldgetWinner = selectedCellBlocks.current >= 4;

  //Need to be improved, because it's havy operation
  const winner: string | null = shouldgetWinner ? getWinner(cellBlocks) : null;

  const handleUpdate = (
    nextCellBlocks: Array<string | null>,
    isUserNext: boolean
  ): void => {
    setCellBlocks(nextCellBlocks);
    setUserIsNext(isUserNext);
    selectedCellBlocks.current += 1;
  };

  const handleAutoClick = (nextCellBlocks: Array<string | null>): void => {
    if (shouldgetWinner && getWinner(nextCellBlocks)) {
      return;
    }

    const emptyCellBlocks = nextCellBlocks
      .map((block, index) => (block === null ? index : null))
      .filter((idx) => idx !== null);

    if (emptyCellBlocks.length > 0) {
      const randomIndex =
        emptyCellBlocks[Math.floor(Math.random() * emptyCellBlocks.length)];
      nextCellBlocks[randomIndex as number] = robotSymbol;
      handleUpdate(nextCellBlocks, true);
    }
  };

  const handleClick = (i: number): void => {
    if (cellBlocks[i] || winner || !userIsNext) {
      return;
    }

    const nextCellBlocks = [...cellBlocks];
    nextCellBlocks[i] = userSymbol;
    handleUpdate(nextCellBlocks, false);

    setTimeout(() => {
      handleAutoClick(nextCellBlocks);
    }, 1000);
  };

  const handleReset = (): void => {
    setCellBlocks(initData);
    setUserIsNext(true);
    selectedCellBlocks.current = 0;
  };

  return {
    cellBlocks,
    handleClick,
    handleReset,
    userIsNext,
    winner,
  };
};

export default UsePlayField;
