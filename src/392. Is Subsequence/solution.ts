// https://leetcode.cn/problems/is-subsequence

export const isSubsequence = (s: string, t: string): boolean => {
  // 使用双指针
  let sp = 0;
  let tp = 0;

  while (sp < s.length && tp < t.length) {
    // 如果字符一致，s 指针后移
    if (s[sp] === t[tp]) {
      sp++;
    }
    tp++;
  }

  return sp === s.length;
};
