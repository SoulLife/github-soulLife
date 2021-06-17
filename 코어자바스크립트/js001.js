window.onload = function () {    
   //메모이제이션 : 함수형 프로그래밍에서는 이러한 캐싱 방식을 메모이제이션(memoization)이라고 부른다. 다음 코드는 고차함수 memoize()이며 이 함수는 인자로 함수를 받아들이고
   //그 함수에 메모이제이션을 적용한 새로운 함수를 반환한다. 
   //함수 f의 결과를 저장한 버전을 반환한다. 함수 f의 모든 인자가 서로 구분할수 있는 문자열 표현일 때만 작동한다. 
   function memoize(f)
   {
      var cache = {}; //결과값을 캐시하는 클로저 상의 객체

      return function(){
         //캐시키로 사용하기 위해 인자들을 조합하여 하나의 문자열로 만든다. 
         var key = arguments.length + Array.prototype.join.call(arguments, ",");
         if(key in cache)return cache[key];
         else return cache[key] = f.apply(this,arguments);
      };
   }
   //memoize()함수는 캐시 값을 저장하는데 사용할 새 객체를 생성하고, memoize()의 지역변수에 이 객체를 할당한다. 따라서 이 객체는 반환되는 함수의 내부(클로저)에만 존재한다. 
   //반환된 함수는 인자들을 문자열로 변환하고 그 문자열을 캐시 객체의 프로퍼티 이름으로 사용한다. 만약 캐시에 값이 있다면 그 값을 바로 반환한다. 만약 캐시된 값이 없으면
   //지정된 함수를 호출하고 결과 값을 캐시한 다음 해당 함수를 반환한다. 어떻게 memoize()를 사용하는지 보라 
   //유클리디안 알고리즘(http://en.wikipedia.org/wiki/Euclidean_algorithm)을 사용하여 두 정수의 최대 공약수를 반환한다. 
   function gcd(a,b) //a와 b에 대한 형식 검사는 생략함
   {
      var t; //값을 바꾸기 위한 임시 변수
      if( a < b)t = b,b = a, a = t; // a >= b임을 보장함
      while(b != 0)t = b, b = a%b, a = t; //최대 공약수에 대한 유클리드 알고리즘
      return a;
   }
   var gcdmemo = memoize(gcd);
   gcdmemo(85,187); //17
   //계산 결과를 저장하는 재귀함수를 작성한다면 일반적으로 원본 함수를 재귀호출하기 보다는 결과가 저장된 버전을 재귀 호출하기를 바랄 것이다. 
   var factorial = memoize(function(n){
      return (n <=1)? 1 : n * (factorial(n-1));
   });
   factorial(5); //반환 값은 120또한 4,3,2,1에 대한 결과도 캐시된다. 
}