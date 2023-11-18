// https://leetcode.cn/problems/jump-game-ii

export const jump = (nums: number[]): number => {
  // 当前这一轮的最远可达位置
  let currentReach = 0;
  // 总的最远可达位置
  let maxReach = 0;
  let step = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    // 更新最远可达位置
    maxReach = Math.max(maxReach, i + nums[i]);
    // 如果到达当前可达位置，更新最远可以位置，步数 + 1
    if (i === currentReach) {
      currentReach = maxReach;
      step++;
    }
  }

  return step;
};
