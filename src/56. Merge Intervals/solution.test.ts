import { merge } from './solution';

describe('56. Merge Intervals', () => {
  it('test case 1', () => {
    const intervals = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ];
    expect(merge(intervals)).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });

  it('test case 2', () => {
    const intervals = [
      [1, 4],
      [4, 5],
    ];
    expect(merge(intervals)).toEqual([[1, 5]]);
  });
});
