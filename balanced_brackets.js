function balancedBrackets(string) {
    const stack = [];
    for (let char of string) {
      if (char === ')') {
        if (stack[stack.length - 1] !== '(') {
          return false;
        } else {
          stack.pop();
        }
      }
      if (char === ']') {
        if (stack[stack.length - 1] !== '[') {
          return false;
        } else {
          stack.pop();
        }
      }
      if (char === '}') {
        if (stack[stack.length - 1] !== '{') {
          return false;
        } else {
          stack.pop();
        }
      }
      if (char === '(' || char === "{" || char === "[") stack.push(char);
    }
    return stack.length === 0
  }
