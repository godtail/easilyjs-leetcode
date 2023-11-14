// https://leetcode.cn/problems/majority-element

export const majorityElement = (nums: number[]): number | null => {
  let count = 0;
  let candidate: number | null = null;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }
    count += nums[i] === candidate ? 1 : -1;
  }

  return candidate;
};
