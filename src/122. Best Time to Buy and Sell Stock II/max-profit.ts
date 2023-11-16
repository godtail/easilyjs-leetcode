// https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii

export const maxProfit = (prices: number[]): number => {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    // 使用贪心算法，只要有收益就进行买卖
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }

  return maxProfit;
};
