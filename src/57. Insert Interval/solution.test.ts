import { insert } from './solution';

describe('57. Insert Interval', () => {
  it('test case 1', () => {
    const intervals = [
      [1, 3],
      [6, 9],
    ];
    const newInterval = [2, 5];
    expect(insert(intervals, newInterval)).toEqual([
      [1, 5],
      [6, 9],
    ]);
  });

  it('test case 2', () => {
    const intervals = [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ];
    const newInterval = [4, 8];
    expect(insert(intervals, newInterval)).toEqual([
      [1, 2],
      [3, 10],
      [12, 16],
    ]);
  });

  it('test case 3', () => {
    const intervals: number[][] = [];
    const newInterval = [5, 7];
    expect(insert(intervals, newInterval)).toEqual([[5, 7]]);
  });

  it('test case 4', () => {
    const intervals = [[1, 5]];
    const newInterval = [2, 3];
    expect(insert(intervals, newInterval)).toEqual([[1, 5]]);
  });

  it('test case 5', () => {
    const intervals = [[1, 5]];
    const newInterval = [2, 7];
    expect(insert(intervals, newInterval)).toEqual([[1, 7]]);
  });
});
