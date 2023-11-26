// https://leetcode.cn/problems/longest-consecutive-sequence

export const longestConsecutive = (nums: number[]): number => {
  let longestConsecutive = 0;

  // 使用 set，记录每个数字
  const numberSet = new Set(nums);

  for (const num of nums) {
    // 如果还有比他小 1 的数字，说明这个不是起点数字，跳过
    if (numberSet.has(num - 1)) {
      continue;
    }
    let currentLongestConsecutive = 1;
    let currentNum = num;
    // 找比他大的连续数字
    while (numberSet.has(currentNum + 1)) {
      currentLongestConsecutive++;
      currentNum++;
    }
    longestConsecutive = Math.max(longestConsecutive, currentLongestConsecutive);
  }

  return longestConsecutive;
};
