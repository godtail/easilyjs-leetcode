import { intToRoman } from './solution';

describe('12. Integer to Roman', () => {
  it('test case 1', () => {
    const num = 3;
    expect(intToRoman(num)).toEqual('III');
  });

  it('test case 2', () => {
    const num = 58;
    expect(intToRoman(num)).toEqual('LVIII');
  });

  it('test case 3', () => {
    const num = 1994;
    expect(intToRoman(num)).toEqual('MCMXCIV');
  });
});
