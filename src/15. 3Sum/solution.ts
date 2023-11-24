// https://leetcode.cn/problems/3sum

// 这道题的解法类似两数之和，相对于外面多套了一层循环
export const threeSum = (nums: number[]): number[][] => {
  const result: number[][] = [];

  // 先排序
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    const first = nums[i];
    // 因为是排序过的，所以如果第一个数大于 0，说明后面的数都大于 0，不可能相加等于 0
    if (first > 0) {
      break;
    }
    // 如果当前值和上一个值一致，说明已经计算过了，跳过
    if (i > 0 && first === nums[i - 1]) {
      continue;
    }
    // 使用双指针
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = first + nums[left] + nums[right];
      if (sum === 0) {
        // 刚好等于 0，放入 result
        result.push([first, nums[left], nums[right]]);
        // 因为要去重，所以如果左右指针下一个值是一致的，需要跳过
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        // 移动左右指针，计算下一组值
        left++;
        right--;
      } else if (sum > 0) {
        // 如果大于 0，说明最后一个数大了
        right--;
      } else {
        // 如果小于 0，说明第二个数小了
        left++;
      }
    }
  }

  return result;
};
