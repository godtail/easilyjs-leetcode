// https://leetcode.cn/problems/find-the-index-of-the-first-occurrence-in-a-string

export const strStr = (haystack: string, needle: string): number => {
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    // 如果找到了子串，直接返回
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
};
