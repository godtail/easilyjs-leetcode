// https://leetcode.cn/problems/ransom-note

export const canConstruct = (ransomNote: string, magazine: string): boolean => {
  // 使用哈希表记录每个字符出现的次数
  const ransomNoteMap = new Map<string, number>();
  const magazineMap = new Map<string, number>();
  for (const char of ransomNote) {
    ransomNoteMap.set(char, (ransomNoteMap.get(char) || 0) + 1);
  }
  for (const char of magazine) {
    magazineMap.set(char, (magazineMap.get(char) || 0) + 1);
  }

  // 遍历 ransomNoteMap，如果 magazineMap 中的字符数量小于 ransomNoteMap 中的字符数量，返回 false
  for (const [char, count] of ransomNoteMap.entries()) {
    if ((magazineMap.get(char) || 0) < count) {
      return false;
    }
  }

  return true;
};
