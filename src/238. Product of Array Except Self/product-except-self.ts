// https://leetcode.cn/problems/product-of-array-except-self

export const productExceptSelf = (nums: number[]): number[] => {
  // 除当前元素外的其他乘积，可以拆分为左侧乘积和右侧乘积
  // 1, 2, 3, 4
  // 以元素 2 为例，左侧乘积为 1，右侧乘机为 3 * 4 = 12，两者相乘即为 1 * 12 = 12
  const products: number[] = [];
  const leftProducts: number[] = [];
  const rightProducts: number[] = [];

  // 左侧没有元素，所以初始化为 1
  leftProducts[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  }

  // 右侧没有元素，所以初始化为 1
  rightProducts[nums.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    products[i] = leftProducts[i] * rightProducts[i];
  }

  return products;
};
