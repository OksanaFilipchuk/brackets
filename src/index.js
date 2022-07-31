module.exports = function check(str, bracketsConfig){
  let obj = {};
  bracketsConfig.forEach(elem =>{
  obj[elem[0]] = elem[1]
})

  let stack = [];
  [...str].forEach((elemStr,index) => {
    
      let isOpen = false;
    bracketsConfig.forEach(elem => {
      if (elemStr ===elem[0]){
        isOpen = isOpen || true;
      }     
    })
    let isClose = false;
    bracketsConfig.forEach(elem => {
      if (elemStr === elem[1]){
        isClose = isClose || true;
      }     
    })

    if(isOpen && !isClose){
      stack.push(elemStr);      
    } else 
    if((isClose && !isOpen && stack.length!=0)){        
        let stackLastElem = stack[stack.length-1];
        if(obj[stackLastElem] === elemStr){
          stack.pop() 
        }               
    }else
    if(isOpen && isClose){          
          let stackLastElem = stack[stack.length-1];          
          if(obj[stackLastElem] === elemStr){
          stack.pop();
          } else {
            stack.push(elemStr);
          }     
      
    } else {
    stack.push(elemStr);
      } 
    
  })
return stack.length === 0
}
