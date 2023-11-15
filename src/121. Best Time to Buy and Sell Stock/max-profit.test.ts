import { maxProfit } from './max-profit';

describe('121. Best Time to Buy and Sell Stock', () => {
  it('test case 1', () => {
    const prices = [7, 1, 5, 3, 6, 4];
    expect(maxProfit(prices)).toEqual(5);
  });

  it('test case 2', () => {
    const prices = [7, 6, 4, 3, 1];
    expect(maxProfit(prices)).toEqual(0);
  });
});
