// https://leetcode.cn/problems/reverse-words-in-a-string

export const reverseWords = (s: string): string => {
  // 去除空格，按照空格分割，反转，再按照空格拼接
  return s.trim().split(/\s+/).reverse().join(' ');
};
