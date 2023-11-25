// https://leetcode.cn/problems/valid-sudoku

export const isValidSudoku = (board: string[][]): boolean => {
  // 我们记录每一行、每一列、每个小九宫格中 1- 9 数字出现的次数
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const cols = new Array(9).fill(0).map(() => new Array(9).fill(0));
  // 3 x 3 的小九宫格
  const subBoxes = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = board[i][j];
      if (val === '.') {
        continue;
      }
      // 获取当前 number 的索引，并更新计数
      const numIndex = Number(val) - 1;
      rows[i][numIndex]++;
      cols[j][numIndex]++;
      subBoxes[Math.floor(i / 3)][Math.floor(j / 3)][numIndex]++;

      // 因为在九宫格中，每个数字不能重复，所以我们只需要判断当前计数是否大于1
      if (
        rows[i][numIndex] > 1 ||
        cols[j][numIndex] > 1 ||
        subBoxes[Math.floor(i / 3)][Math.floor(j / 3)][numIndex] > 1
      ) {
        return false;
      }
    }
  }

  return true;
};
