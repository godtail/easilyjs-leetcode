// https://leetcode.cn/problems/word-pattern

export const wordPattern = (pattern: string, s: string): boolean => {
  // 分隔 words
  const words = s.split(' ');

  // 如果 pattern 和 s 的单词数量不一致，返回 false
  if (words.length !== pattern.length) {
    return false;
  }

  // 使用哈希表记录 pattern -> word, word -> pattern 的映射
  const char2word: Map<string, string> = new Map();
  const word2char: Map<string, string> = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    // 如果发现和之前的映射不一致，返回 false
    if (
      (char2word.get(char) && char2word.get(char) !== word) ||
      (word2char.get(word) && word2char.get(word) !== char)
    ) {
      return false;
    }

    // 设置映射
    char2word.set(char, word);
    word2char.set(word, char);
  }

  return true;
};
