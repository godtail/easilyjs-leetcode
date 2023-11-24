// https://leetcode.cn/problems/longest-substring-without-repeating-characters

export const lengthOfLongestSubstring = (s: string): number => {
  let lengthOfLongestSubstring = 0;

  // 使用滑动窗口
  let start = 0;
  let end = 0;
  let chars: Set<string> = new Set();

  while (end < s.length) {
    // 如果当前字符已经存在，需要一直缩小窗口，直到当前字符不存在
    while (chars.has(s[end])) {
      chars.delete(s[start]);
      start++;
    }
    // 更新 lengthOfLongestSubstring
    lengthOfLongestSubstring = Math.max(lengthOfLongestSubstring, end - start + 1);
    // 扩大窗口
    chars.add(s[end]);
    end++;
  }

  return lengthOfLongestSubstring;
};
