// https://leetcode.cn/problems/integer-to-roman

export const intToRoman = (num: number): string => {
  let roman = '';

  // 记录罗马字符值和片段
  const romanPieces: [number, string][] = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  for (let [value, piece] of romanPieces) {
    // 如果当前值大于等于片段值，那么就需要添加片段
    while (num >= value) {
      roman += piece;
      num -= value;
    }
    if (num === 0) {
      break;
    }
  }

  return roman;
};
