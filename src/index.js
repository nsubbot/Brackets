module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let sameInd;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if(bracketsConfig[j][0] === bracketsConfig[j][1] && bracketsConfig[j][1] === str[i]) {
        if(str[i] === stack[stack.length - 1]) {
          stack.pop();
        } else
          stack.push(str[i]);
      } else {
        if (str[i] === bracketsConfig[j][0])
          stack.push(str[i]);
        if ((str[i] === bracketsConfig[j][1]) && (stack[stack.length - 1] === bracketsConfig[j][0]))
          stack.pop();
      }
    }
  }
  return stack.length === 0;
}
