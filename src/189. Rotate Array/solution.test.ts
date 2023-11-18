import { rotateArray } from './solution';

describe('189. Rotate Array', () => {
  it('test case 1', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7];
    const k = 3;
    rotateArray(nums, k);
    expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it('test case 2', () => {
    const nums = [-1, -100, 3, 99];
    const k = 2;
    rotateArray(nums, k);
    expect(nums).toEqual([3, 99, -1, -100]);
  });
});
