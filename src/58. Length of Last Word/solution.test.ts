import { lengthOfLastWord } from './solution';

describe('58. Length of Last Word', () => {
  it('test case 1', () => {
    const s = 'Hello World';
    expect(lengthOfLastWord(s)).toEqual(5);
  });

  it('test case 2', () => {
    const s = '   fly me   to   the moon  ';
    expect(lengthOfLastWord(s)).toEqual(4);
  });

  it('test case 3', () => {
    const s = 'luffy is still joyboy';
    expect(lengthOfLastWord(s)).toEqual(6);
  });
});
