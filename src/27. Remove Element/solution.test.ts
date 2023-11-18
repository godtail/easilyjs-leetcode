import { removeElement } from './solution';

describe('27. Remove Element', () => {
  it('test case 1', () => {
    const nums = [3, 2, 2, 3];
    const val = 3;
    expect(removeElement(nums, val)).toEqual(2);
    expect(nums.slice(0, 2)).toEqual([2, 2]);
  });

  it('test case 2', () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;
    expect(removeElement(nums, val)).toEqual(5);
    expect(nums.slice(0, 5).sort()).toEqual([0, 0, 1, 3, 4]);
  });
});
