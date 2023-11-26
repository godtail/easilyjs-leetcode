import { groupAnagrams } from './solution';

describe('49. Group Anagrams', () => {
  it('test case 1', () => {
    const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    expect(groupAnagrams(strs)).toEqual([['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
  });

  it('test case 2', () => {
    const strs = [''];
    expect(groupAnagrams(strs)).toEqual([['']]);
  });

  it('test case 3', () => {
    const strs = ['a'];
    expect(groupAnagrams(strs)).toEqual([['a']]);
  });
});
