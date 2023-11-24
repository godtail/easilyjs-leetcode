import { twoSum } from './solution';

describe('167. Two Sum II - Input Array Is Sorted', () => {
  it('test case 1', () => {
    const numbers = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(numbers, target)).toEqual([1, 2]);
  });

  it('test case 2', () => {
    const numbers = [2, 3, 4];
    const target = 6;
    expect(twoSum(numbers, target)).toEqual([1, 3]);
  });

  it('test case 3', () => {
    const numbers = [-1, 0];
    const target = -1;
    expect(twoSum(numbers, target)).toEqual([1, 2]);
  });
});
