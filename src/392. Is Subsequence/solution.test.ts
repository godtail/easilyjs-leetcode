import { isSubsequence } from './solution';

describe('392. Is Subsequence', () => {
  it('test case 1', () => {
    const s = 'abc';
    const t = 'ahbgdc';
    expect(isSubsequence(s, t)).toEqual(true);
  });

  it('test case 2', () => {
    const s = 'axc';
    const t = 'ahbgdc';
    expect(isSubsequence(s, t)).toEqual(false);
  });
});
