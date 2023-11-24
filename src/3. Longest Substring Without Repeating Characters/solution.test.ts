import { lengthOfLongestSubstring } from './solution';

describe('3. Longest Substring Without Repeating Characters', () => {
  it('test case 1', () => {
    const s = 'abcabcbb';
    expect(lengthOfLongestSubstring(s)).toEqual(3);
  });

  it('test case 2', () => {
    const s = 'bbbbb';
    expect(lengthOfLongestSubstring(s)).toEqual(1);
  });

  it('test case 3', () => {
    const s = 'pwwkew';
    expect(lengthOfLongestSubstring(s)).toEqual(3);
  });
});
