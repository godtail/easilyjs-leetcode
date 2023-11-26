// https://leetcode.cn/problems/group-anagrams

export const groupAnagrams = (strs: string[]): string[][] => {
  // 把 26 个字母计数一致的，放到同一组
  const map = new Map<string, string[]>();

  for (const str of strs) {
    const count = new Array(26).fill(0);
    for (const char of str) {
      // 获取当前字符的 index，并计数
      const index = char.charCodeAt(0) - 'a'.charCodeAt(0);
      count[index]++;
    }
    // 这里转化为基本数据类型，否则 map 会当成不同的 key
    const mapKey = count.join(',');
    map.set(mapKey, [...(map.get(mapKey) || []), str]);
  }

  // 返回对应的分组
  return [...map.values()];
};
