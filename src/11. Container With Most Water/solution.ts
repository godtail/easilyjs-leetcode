// https://leetcode.cn/problems/container-with-most-water

export const maxArea = (height: number[]): number => {
  let maxArea = 0;

  // 使用双指针
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    // 更新 maxArea
    maxArea = area > maxArea ? area : maxArea;

    // 因为如果需要面积大，所以高度短的需要先舍弃
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }

  return maxArea;
};
