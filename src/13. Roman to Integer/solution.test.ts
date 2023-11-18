import { romanToInt } from './solution';

describe('13. Roman to Integer', () => {
  it('test case 1', () => {
    const s = 'III';
    expect(romanToInt(s)).toEqual(3);
  });

  it('test case 2', () => {
    const s = 'IV';
    expect(romanToInt(s)).toEqual(4);
  });

  it('test case 3', () => {
    const s = 'IX';
    expect(romanToInt(s)).toEqual(9);
  });

  it('test case 4', () => {
    const s = 'LVIII';
    expect(romanToInt(s)).toEqual(58);
  });

  it('test case 5', () => {
    const s = 'MCMXCIV';
    expect(romanToInt(s)).toEqual(1994);
  });
});
