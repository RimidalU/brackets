module.exports = function check(str, bracketsConfig) {
  
      str = str.split('');
      let dump = str.concat(bracketsConfig.flat(10));
      let source = [];
      const pass = ['(', '[', '{',')', ']', '}',];
      console.log(str);
      console.log(bracketsConfig);
      console.log(dump);
      
      for (let j = 0; j < dump.length; j = j + 1){
         let charDump = dump[j];
         if (pass.includes(charDump)){
          source.push(charDump);
                 }else{
                   continue;
                 }
  if (source.length === 0) return false;
      };

    
      
      console.log(source);
      
      const openBrackets = ['(', '[', '{', '|',];
 
      const pairBrackets = {
        [')']: '(',
        [']']: '[',
        ['}']: '{',
        ['|']: '|',
      };
         let stack = [];
          for (let i = 0; i < source.length; i = i + 1){
          let charSource = source[i];
         
       if (openBrackets.includes(charSource)){
            stack.push(charSource);
       }else{
         if(stack.length === 0){
           return false;
         }
        
         
         let topChar = stack[stack.length-1];
         
         if (pairBrackets[charSource] === topChar){
           stack.pop();
           console.log(topChar);
         }else{
           return false;
         }
       }
  }
  return stack.length ===0;
}

