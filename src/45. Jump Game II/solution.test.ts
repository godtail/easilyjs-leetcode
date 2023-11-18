import { jump } from './solution';

describe('45. Jump Game II', () => {
  it('test case 1', () => {
    const nums = [2, 3, 1, 1, 4];
    expect(jump(nums)).toEqual(2);
  });

  it('test case 2', () => {
    const nums = [2, 3, 0, 1, 4];
    expect(jump(nums)).toEqual(2);
  });
});
