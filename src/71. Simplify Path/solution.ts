// https://leetcode.cn/problems/simplify-path

export const simplifyPath = (path: string): string => {
  // 先把 path 按照 / 分割成数组
  const pathItems = path.split('/');

  // 记录简化后的 path 栈
  const simplifyPathStack: string[] = [];

  // 解析 path 数组
  for (const pathItem of pathItems) {
    switch (pathItem) {
      case '':
      case '.':
        break;
      case '..':
        // 把上一个 path 弹出
        simplifyPathStack.pop();
        break;
      default:
        // 其他元素直接入栈
        simplifyPathStack.push(pathItem);
        break;
    }
  }

  // 添加根目录前缀和 path 之间的 /
  return `/${simplifyPathStack.join('/')}`;
};
