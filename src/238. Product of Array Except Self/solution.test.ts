import { productExceptSelf } from './solution';

describe('238. Product of Array Except Self', () => {
  it('test case 1', () => {
    const nums = [1, 2, 3, 4];
    expect(productExceptSelf(nums)).toEqual([24, 12, 8, 6]);
  });

  it('test case 2', () => {
    const nums = [-1, 1, 0, -3, 3];
    expect(productExceptSelf(nums)).toEqual([-0, 0, 9, -0, 0]);
  });
});
