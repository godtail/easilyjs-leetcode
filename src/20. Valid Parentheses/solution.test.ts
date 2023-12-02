import { isValid } from './solution';

describe('20. Valid Parentheses', () => {
  it('test case 1', () => {
    const s = '()';
    const result = true;
    expect(isValid(s)).toEqual(result);
  });

  it('test case 2', () => {
    const s = '()[]{}';
    const result = true;
    expect(isValid(s)).toEqual(result);
  });

  it('test case 3', () => {
    const s = '(]';
    const result = false;
    expect(isValid(s)).toEqual(result);
  });
});
