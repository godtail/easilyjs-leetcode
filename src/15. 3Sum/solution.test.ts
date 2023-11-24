import { threeSum } from './solution';

describe('15. 3Sum', () => {
  it('test case 1', () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    expect(threeSum(nums)).toEqual([
      [-1, -1, 2],
      [-1, 0, 1],
    ]);
  });

  it('test case 2', () => {
    const nums = [0, 0, 0];
    expect(threeSum(nums)).toEqual([[0, 0, 0]]);
  });
});
