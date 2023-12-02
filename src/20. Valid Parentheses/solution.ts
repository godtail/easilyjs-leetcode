// https://leetcode.cn/problems/valid-parentheses

export const isValid = (s: string): boolean => {
  // 括号对
  const brackets: { [key: string]: string } = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  // 存储括号栈
  const stack: string[] = [];

  for (let char of s) {
    // 如果是左括号入栈
    if (Object.keys(brackets).includes(char)) {
      stack.push(char);
    } else {
      // 如果是右括号，获取栈顶元素，如果栈顶元素不是对应的左括号，返回 false
      const lastBracket = stack.pop();
      if (!lastBracket || brackets[lastBracket] !== char) {
        return false;
      }
    }
  }

  // 如果解析完，栈中还有元素，返回 false
  if (stack.length > 0) {
    return false;
  }

  return true;
};
