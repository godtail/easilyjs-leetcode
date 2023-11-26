// https://leetcode.cn/problems/happy-number

// 计算下一个数字
const calculateNext = (n: number) => {
  let sum = 0;

  while (n > 0) {
    // 获取当前数字
    const num = n % 10;
    sum += num * num;
    // 往后移动一位
    n = Math.floor(n / 10);
  }

  return sum;
};

export const isHappy = (n: number): boolean => {
  // 通过快乐数的计算算法，只会出现两种情况
  // 1. 最后的计算结果为 1
  // 2. 最后计算结果进入循环
  // 所以我们可以使用一个 set 来记录计算过的值，如果再次出现，说明进入了循环
  const existSet = new Set<number>();

  while (n !== 1 && !existSet.has(n)) {
    existSet.add(n);
    n = calculateNext(n);
  }

  return n === 1;
};
