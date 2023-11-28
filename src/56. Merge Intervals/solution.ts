// https://leetcode.cn/problems/merge-intervals

export const merge = (intervals: number[][]): number[][] => {
  const result: number[][] = [];

  // 先按照区间左边界排序
  intervals.sort((a, b) => a[0] - b[0]);

  for (const interval of intervals) {
    const [left, right] = interval;
    // 如果是空，或者当前区间的左边界值大于合并区间后的右边界值，说明当前区间和合并区间没有交集
    if (result.length === 0 || left > result[result.length - 1][1]) {
      result.push([left, right]);
    } else {
      // 否则更新右边界最大值
      result[result.length - 1][1] = Math.max(result[result.length - 1][1], right);
    }
  }

  return result;
};
