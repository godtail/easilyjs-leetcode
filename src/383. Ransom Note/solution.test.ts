import { canConstruct } from './solution';

describe('383. Ransom Note', () => {
  it('test case 1', () => {
    const ransomNote = 'a';
    const magazine = 'b';
    expect(canConstruct(ransomNote, magazine)).toEqual(false);
  });

  it('test case 2', () => {
    const ransomNote = 'aa';
    const magazine = 'ab';
    expect(canConstruct(ransomNote, magazine)).toEqual(false);
  });

  it('test case 3', () => {
    const ransomNote = 'aa';
    const magazine = 'aab';
    expect(canConstruct(ransomNote, magazine)).toEqual(true);
  });
});
