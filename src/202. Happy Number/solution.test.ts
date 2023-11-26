import { isHappy } from './solution';

describe('202. Happy Number', () => {
  it('test case 1', () => {
    const n = 19;
    expect(isHappy(n)).toEqual(true);
  });

  it('test case 2', () => {
    const n = 2;
    expect(isHappy(n)).toEqual(false);
  });
});
