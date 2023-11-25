// https://leetcode.cn/problems/valid-anagram

export const isAnagram = (s: string, t: string): boolean => {
  // 如果长度不一致返回 false
  if (s.length !== t.length) {
    return false;
  }

  // 使用哈希表记录 s, t 字符出现的次数
  const sMap: Map<string, number> = new Map();
  const tMap: Map<string, number> = new Map();
  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
    tMap.set(t[i], (tMap.get(t[i]) || 0) + 1);
  }

  // 判断 s, t 字符出现的次数是否一致
  for (const [key, value] of sMap) {
    if (tMap.get(key) !== value) {
      return false;
    }
  }

  return true;
};
