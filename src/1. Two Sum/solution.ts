// https://leetcode.cn/problems/two-sum

export const twoSum = (nums: number[], target: number): number[] | null => {
  // 使用 map 记录数字和索引的关系
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    // 需要另外一个数字，如果有的话，直接返回
    if (map.has(target - num)) {
      return [map.get(target - num)!, i];
    }
    // 记录 mapping
    map.set(num, i);
  }

  return null;
};
