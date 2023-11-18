// https://leetcode.cn/problems/gas-station

export const canCompleteCircuit = (gas: number[], cost: number[]): number => {
  // 这里可以使用贪心算法，如果剩余总油量大于 0，说明有解，如果当前油量最低，一定是最后一站
  // 记录总油量，最大差异油量和起点位置
  let sumGas = 0;
  let minSumGas = Infinity;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    sumGas += gas[i] - cost[i];
    if (sumGas <= minSumGas) {
      minSumGas = sumGas;
      start = (i + 1) % gas.length;
    }
  }

  // 需要取模，可能会溢出
  return sumGas < 0 ? -1 : start;
};
