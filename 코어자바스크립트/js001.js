window.onload = function () {    
   //부분 적용함수 : n개의 인자를 받는 함수에 미리 m개의 인자만 넘겨기억시켰다가, 나중에 (n-m)개의 인자를  넘기면 비로소 원래함수의 실행 결과를 얻을수 있게끔 하는 함수이다.   
   //부분 적용함수 구현
   var partial = function()
   {
       var originalPartialArgs = arguments;
       var func = originalPartialArgs[0];
       if(typeof func != "function")
       {
           throw new Error("첫 번째 인자가 함수가 아닙니다.");
       }
       return function()
       {
           var partialArgs = Array.prototype.slice.call(originalPartialArgs,1);
           var restArgs = Array.prototype.slice.call(arguments);
           return func.apply(this, partialArgs.concat(restArgs));
       };
   };

   var add = function(){
    var result = 0;
    for(var i=0; i<arguments.length; i++)
    {
        result += arguments[i];
    }
    return result;
};
var addpartial = add.bind(add, 1,2,3,4,5);
console.log(addpartial(6,7,8,9,10));
    var dog = {
        name: "강아지", greet:partial(function(prefix, suffix)
        {
            return prefix + this.name + suffix;
        },"왈왈, ")
    };
    dog.greet("입니다!");
};
