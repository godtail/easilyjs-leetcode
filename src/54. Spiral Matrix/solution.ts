// https://leetcode.cn/problems/spiral-matrix

export const spiralOrder = (matrix: number[][]): number[] => {
  const result: number[] = [];

  // 指定每次循环的上下左右边界
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  // 记录剩余需要遍历的元素个数
  let remain = matrix.length * matrix[0].length;

  while (remain > 0) {
    // 从左到右遍历（可能在遍历过程中已经把 remain 遍历完了，所以需要判断 remain > 0）
    for (let i = left; i <= right && remain > 0; i++) {
      result.push(matrix[top][i]);
      remain--;
    }
    top++;
    // 从上到下遍历
    for (let i = top; i <= bottom && remain > 0; i++) {
      result.push(matrix[i][right]);
      remain--;
    }
    right--;
    // 从右到左遍历
    for (let i = right; i >= left && remain > 0; i--) {
      result.push(matrix[bottom][i]);
      remain--;
    }
    bottom--;
    // 从下到上遍历
    for (let i = bottom; i >= top && remain > 0; i--) {
      result.push(matrix[i][left]);
      remain--;
    }
    left++;
  }

  return result;
};
