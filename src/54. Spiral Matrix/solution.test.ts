import { spiralOrder } from './solution';

describe('54. Spiral Matrix', () => {
  it('test case 1', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    expect(spiralOrder(matrix)).toEqual([1, 2, 3, 6, 5, 4]);
  });

  it('test case 2', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
    ];
    expect(spiralOrder(matrix)).toEqual([1, 2, 3, 4, 8, 7, 6, 5]);
  });
});
