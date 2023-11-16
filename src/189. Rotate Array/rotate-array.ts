// https://leetcode.cn/problems/rotate-array

// 计算 x, y 的最大公约数
const gcd = (x: number, y: number): number => (y ? gcd(y, x % y) : x);

export const rotateArray = (nums: number[], k: number): void => {
  const count = gcd(k % nums.length, nums.length);

  // 为了防止元素被跳过，需要循环的次数为他们的最大公约数
  for (let start = 0; start < count; start++) {
    let current = start;
    // 为了防止被覆盖，需要保留上一次的值
    let prev = nums[start];
    // 每次赋值一下次的元素，直到回到起点
    do {
      const next = (current + k) % nums.length;
      const temp = nums[next];
      nums[next] = prev;
      prev = temp;
      current = next;
    } while (current !== start);
  }
};
