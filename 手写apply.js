Function.prototype.newApply = function(obj,arg){
  let newArg = [];
  if(arg !== undefined){
    if(!Array.isArray(arg) ){
        throw new Error('it must be an Array');
    }
    for(let i = 0;i < arg.length;i++){
        newArg.push (' arg[' + i + ']');
    }
  }

  obj = obj || window;
  
  obj.attr = Symbol();

  obj.attr = this;
  
  let result = eval('obj.attr('+newArg+')')
  
  delete obj.attr;

  return result;
}



let a = {
  a:'asd',
  s:function(a,s,d,c){
    console.log('a');
    console.log(arguments);
  }
}
let b = {};

a.s.newApply(b);