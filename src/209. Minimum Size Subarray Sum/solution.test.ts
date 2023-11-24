import { minSubArrayLen } from './solution';

describe('209. Minimum Size Subarray Sum', () => {
  it('test case 1', () => {
    const s = 7;
    const nums = [2, 3, 1, 2, 4, 3];
    expect(minSubArrayLen(s, nums)).toEqual(2);
  });

  it('test case 2', () => {
    const s = 4;
    const nums = [1, 4, 4];
    expect(minSubArrayLen(s, nums)).toEqual(1);
  });

  it('test case 3', () => {
    const s = 11;
    const nums = [1, 1, 1, 1, 1, 1, 1, 1];
    expect(minSubArrayLen(s, nums)).toEqual(0);
  });
});
