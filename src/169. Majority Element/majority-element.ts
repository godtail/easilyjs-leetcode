// https://leetcode.cn/problems/majority-element

export const majorityElement = (nums: number[]): number | null => {
  let count = 0;
  let candidate: number | null = null;

  for (let i = 0; i < nums.length; i++) {
    // 如果候选人票数为 0，换另外一个候选人
    if (count === 0) {
      candidate = nums[i];
    }
    // 如果是当前候选人，票数 +1，否则 -1
    count += nums[i] === candidate ? 1 : -1;
  }

  return candidate;
};
