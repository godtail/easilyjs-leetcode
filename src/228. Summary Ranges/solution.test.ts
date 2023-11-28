import { summaryRanges } from './solution';

describe('228. Summary Ranges', () => {
  it('test case 1', () => {
    const nums = [0, 1, 2, 4, 5, 7];
    expect(summaryRanges(nums)).toEqual(['0->2', '4->5', '7']);
  });

  it('test case 2', () => {
    const nums = [0, 2, 3, 4, 6, 8, 9];
    expect(summaryRanges(nums)).toEqual(['0', '2->4', '6', '8->9']);
  });

  it('test case 3', () => {
    const nums: number[] = [];
    expect(summaryRanges(nums)).toEqual([]);
  });

  it('test case 4', () => {
    const nums = [-1];
    expect(summaryRanges(nums)).toEqual(['-1']);
  });

  it('test case 5', () => {
    const nums = [0];
    expect(summaryRanges(nums)).toEqual(['0']);
  });
});
