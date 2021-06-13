window.onload = function () {    
   //bind() 메서드 : bind()메서드는 ECMAScript5에 추가되었으나 ECMAScript3에서도 같은 기능을 쉽게 구현할수 있다. bind()라는 이름에서 알수 있듯이 bind()의 주요 목적은
   //함수와 객체를 서로 묶는 것이다. 함수 f의 bind()메서드는 새로운 함수를 반환한다. 반환된 새 함수를 (함수로)호출하면 원래 함수 f가 o의 메서드로 호출된다. 새로운 함수에
   //전달한 모든 인자는 원래 함수에도 전달된다. 
   function f(y) { return this.x + y;} //바인드되어야 하는 함수
   var o = {x:1}; //바인드될 객체
   var g = f.bind(o); //g(x)를 호출하면  o.f(x)가 호출된다.
   g(2); // 3

   //이런 식의 바인딩은 다음과 같은 코드를 통해서도 구현할수 있다. 
   //o의 메서드로서 f를 호출하는 함수를 반환한다. 인자 또한 모두 전달된다. 
   function bind(f, o)
   {
      if (f.bind)return f.bind(o); //bind 메서드가 있으면 사용한다 
      else return function() //그렇지 않으면 다음과 같은 식으로 바인딩한다. 
      {
         return f.apply(o, arguments);
      };
   }
   //ECMAScript5의 bind()메서드는 단지 함수를 객체에 바인딩하는 것보다 더 많은 일을 한다. bind()메서드는 파셜 애플리케이션(Partial Application)을 구현 하는데, bind()에
   //전달하는 인자 중 첫 번째 이후의 모든 인자는 this값과 함께 해당 함수의 인자로 바인딩된다. 파셜 애플리케이션은 함수 프로그래밍에서 일반적인 기법이고 때로는 커링(currying)
   //이라 부르기도 한다. 다음은 파셜 애플리케이션 구현을 위해 bind()메서드를 사용하는 예제다. 
   var sum = function(x, y) { return x + y;}; //두 인자의 합을 반환한다. 
   //sum과 비슷한 새 함수를 생성하지만 this값은 null로 바인딩되고 첫 번째 인자는 1로 바인딩된다. 새로운 함수는 단지 하나의 인자만 요구한다
   var succ = sum.bind(null,1);
   succ(2); //3 : x는 1에 바인딩되고  y인자로 2를 넘긴다. 
   function f(y, z){ return this.x + y + z;};//합계를 구하는 다른 함수 
   var g = f.bind({x:1},2); // this와 y를 바인딩한다. 
   g(3); //6 : this.x 는 1에 바인딩되고 y는2에 z는 3에 바인딩된다. 
   //ECMAScript3에서도 이렇게 this값을 바인딩할 수 있고 파셜 애플리케이션을 구현할수 있다. 

   if(!Function.prototype.bind){
      Function.prototype.bind = function(o /*, args */){
         //this와 인자 값을 변수에 저장함으로써 다음의 중첩 함수에서 사용할 수 있다. 
         var self = this, boundArgs = arguments;
         //bind()메서드의 반환 값은 함수다.
         return function(){
            //인자 목록을 작성하는데 첫 번째 이후의 인자부터 나머지 모든 인자를 이 함수에 전달한다. 
            var args = [], i;
            for(i=1; i<boundArgs.length; i++)args.push(boundArgs[i]);
            for(i=0; i<arguments.length; i++)args.push(arguments[i]);
            //인자들을 포함하여 o의 메서드로 self를 호출한다. 
            return self.apply(o, args);
         };
      };
   }
   //이 bind()메서드에 의해 반환되는 함수는 바깥쪽 함수에서 정의된 변수 self와 boundArgs를 사용하는 클로저이며 바깥쪽 함수가 안쪽 함수를 반환한 후 바깥 쪽 함수가 종료 되더라도
   //안쪽 함수를 호출할 수 있게 한다. ECMAScript5에 정의된 bind()메서드에는 몇 가지 특징이 있는데 이 특징은 앞에 나온 ECMAScript3용 코드로는 시물레이션할수없다. 첫째  실제
   //bind()메서드는 함수 객체를 length 프로퍼티와 함께 반환하는데 이 length프로퍼티는 바인딩된 함수에 정의되어 있는 인자 개수에서 바인딩된 인자의 수를 뺀 값이다(0보다 작지는
    //않다) 둘째 ECMAScript5의 bind()메서드는 함수 생성자에 대한 파셜 애플리케이션으로 사용될 수 있다. 만약 bind()에 의해 반환된 함수가 생성자로 사용되면 bind()에 전달했던
    //this는 무시되고 원본 함수가 생성자로 호출되며 이때 이미 바인딩된 인자들이 원본 함수 생성자에 전달된다. bind()메서드가 반환하는 함수에는 prototype프로퍼티가 없다( 일반
    //함수에 있는 prototype프로퍼티는 삭제될 수 없다)그리고 바인딩된 함수를 생성자로 사용하여 만든 객체는 원본 함수의 prototype을 상속받는다. 또한 바인딩된 생성자에 instanceof
    //연산자를 사용한 결과는 원본 함수에 instanceof연산자를 사용한 경우와 같다. 


    //toString()메서드 : 모든 자바스크립트 객체와 마찬가지로 함수도 toString()메서드를 가지고 있다. ECMAScript명세는 이 메서드가 함수 선언문 다음에 나오는 문자열을 반환하라고
    //요구한다. 실제로 대부분의(전부는 아니다)toString()메서드 구현체들은 함수의 전체 소스 코드를 반환한다. 내장 함수의 경우는 보통 함수 몸체로 [native code]와같은 내용의 문자열
    //을 반환한다. 

   
}