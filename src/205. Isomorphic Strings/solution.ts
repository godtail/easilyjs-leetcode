// https://leetcode.cn/problems/isomorphic-strings

export const isIsomorphic = (s: string, t: string): boolean => {
  // 使用哈希表记录 s -> t, t -> s 的映射
  const s2t: Map<string, string> = new Map();
  const t2s: Map<string, string> = new Map();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    // 如果发现和之前的映射不一致，返回 false
    if ((s2t.has(sChar) && s2t.get(sChar) !== tChar) || (t2s.has(tChar) && t2s.get(tChar) !== sChar)) {
      return false;
    }

    // 记录映射
    s2t.set(sChar, tChar);
    t2s.set(tChar, sChar);
  }

  return true;
};
