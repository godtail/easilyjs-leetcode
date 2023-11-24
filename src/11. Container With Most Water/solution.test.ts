import { maxArea } from './solution';

describe('11. Container With Most Water', () => {
  it('test case 1', () => {
    const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    expect(maxArea(height)).toEqual(49);
  });

  it('test case 2', () => {
    const height = [1, 1];
    expect(maxArea(height)).toEqual(1);
  });
});
