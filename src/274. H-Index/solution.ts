// https://leetcode.cn/problems/h-index

export const hIndex = (citations: number[]): number => {
  let h = 0;

  // 按照从小到大排序
  // JS 默认排序是将元素转换为字符串，然后按照它们的 UTF-16 码元值升序排序
  citations.sort((a, b) => a - b);

  // 找到分割线，在分割线右侧的数字需要大于右侧的数量，即为 h 指数
  // 0 1 | 3 5 6
  let i = citations.length - 1;
  while (i >= 0 && citations[i] > h) {
    h++;
    i--;
  }

  return h;
};
