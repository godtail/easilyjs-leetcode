// https://leetcode.cn/problems/remove-duplicates-from-sorted-array

export const removeDuplicates = (nums: number[]): number => {
  let fast = 1;
  let slow = 1;
  while (fast < nums.length) {
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow++] = nums[fast];
    }
    fast++;
  }
  return slow;
};
