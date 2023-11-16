// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock

export const maxProfit = (prices: number[]): number => {
  // 使用双指针
  let fast = 0;
  let slow = 0;
  let maxProfit = 0;

  while (fast < prices.length) {
    // 如果快指针的值小于慢指针，切换慢指针到当前快指针
    if (prices[fast] < prices[slow]) {
      slow = fast;
    } else if (prices[fast] - prices[slow] > maxProfit) {
      // 使用当前快指针的值减去慢指针，判断是否比当前最高利润要大
      maxProfit = prices[fast] - prices[slow];
    }
    fast++;
  }

  return maxProfit;
};
