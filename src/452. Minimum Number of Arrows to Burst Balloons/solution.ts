// https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons

export const findMinArrowShots = (points: number[][]): number => {
  // 如果为空，返回 0
  if (points.length === 0) {
    return 0;
  }

  // 先按照有边界进行升序排序
  points.sort((a, b) => a[1] - b[1]);

  // 按照贪心算法，每次都在最右边界进行射击
  // 设置第一次为第一个气球的右边界
  let result = 1;
  let shot = points[0][1];

  // 从第二个气球开始遍历
  for (let i = 1; i < points.length; i++) {
    // 如果第二个气球的左边界超出射击位置
    if (points[i][0] > shot) {
      // 进行第二次射击
      result++;
      shot = points[i][1];
    }
  }

  return result;
};
