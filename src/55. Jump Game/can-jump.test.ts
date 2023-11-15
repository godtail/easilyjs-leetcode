import { canJump } from './can-jump';

describe('55. Jump Game', () => {
  it('test case 1', () => {
    const nums = [2, 3, 1, 1, 4];
    expect(canJump(nums)).toEqual(true);
  });

  it('test case 2', () => {
    const nums = [3, 2, 1, 0, 4];
    expect(canJump(nums)).toEqual(false);
  });
});
