window.onload = function () {    
   //자신만의 함수 프로퍼티 정의하기 : 자바스크립트에서 함수는 원시 값이 아니지만 특별한 종류의 객체이고 이는 함수가 프로퍼티를 가질 수 있음을 의미한다. 함수가

   //여러번 호출되어도 그값이 유지되어야 하는 정적 변수가 필요할 때는 전역변수를 선언해서 네임스페이스를 난잡하게 하기보다 함수의 프로퍼티를 사용하는 것이 편리한

   //경우가 많다. 예를 들어 호출될 때마다 유일한 정수 값을 반환하는 함수를 작성한다고 가정해보자. 이 함수는 같은 값을 두번 반환해서는 안된다. 이런 정보를 전역변수에

   //저장할 수도 있지만 부적합한 면이 있는데 왜냐하면 그 정보는 오직 해당 함수만사용하기 때문이다. 이러한 정보는 함수 객체의 프로퍼티에 저장하는 편이 더 낫다. 

   //다음은 호출될 때마다 유일한 값을 반환하는 예제다. 

   //함수 객체의 카운터 프로퍼티를 초기화한다. uniqueInteger 함수 정의는 끌어올려져 해석되기 때문에(hoisted)

   //실제 uniqueInteger 함수 정의문 앞에서 이렇게 먼저 할당을 할 수 있다. uniqueInteger.counter = 0;

  //네임스페이스로서의 함수 : 자바스크립트는 함수 단위의 유효 범위를 갖는다. 함수 내부에서 정의된 변수는 해당 함수 내부(중첩함수를 포함한)에서는 접근할수있지만

  //그 함수 바깥에는 존재할 수 없다. 함수 밖에서 정의된 변수는 전역 변수이고 자바스크립트 프로그램 전체에서 접근할 수 있다. 자바스크립트는 단일 코드 블록 내에서만

  //유효한 변수를 정의하는 방법을 제공하지 않기에 간단한 임시 네임스페이스처럼 작동하는 함수를 정의하는 기법은 전역 네임스페이스를 어지럽히지 않고도 변수를 정의할수

  //있어서 유용하게 사용되는 방법이다. 예를 들어 어떤 자바스크립트 모듈이 있고, 이 모듈을 다수의 다른 자바스크립트 프로그램(클라이언트 측 자바스크립트일 경우에는

  //다수의 다른 웹 페이지)에서 사용한다고 가정해보자 대다수 코드와 마찬가지로 이 코드는 계산의 중간 결과값을 저장하는 변수를 정의한다고 가정하자

  //문제는 이 모듈은 여러 프로그램에서 사용될 것이므로 모듈 안의 변수가 해당 모듈을 불러오는 프로그램의 변수와 충돌을 일으킬수 있다는 것이다. 물론 해결책은 모듈의

  //코드를 함수 내에 두고 그 함수를 호출하는 것이다. 이런 방식으로 변수들을 전역 변수로 취급하는 대신 그 함수의 지역 변수로 다룰 수 있다. 

  function mymodule()

  {

     //모듈 코드는 여기 위치한다.

     //모듈에서 사용하는 어떤 변수건 이 함수의 지역 변수다

     //따라서 전역 네임스페이스를 어지럽히지 않는다.      

  }

  mymodule(); //함수를 호출해야 하는 것을 잊지 말자!

  //이 코드는 이름이 mymodule인 단 하나의 전역변수만 정의한다. 하나의 프로퍼티(여기서는 함수)를 정의하는 것도 과하다면 익명 함수를 정의하고 호출하는 단일 표현식을

  //이용하는 방법도 있다. 

  (function(){ //이름이없는 표현식으로 mymodule함수를 재작성

      //모듈 코드는 여기 위치한다.

  }());//함수 리터럴을 끝내고 바로 호출함

  //이렇게 단일 표현식으로 함수를 정의하고 호출하는 방식은 관용적으로 자주 사용되는 기법이다. 앞 코드에서 중괄호 부분을 살펴보자. 함수 앞의 시작 괄호는 반드시 필요한대

  // 만약 시작 괄호가 없으면 자바스크립트 인터프리터는 function키워드를 함수 선언문으로 해석하기 때문이다. 괄호가 있으면 인터프리터는 이것을 표현식 형태의 함수 선언으로

  //올바르게 인식한다. 괄호가 꼭 필요하지 않은 상황에서도 정의하자마자 호출할 함수를 괄호로 둘러싸는 건 관용적인 방식이다. 

  //익명 함수의 코드는 인터넷 익스플로러의 잘 알려진 버그가 있는지 검사하고, 만약 버그가 있다면 패치된 함수를 반환한다. 또한 이 익명함수의 네임스페이스는 프로퍼티

  //이름 배열을 내부로 감추는 구실도 하고 있따. 




   //이 함수는 호출될 때마다 매번 다른 정수를 반환한다. 다음 반환 값을 기억하기 위해 자신의 프로퍼티를 사용한다.

   function uniqueInteger()

   {

      return uniqueInteger.counter++; //카운터 프로퍼티를 반환하고 증가 시킨다. 

   }

   //앞서 계산한 결과를 캐시하도록 자신의 프로퍼티를 사용(함수 자신을 배열처럼 다룬다)다음 factorial()함수를 살펴보자.

   //팩토리얼을 계산하고 계산 결과를 함수 자신의 프로퍼티에 캐시한다. 

   function factorial(n)

   {

      if(isFinite(n) && n > 0 && n ==Math.round(n)) //유한, 양의 정수만 받음

  //extend 함수를 정의한다. extend 함수는 두 번째 인자와 그 다음에 오는 인자들의 프로퍼티를 첫 번째 인자로 복사한다. 

  //여기서 IE의 버그에 대응하는데 만약 o의 프로토타입에 열거할 수 없는 프로퍼티가 있고 o에는 그 프로퍼티와 이름이 같은 프로퍼티가 열거 가능하다면

  //IE의 여러 버전에서 for/in 루프는 o의 열거 가능한 프로퍼티를 제대로 열거하지 못한다. 

  //즉 toString()과 같은 프로토타입에서 상속받은 프로퍼티는우리가 해당 프로퍼티를 명시적으로 검사하지 않는 한 제대로 처리될수 없다는 뜻이다. 

  var extend = (function(){ //이 함수의 반환값을 할당한다.

      //패치하기 전에 먼저 버그가 존재하는지를 검사한다. 
      if()
      {
      for(var p in {toString:null})
      {

         if(!(n in factorial))  
            factorial[n] = n * factorial(n-1); //팩터리얼을 계산하고 계산값 캐시
         return factorial[n];

      }  

      }else return NaN; //잘못된 입력 값이 들어오면 NaN을 반환한다.
   }

   

   factorial[1] = 1; //캐시를 기본 경우(1)에 대한 값으로 초기화 한다. 

         //여기에 이르면 for/in 루프가 제대로 작동한 것이고 extend()함수의 단순한 버전을 반환하면 된다. 

         return function extend(o)

         {

            for(var i=1; i<arguments.length; i++)

            {

               var source = arguments[i];

               for(var prop in source)o[prop] = source[prop];

            }

            return o;

         };

      }      

      //여기에 이르면 for/in 루프는 테스트 객체의 toString프로퍼티를 제대로 열거하지 못했다는 뜻이다. 따라서 Object.prototype의 열거할 수 없는 프로퍼티를

      //명시적으로 테스트하는 extent()함수를 반환한다. 

      return function patched_extend(o)

      {

         for(var i=1; i<arguments.length; i++)

         {

            var source = arguments[i];

            //열거 가능한 모든 프로퍼티를 복사한다

            for(var porp in source)o[prop] = source[prop];

            //그리고 이제 특별한 프로퍼티를 검사한다. 

            for(var j = 0; j<protoprops.length; j++)

            {

               prop = protoprops[j];

               if(source.hasOwnProperty(prop))o[prop] = source[prop];

            }

         }

         return o;

      };

      //이것은 검사해야 하는 특별한 프로퍼티의 목록이다. 

      var protoprops = ["toString", "valueOf", "constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable","toLocaleString"];

  });

};

