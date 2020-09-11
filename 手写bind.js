Function.prototype.newBind = function(obj,arg){
  let _this = this;
  
  if(!(this instanceof Function)){
    throw new Error('it must be a Function to use it');
  }
  
  let newArg = Array.prototype.slice.call(arguments,1);
  
  let funBind = function(newArgu){
    newArgu = Array.prototype.slice.call(arguments);
    return _this.apply(this instanceof funBind ? this : obj,newArg.concat(newArgu));
  }

  funBind.prototype = this.prototype;

  return funBind;
}



// let a = {
//   a:'asd',
//   s:function(a,s,d,f,g,h,j){
//     console.log(a,s,d,f,g,h,j)
//   }
// }
// let b = {}
// a.s.newBind(b,1,2,3)(1,2,3)

var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}

bar.prototype.friend = 'kevin';

var bindFoo = bar.newBind(foo, 'daisy');
// bindFoo();

var obj = new bindFoo('18');
console.log(obj.habit);
console.log(obj.friend);
