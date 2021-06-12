window.onload = function () {    
   //함수 프로퍼티, 메서드 생성자 : 지금까지 살펴보았듯이 자바스크립트 프로그램에서 함수는 일종의 값이다. typeof 연산자를 함수에 사용하면 "function"문자열을 얻을수 있지만
   //함수는 정말 독특한 자바스크립트 객체다. 함수는 객체이기 때문에 프로퍼티와 메서드를 가질수 있다. 또한 Function()이라는 생성자도 갖고 있다. 이어지는 세부 항목에서는
   //함수의 프로퍼티와 메서드 ,Function()생성자에 대해 다룬다. 해당 내용은 레퍼런스에서도 읽을수 있다. 

   //length 프로퍼티 : 함수 몸체 내에서 arguments.length는 함수에 실제로 전달된 인자의 개수다. 그러나 함수 자체의 length 프로퍼티는 의미가 다르다. 이 읽기 전용 프로퍼티는
   //함수를 정의할 때 명시한 인자 개수(arity)를 반환하는데, 이는 매개변수 목록에 정의된 매개변수, 즉 형식인자(parameter)의 개수로서 보통 해당 함수가 요구하는 전달인자의
   //개수다. 다음 코드의 check()함수는 다른 함수의 arguments를 인자로 받는다. 그리고 arguments.length(실제로 전달된 인자의 개수)와 arguments.callee.length(요구 하는 
   //인자의 개수)를 비교하여 해당 함수에 올바른 개수의 인자가 전달되었는지를 판단한다. 만약 그렇지 않으면 예외를 발생시킨다. check()함수 다음에 나오는 테스트 함수 f()는
   //check()를 어떻게 사용하는지 보여준다. 

   //이 함수는 arguments.callee를 사용하고 따라서 엄격 모드에서는 작동하지 않는다. 
   function check(args)
   {
      var actual = args.length; //인자의 실제 개수
      var expected = args.callee.length; //인자의 요구 개수
      if(actual !== expected) //두 값이 다르면 예외 발생
         throw Error("Expected " + expected + "args; got " + actual);         
   }
   function f(x,y,z)
   {
      check(arguments); //실제 인자 개수가 요구 개수와 같은지 검사한다. 
      return x + y+ z;//함수의 나머지를 수행한다. 
   }

   //prototype 프로퍼티 : 모든 함수에는 prototype프로퍼티가 있는데 이 프로퍼티는 프로토타입 객체를 참조한다. 모든 함수는 서로 다른 프로토타입 객체를 가지고 있다. 함수가 생성
   //자로 사용될 때, 새로 생성된 객체는 함수의 프로토타입 객체로부터 프로퍼티들을 상속받는다. 

   //call()과 apply()메서드 : call()과 apply()는 어떤 함수를 다른 객체의 메서드인 것처럼 간접적으로 호출할수 있도록 한다. call()과 apply()의 첫번째 인자는 호출 되는 함수와
   //관련이 있는 객체다. 이 첫 번째 인자는 호출 컨텍스트고 함수 몸체에서 this키워드의 값이 된다. 함수 f()를 객체 o의 메서드로 호출(별도의 인자는 전달하지 않음)하려면 다음과
   //같이 call()또는 apply()를 사용하면 된다. 
   f.call(o);
   f.apply(o);
   //앞의 두 코드는 다음 코드와 비슷하다(o에는 이름이 m인 프로퍼티가 없다고 가정한다. )
   o.m = f; //f를 o의 임시 메서드로 만든다. 
   o.m(); //아무 인자 없이 호출
   delete o.m; //임시 메서드를 제거한다. 

   //ECMAScript5의 엄격모드에서 call()또는 apply()의 첫번째 인자는 함수 내에서 this의 값이 되는데 그 값이 원시 값이든 null이든 undefined든 상관없다. ECMAScript3이나 일반
   //모드에서는 null이나 undefined 값은 전역 객체로 바뀌고 원시값은 이에 상응하는 레퍼 객체로 바뀐다. call()의 첫 번째 호출 컨텍스트 다음에 있는 모든 인자는 호출되는 함수로
   //전달된다. 예를 들어 함수 f()로 두 숫자를 전달하고 이 함수를 객체 o의 메서드로 호출하려면 다음과같은 코드를 사용하면 된다. 
   f.call(o,1,2);
   //apply()메서드는 call()메서드와 비슷하지만 함수에 전달할 인자는 배열형태여야 한다. 
   f.apply(o,[1,2]);
   //만약 함수가 임의 개수의 인자를 받도록 정의되었다면 apply()메서드는 임의길이의 배열을 사용하여 해당 함수를 호출할수있다. 예를 들어 숫자들로 이루어진 배열에서 가장큰
   //숫자를 찾으려면 apply()메서드를 사용하여 배열의 각 요소를 math.max()에 전달할수 있다. 
   var biggest = Math.max.apply(Math,array_of_numbers);
   //apply()는 실제 배열과 마찬가지로 유사 배열 객체와도 잘 작동한다. 특히 arguments 배열을 직접 apply()에 넘김으로써 다른 함수를 호출할 때 현자 함수에 전달된 인자와 같은 
   //인자를 전달할수 있다 
   //객체 o의 메서드 m을 원본 메서드 호출 전후에 로그 메시지를 남기는 버전으로 교체한다. 
   function trace(o,m)
   {
      var original = o[m]; //원본 메서드를 클로저에 기억한다. 
      o[m] = function(){//이제 새 메서드를 정의한다. 
         console.log(new Date(), "Entering:", m); //메시지 로그
         var result = original.apply(this,arguments); //원본 메서드 호출
         console.log(new Date(), "Exiting:",m); //메시지 로그
         return result; //result를 반환한다 
      };
   }
   //이 trace()함수는 객체와 메서드 이름을 인자로 받는다. trace()함수는 지정된 메서드를 새로운 메서드로 교체하는데 새로운 메서드는 원본 메서드를 추가 기능으로 둘러싼다(wrap)
   //기존 메서드를 동적으로 수정하는 이런 방식은 보통 monkey-patching으로 알려져 있다. 
   
}