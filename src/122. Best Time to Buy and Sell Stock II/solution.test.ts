import { maxProfit } from './solution';

describe('121. Best Time to Buy and Sell Stock', () => {
  it('test case 1', () => {
    const prices = [7, 1, 5, 3, 6, 4];
    expect(maxProfit(prices)).toEqual(7);
  });

  it('test case 2', () => {
    const prices = [1, 2, 3, 4, 5];
    expect(maxProfit(prices)).toEqual(4);
  });
});
