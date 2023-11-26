import { twoSum } from './solution';

describe('1. Two Sum', () => {
  it('test case 1', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  it('test case 2', () => {
    const nums = [3, 2, 4];
    const target = 6;
    expect(twoSum(nums, target)).toEqual([1, 2]);
  });

  it('test case 3', () => {
    const nums = [3, 3];
    const target = 6;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });
});
