// https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii

export const removeDuplicates = (nums: number[]): number => {
  // 如果数组长度小于等于 2，直接返回
  if (nums.length <= 2) return nums.length;

  // 使用双指针
  let fast = 2;
  let slow = 2;

  while (fast < nums.length) {
    // 如果当前快指针的数，不等于慢指针前两个的数，赋值，慢指针 +1
    if (nums[fast] !== nums[slow - 2]) {
      nums[slow++] = nums[fast];
    }
    fast++;
  }

  return slow;
};
