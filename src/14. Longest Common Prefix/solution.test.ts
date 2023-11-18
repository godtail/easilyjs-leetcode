import { longestCommonPrefix } from './solution';

describe('14. Longest Common Prefix', () => {
  it('test case 1', () => {
    const strs = ['flower', 'flow', 'flight'];
    expect(longestCommonPrefix(strs)).toEqual('fl');
  });

  it('test case 2', () => {
    const strs = ['dog', 'racecar', 'car'];
    expect(longestCommonPrefix(strs)).toEqual('');
  });
});
