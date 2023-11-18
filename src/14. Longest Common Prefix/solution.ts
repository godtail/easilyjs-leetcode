// https://leetcode.cn/problems/longest-common-prefix

export const longestCommonPrefix = (strs: string[]): string => {
  let i = 0;

  while (true) {
    // 如果超出长度，或者和第一个字符串不相等，直接返回
    if (strs.some((str) => i >= str.length || str[i] !== strs[0][i])) {
      break;
    }
    i++;
  }

  return strs[0].slice(0, i);
};
