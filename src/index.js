module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let sameInd;
  
  for(let i = 0; i < str.length; i ++ ) {
    for(let j = 0; j < bracketsConfig.length; j++ ) {
      if(str[i] === bracketsConfig[j][0])
        stack.push(str[i]);
      if((str[i] === bracketsConfig[j][1]) && (stack[stack.length-1] === bracketsConfig[j][0]))
        stack.pop();
    }
  }
  return stack.length === 0;
}
