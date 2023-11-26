import { longestConsecutive } from './solution';

describe('128. Longest Consecutive Sequence', () => {
  it('test case 1', () => {
    const nums = [100, 4, 200, 1, 3, 2];
    expect(longestConsecutive(nums)).toEqual(4);
  });

  it('test case 2', () => {
    const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
    expect(longestConsecutive(nums)).toEqual(9);
  });
});
