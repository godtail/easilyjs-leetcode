// https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii

export const removeDuplicates = (nums: number[]): number => {
  if (nums.length <= 2) return nums.length;

  let fast = 2;
  let slow = 2;

  while (fast < nums.length) {
    if (nums[fast] !== nums[slow - 2]) {
      nums[slow++] = nums[fast];
    }
    fast++;
  }

  return slow;
};
