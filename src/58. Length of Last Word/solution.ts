// https://leetcode.cn/problems/length-of-last-word

export const lengthOfLastWord = (s: string): number => {
  let len = 0;

  // 去除左右的空格
  s = s.trim();

  for (let i = s.length - 1; i >= 0; i--) {
    // 如果碰到空格，说明单词结束，直接返回
    if (s[i] === ' ') {
      break;
    }
    len++;
  }

  return len;
};
