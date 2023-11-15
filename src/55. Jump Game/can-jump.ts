export const canJump = (nums: number[]): boolean => {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    // 如果当前的位置大于 maxReach，说明无法到达
    if (i > maxReach) {
      return false;
    }
    // 每次更新 maxReach
    maxReach = Math.max(maxReach, i + nums[i]);
  }

  return true;
};
