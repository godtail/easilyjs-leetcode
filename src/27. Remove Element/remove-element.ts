// https://leetcode.cn/problems/remove-element/

export const removeElement = (nums: number[], val: number): number => {
  let fast = 0;
  let slow = 0;
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow++] = nums[fast];
    }
    fast++;
  }
  return slow;
};
