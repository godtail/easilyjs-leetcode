import { findMinArrowShots } from './solution';

describe('452. Minimum Number of Arrows to Burst Balloons', () => {
  it('test case 1', () => {
    const points = [
      [10, 16],
      [2, 8],
      [1, 6],
      [7, 12],
    ];
    const result = 2;
    expect(findMinArrowShots(points)).toEqual(result);
  });

  it('test case 2', () => {
    const points = [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ];
    const result = 4;
    expect(findMinArrowShots(points)).toEqual(result);
  });

  it('test case 3', () => {
    const points = [
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
    ];
    const result = 2;
    expect(findMinArrowShots(points)).toEqual(result);
  });
});
