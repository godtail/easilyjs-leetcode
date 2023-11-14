// https://leetcode.cn/problems/remove-element/

export const removeElement = (nums: number[], val: number): number => {
  // 使用双指针
  let fast = 0;
  let slow = 0;

  while (fast < nums.length) {
    // 如果快指针当前数不需要移除：赋值，慢指针 +1
    if (nums[fast] !== val) {
      nums[slow++] = nums[fast];
    }
    fast++;
  }

  return slow;
};
