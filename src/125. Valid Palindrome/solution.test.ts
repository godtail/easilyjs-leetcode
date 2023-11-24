import { isPalindrome } from './solution';

describe('125. Valid Palindrome', () => {
  it('test case 1', () => {
    const s = 'A man, a plan, a canal: Panama';
    expect(isPalindrome(s)).toEqual(true);
  });

  it('test case 2', () => {
    const s = 'race a car';
    expect(isPalindrome(s)).toEqual(false);
  });

  it('test case 2', () => {
    const s = ' ';
    expect(isPalindrome(s)).toEqual(true);
  });
});
