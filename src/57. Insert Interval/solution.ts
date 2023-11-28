// https://leetcode.cn/problems/insert-interval

export const insert = (intervals: number[][], newInterval: number[]): number[][] => {
  const result: number[][] = [];
  let isInserted = false;

  for (const interval of intervals) {
    // 如果当前区间的左边界，大于新区间的右边界，说明没有交集，第一次是插入新区间的时机
    if (interval[0] > newInterval[1]) {
      if (!isInserted) {
        result.push(newInterval);
        isInserted = true;
      }
      result.push(interval);
    } else if (interval[1] < newInterval[0]) {
      // 还没有开始产生交集，直接插入当前区间
      result.push(interval);
    } else {
      // 产生交集了，更新需要插入新区间的左右边界
      newInterval[0] = Math.min(newInterval[0], interval[0]);
      newInterval[1] = Math.max(newInterval[1], interval[1]);
    }
  }

  // 如果没找到对应的区间插入，需要添加到最后面
  if (!isInserted) {
    result.push(newInterval);
  }

  return result;
};
