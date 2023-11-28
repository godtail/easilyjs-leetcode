// https://leetcode.cn/problems/summary-ranges

export const summaryRanges = (nums: number[]): string[] => {
  const ranges: string[] = [];
  let i = 0;

  while (i < nums.length) {
    // 连续区间起点
    const low = i;
    // 循环，找到连续区间终点
    do {
      i++;
    } while (nums[i] === nums[i - 1] + 1 && i < nums.length);
    const high = i - 1;
    if (low === high) {
      ranges.push(String(nums[low]));
    } else {
      ranges.push(`${nums[low]}->${nums[high]}`);
    }
  }

  return ranges;
};
