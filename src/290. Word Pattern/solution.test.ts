import { wordPattern } from './solution';

describe('290. Word Pattern', () => {
  it('test case 1', () => {
    const pattern = 'abba';
    const str = 'dog cat cat dog';
    expect(wordPattern(pattern, str)).toEqual(true);
  });

  it('test case 2', () => {
    const pattern = 'abba';
    const str = 'dog cat cat fish';
    expect(wordPattern(pattern, str)).toEqual(false);
  });

  it('test case 3', () => {
    const pattern = 'aaaa';
    const str = 'dog cat cat dog';
    expect(wordPattern(pattern, str)).toEqual(false);
  });
});
