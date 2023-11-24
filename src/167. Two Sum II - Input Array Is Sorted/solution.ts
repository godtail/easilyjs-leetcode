// https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted

export const twoSum = (numbers: number[], target: number): number[] => {
  // 使用双指针
  let left = 0;
  let right = numbers.length - 1;

  while (left < right && numbers[left] + numbers[right] !== target) {
    // 因为数组是从小到大排序的，所以如果比目标值大，需要把右侧的指针往左移，否则左侧指针往右移动
    if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      left++;
    }
  }

  return [left + 1, right + 1];
};
