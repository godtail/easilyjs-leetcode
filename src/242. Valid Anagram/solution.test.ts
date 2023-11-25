import { isAnagram } from './solution';

describe('242. Valid Anagram', () => {
  it('test case 1', () => {
    const s = 'anagram';
    const t = 'nagaram';
    expect(isAnagram(s, t)).toEqual(true);
  });

  it('test case 2', () => {
    const s = 'rat';
    const t = 'car';
    expect(isAnagram(s, t)).toEqual(false);
  });

  it('test case 3', () => {
    const s = 'a';
    const t = 'ab';
    expect(isAnagram(s, t)).toEqual(false);
  });
});
