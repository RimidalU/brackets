module.exports = function check(str, bracketsConfig) {
    let dump = [];
    let result = str;
    
    let brConf = bracketsConfig.flat().join('');

    for ( let i = 0; i < brConf.length - 1; i = i + 2) {
      dump.push(brConf.slice(i, i + 2));
    }
    

    for (let i = 0; i < str.length - 1; ++i) {
        for (let j = 0; j < dump.length; ++j) {
            result = result.replace(dump[j], '');
        }
    }
    return (result === '') ? true : false;
}








// module.exports = function check(str, bracketsConfig) {
  
//       str = str.split('');
//       let dump = str.concat(bracketsConfig.flat(3));
//       let source = [];
//       const pass = ['(', '[', '{', ')', ']', '}', '|',];
//       console.log('ввод   ' + str + bracketsConfig);
//       // console.log(bracketsConfig);
//       console.log(dump);
      
//       for (let j = 0; j < dump.length; ++j){
//          let charDump = dump[j];
//          if (pass.includes(charDump)){
//           source.push(charDump);
//                  }else{
//                    continue;
//                  }
//   if (source.length === 0) return false;
//       };

//     console.log('source   ' + source);
      
//       const openBrackets = ['(', '[', '{', '|',];
 
//       const pairBrackets = {
//         [')']: '(',
//         [']']: '[',
//         ['}']: '{',
//         ['|']: '|',
//       };
//          let stack = [];
//           for (let i = 0; i < source.length; ++i){
//           let charSource = source[i];
         
//        if (openBrackets.includes(charSource)){
//             stack.push(charSource);
//           }else{
//            if(stack.length === 0 ){  /*&& (charSource !== '|') */
//            return false;
//          }
//         }
           
//          let topChar = stack[stack.length -1];
         
//          if (pairBrackets[charSource] === topChar){
//            stack.pop();
//             console.log('stack   ' + stack);      
//            // console.log(topChar);
//          }else{
//            return false;
//          }
//        }
  
//   return stack.length === 0;
// }