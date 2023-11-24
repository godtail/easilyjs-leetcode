// https://leetcode.cn/problems/valid-palindrome

export const isPalindrome = (s: string): boolean => {
  // 去除非字母数字的字符
  const sLetters = s.replace(/[^a-zA-Z0-9]/g, '');

  // 使用双指针
  let left = 0;
  let right = sLetters.length - 1;

  while (left < right) {
    if (sLetters[left].toLowerCase() !== sLetters[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }

  return true;
};
