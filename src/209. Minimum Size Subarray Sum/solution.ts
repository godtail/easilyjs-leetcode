// https://leetcode.cn/problems/minimum-size-subarray-sum

export const minSubArrayLen = (target: number, nums: number[]): number => {
  let minSubArrayLen = Infinity;

  // 使用滑动窗口
  let start = 0;
  let end = 0;
  let sum = 0;

  while (end < nums.length) {
    // 累计当前窗口内的值
    sum += nums[end];
    // 当前窗口内的值大于 target，需要一直缩小窗口，直到小于 target
    while (sum >= target) {
      // 更新 minSubArrayLen
      minSubArrayLen = Math.min(minSubArrayLen, end - start + 1);
      sum -= nums[start];
      start++;
    }
    // 扩大窗口
    end++;
  }

  return minSubArrayLen === Infinity ? 0 : minSubArrayLen;
};
