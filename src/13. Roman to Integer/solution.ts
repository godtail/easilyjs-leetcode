// https://leetcode.cn/problems/roman-to-integer

export const romanToInt = (s: string): number => {
  const romanMapping: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    // 如果当前的数字比之前的小，那么是 IX 这样的情况，需要减去当前的值
    if (i !== s.length - 1 && romanMapping[s[i]] < romanMapping[s[i + 1]]) {
      sum -= romanMapping[s[i]];
    } else {
      sum += romanMapping[s[i]];
    }
  }

  return sum;
};
