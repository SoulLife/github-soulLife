window.onload = function () {    
   //함수로 배열 처리하기 : 숫자로 이루어진 배열이 있다고 가정하고, 이 배열에 있는 값들의 평균과 표준 편차를 구한다고 하자, 비-함수형 프로그래밍 스타일에서는 다음과 같은 식으로
   //코드를 작성할 것이다.
   var data = [1,1,3,5,5]; //숫자 배열
   //mean은 배열 요소의 합을 배열 요소의 개수로 나눈 값이다.
   var total = 0;
   for(var i=0; i<data.length; i++) total += data[i];
   var mean = total / data.length; //mean값은 3

   //표준 편차를 계산하기 위해 먼저 각 요소의 편차에 대한 제곱을 모두 더한다. 
   total = 0;
   for(var i=0; i<data.length; i++)
   {
      var deviation = data[i] - mean;
      total += deviation * deviation;
   }
   var stddev = Math.sqrt(total/(data.length-1)); //표준 편차는 2이다.
   //배열 객체의 map()메서드와 reduce()메서드를 사용하면 함수형 스타일로 이와 같은 계산을 간단히 처리할수 있다.
   //먼저 간단한 두 함수를 정의한다.
   var sum = function(x,y) { return x + y;};
   var square = function(x) { return x * x;};
   //평균과 표준편차를 구하고자 Array의 메서드(map, reduce)에 앞에서 정의한 두 함수를 적용한다. 
   var data = [1,1,3,5,5];
   var mean = data.reduce(sum)/data.length;
   var deviations = data.map(function(x) { return x -mean;});
   var stddev = Math.sqrt(deviations.map(square).reduce(sum)/(data.length-1));
   //map()과 reduce()같은 메서드는 ECMAScript5에서 소개된 메서드이고 만약 여러분이 ECMAScript3을 사용하고 있기 때문에 이러한 새로운 메서드들을 사용할수 없다면 어떻게
   //해야 할까? 이를 위해 다음과같이 별도의 map()과 reduce()를 정의할수 있는데 이미 내장 메서드가 있다면 map()과 reduce()는 별도로 구현한 것을 사용하지 않고 내장 메서드를
   //사용한다. 
   //배열 a의 각 요소에 대해 함수 f를 호출하고 results 배열을 반환한다. 만약 Array.prototype.map이 이미 정의되어 있다면 그것을 사용한다. 
   var map = Array.prototype.map? function(a, f){ return a.map(f);} //map메서드가 존재한다면 그것을 사용한다. 
   :function(a,f){//존재하지 않으면 별도로 구현한다. 
      var results = [];
      for(var i=0, len=a.length; i<len; i++)
      {
         if(i in a)results[i] = f.call(null,a[i],i,a);
      }
      return results;
   };
   //함수 f와 초기값 인자를 사용하여 배열a를 단일 값으로 만든다.(Reduce) 만약 Array.prototype.reduce가 이미 정의되어 있다면 그것을 사용한다. 
   var reduce = Array.prototype.reduce? function(a,f,initial){ //만약 reduce()메서드가 있다면
      if(arguments.length > 2)
         return a.reduce(f,initial); //초기값이 전달되었다면.
      else return a.reduce(f);//초기값이 없음      
   }
   : function(a,f,initial){ //ECMAScript5 명세에 따라 구현
         var i=0, len = a.length,accumulator;
         //지정된 초기값이나 a의 첫 번째 값으로 시작한다. 
         if(arguments.length > 2)accumulator = initial;
         else{ //배열에서 첫번째 인덱스를 찾는다.
            if(len ==0)throw TypeError();
            while(i < len)
            {
               if(i in a)
               {
                  accumulator = a[i++];
                  break;
               }
               else i++;
            }
            if(i == len)throw TypeError();
         }
         //배열의 나머지 요소들에 대해 f를 호출한다
         while(i < len)
         {
            if(i in a)
               accumulator = f.call(undefined,accumulator,a[i],i,a);
            i++;
         }
         return accumulator;
   };
   //앞에서 정의한 map()과 reduce()함수를 사용하여 평균과 표준편차를 계산하는 코드를 다음과같이 작성할수 있다.
   var data = [1,1,3,5,5];
   var sum = function(x,y){ return x + y;};
   var square = function(x) { return x * x;};
   var mean = reduce(data,sum)/data.length;
   var deviations = map(data, function(x) { return x-mean;});
   var stddev = Math.sqrt(reduce(map(deviations,square),sum)/(data.length-1));

   //고차함수 : 고차함수(higher-order function)는 하나 이상의 함수를 인자로 받고, 새 함수를 반환하는 함수다. 
   //이 고차 함수는 자신의 인자를f에 전달하고 f의 반환값에 대해 논리적 부정을 계산하는 함수를 반환한다. 
   function not(f)
   {
      return function() { //새로운 함수를 반환한다.
         var result = f.apply(this,arguments); //f 호출
         return !result; //결과 값을 부정
      };
   }
   var even = function(x){ //짝수 여부를 판단하는 함수
      return x % 2 === 0;
   };
   var odd = not(even); //논리적 부정을 수행하는 함수 odd
   [1,1,3,5,5].every(odd); //true : 모든 배열 요소는 홀수다. 
   //앞에 나온 not()함수는 고차 함수인대 이는 not()함수가 함수를 인자로 받고 새로 생성한 함수를 반환하기 때문이다. 다른 예로 다음 mapper()함수를 살펴보자 mapper()함수 또한
   //함수를 인자로 받고 전달받은 함수를 사용하여 하나의 배열을 다른 배열에 매핑하는 함수를 반환한다. 이 함수는 앞에서 정의한 map()함수를 사용하는데 mapper()와 map()두 함수가
   //어떻게 다른지 이해하는 것이 중요하다.
   
   //배열을 인자로 받고 ,각 배열 요소에 대해 함수 f를 적용한다. 그리고 이 적용 결과에 대한 배열을 반환하는 함수를 반환한다. 앞에서 다룬map()함수와 비교해보라
   function mapper(f)
   {
      return function(a) { return map(a,f);};
   }
   var increment = function(x) { return x + 1;};
   var incrementer = mapper(increment);
   incrementer([1,2,3]); //[2,3,4]
   //여기 좀더 일반적인 예제가 있다 이 예제는 이인자로 두 함수 f와 g를 받아서 f(g())를 계산하는 함수를 반환한다. 
   //f(g(...))를 계산하는 새로운 함수를 반환한다. 반환되는 함수 h는 모든 전달인자를 g로 전달하고 g의 결과 값을 f에 전달한다. 그리고 f의 결과 값을 반환한다. 
   //f와 g 모두같은 this 값을 사용하여 호출되는데 이 this 값은 h가 호출될 때의this값과 같은 것이다.
   function compose(f,g)
   {
      return function()
      {
         //f는 하나의 값만 넘기기 때문에 call을 사용하고 g에는 값 배열을 넘겨야 하기 때문에 apply를 사용한다. 
         return f.call(this,g.apply(this,arguments));
      };
   }
   var square = function(x) { return x * x;};
   var sum = function(x,y) { return x + y;};
   var squareofsum = compose(square,sum);
   squareofsum(2,3);
   //다음 항목에서 다룰 partial()함수와 mmemoize()함수는 좀더 중요한 고차함수들이다. 
}