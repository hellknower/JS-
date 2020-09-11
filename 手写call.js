Function.prototype.newCall = function(obj,arg){
    let newArg = [];
    
    for(let i = 1;i < arguments.length;i++){
        newArg.push (' arguments[' + i + ']');  //相比于apply，可以直接使用arguments获取除第一位之外的参数
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
        console.log('a')
      console.log(a,s,d,c);
      console.log(arguments);
    }
  }
  let b = {};
  
  a.s.newCall(b);//asd