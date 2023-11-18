import { reverseWords } from './solution';

describe('151. Reverse Words in a String', () => {
  it('test case 1', () => {
    const s = 'the sky is blue';
    expect(reverseWords(s)).toEqual('blue is sky the');
  });

  it('test case 2', () => {
    const s = '  hello world  ';
    expect(reverseWords(s)).toEqual('world hello');
  });

  it('test case 3', () => {
    const s = 'a good   example';
    expect(reverseWords(s)).toEqual('example good a');
  });
});
