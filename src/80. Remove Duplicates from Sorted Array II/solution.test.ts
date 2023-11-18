import { removeDuplicates } from './solution';

describe('80. Remove Duplicates from Sorted Array II', () => {
  it('test case 1', () => {
    const nums = [1, 1, 1, 2, 2, 3];
    expect(removeDuplicates(nums)).toEqual(5);
    expect(nums.slice(0, 5)).toEqual([1, 1, 2, 2, 3]);
  });

  it('test case 2', () => {
    const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
    expect(removeDuplicates(nums)).toEqual(7);
    expect(nums.slice(0, 7)).toEqual([0, 0, 1, 1, 2, 3, 3]);
  });
});
