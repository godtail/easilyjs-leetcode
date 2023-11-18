// https://leetcode.cn/problems/zigzag-conversion

export const convert = (s: string, numRows: number): string => {
  let result = '';

  // 如果只有一行，直接返回
  if (numRows === 1) {
    return s;
  }

  // 先构建矩阵
  const matrix: string[][] = [];
  for (let i = 0; i < numRows; i++) {
    matrix[i] = [];
  }

  // 每一次 Z 字形变换周期是 2 * numRows - 2
  const cycle = 2 * numRows - 2;

  // 当前矩阵坐标
  let x = 0;
  let y = 0;

  // 填充矩阵数据
  for (let i = 0; i < s.length; i++) {
    matrix[y][x] = s[i];
    if (i % cycle < numRows - 1) {
      // 正在向下走
      y++;
    } else {
      // 正在向上走
      y--;
      x++;
    }
  }

  // 读取矩阵数据
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // 忽略空数据
      if (matrix[i][j]) {
        result += matrix[i][j];
      }
    }
  }

  return result;
};
