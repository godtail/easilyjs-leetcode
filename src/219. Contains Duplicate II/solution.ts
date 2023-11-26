// https://leetcode.cn/problems/contains-duplicate-ii

export const containsNearbyDuplicate = (nums: number[], k: number): boolean => {
  // 使用哈希表记录每个数字的位置
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    // 如果存在数字，且位置差小于等于 k
    if (map.has(nums[i]) && i - map.get(nums[i])! <= k) {
      return true;
    }

    // 记录数字和位置
    map.set(nums[i], i);
  }

  return false;
};
