// https://leetcode.cn/problems/remove-duplicates-from-sorted-array

export const removeDuplicates = (nums: number[]): number => {
  // 使用双指针
  let fast = 1;
  let slow = 1;

  while (fast < nums.length) {
    // 如果快指针最近两个数不是重复的，赋值，慢指针 +1
    if (nums[fast] !== nums[fast - 1]) {
      nums[slow++] = nums[fast];
    }
    fast++;
  }

  return slow;
};
