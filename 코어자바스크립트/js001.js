window.onload = function () {    
   //클로저는 함수의 지역 변수를 포착하고, 이 변수들을 내부상태로 사용할수있다. uniqueInteger()함수가 클로저를 사용하도록 어떻게 코드를 재작성 할수 있는지 살펴보자
   var uniqueInteger = (function(){
      //함수를 정의하고 바로 호출한다. 
      var count = 0; //아래 함수의 내부상태
      return function(){ return count++;};
   }());
   //이 코드를 이해하려면 코드를 주의깊게 살펴봐야 한다 처음 보면 코드의 첫줄은 함수를 uniqueInteger 변수에 할당하는 것처럼 보인다. 사실 그 코드는 함수를 정의하고
   //호출하는 것이며(첫 줄의 시작 괄호 옆에 있는 주석에서 알수있듯이)함수의 반환결과가 uniqueInteger 변수에 할당된다. 이제 함수의 본물을 살펴보면 함수의 반환 값은 
   //또다른 함수임을 알수있다. 중첩 함수는 유효범위에 있는 변수에 접근하고 바깥쪽 함수에 정의된 counter 변수를 사용할수 있다. 바깥쪽 함수의 실행이 끝나면 어떤 코드도
   //counter 변수를 볼수 없다. 오직 안쪽 함수만 단독으로 counter 변수에 접근할수 있을 뿐이다. counter 와 같은 내부 변수는 여러 클로저가 공유할수 있다. 즉 같은 함수
   //안에 정의된 중첩 함수들은 같은 유효범위 체인을 공유한다.
   function counter(){
      var n = 0;
      return {
         count: function(){ return n++;},
         reset: function() { n = 0;}
      };
   }
   var c = counter(),d = counter(); //두 개의 카운터를 생성한다. 
   c.count(); // 0
   d.count(); // 0: 이둘은 서로 독립적이다
   c.reset(); //reset()메서드와 count()메서드는 상태를 공유한다
   c.count(); //0 : c를 리셋했기 때문
   d.count(); //1 : d는 리셋되지 않음
   //counter()함수는 카운터 객체를 반환한다. 이 객체는 두 메서드를 가지고 있는데 count()는 그 다음에 올 정수를 반환하고 reset()은 내부 상태를 재설정한다. 먼저 이해해야
   //할 것은 이 두메서드가 private variable 즉 내부 변수 n을 공유한다는 것이다. 그 다음 이해해야 할 것은 counter()를 호출할 때마다 새로운 유효범위 체인과 새로운 내부
   //변수가 생성된다는 점이다. 따라서 counter()를 두번 호출하면 서로 다른 내부 변수를 가진 두 개의 counter객체를 얻는다. 한 카운터 객체에 count()나 reset()을 호출하는 것은
   //다른 카운터 객체에는 아무 영향을 주지 않는다. 클로저 기법과 getter/setter 프로퍼티를 결합할수있다는 사실은 주목할 가치가 있다. 다음에 나오는 counter()함수는 내부
   //상태를 다루는 데 일반 객체 프로퍼티 대신 클로저를 사용한다. 
   function counter(n){ //함수 전달인자 n은 내부변수이다. 
      return {
         //getter 메서드 프로퍼티는 counter 변수를 반환하고 증가시킨다. 
         get count() { return n++;},
         //setter 프로퍼티는n 값을 감소시키는 것을 허용하지 않는다. 
         set count(m)
         {
            if (m >= n) n = m;
            else throw new Error("count는 오직 더 큰 값으로만 설정될 수 있습니다.");
         }
      };
   }
   var c = counter(1000);
   c.count; // 1000
   c.count; // 1001
   c.count = 2000;
   c.count; // 2000
   c.count = 2000; //에러
   //이버전의 counter()함수는 지역변수를 정의하지 않지만 프로퍼티 접근 메서드들이 공유하는 내부 상태를 보관하기 위해 매개변수 n을 사용한다. 이로써 counter()를 호출하는 
   //쪽에서 내부 변수의 초기값을 지정할수 있다. 지금까지 살펴본 클로저 기법을 사용하여 내부 상태를 공유하는 기법을 일반화한 것이다. 이 예제는 addPrivateProperty()함수를
   //정의하는데 이 함수는 하나의 내부 변수와 그 변수를 얻고 설정하는 두 중첩 함수를 정의한다. 그리고 두 중첩 함수를특정 객체의 메서드로 추가한다. 
   //이 함수는 프로퍼티 접근 메서드를 객체 o의 프로퍼티에 특정 이름으로 추가한다. 메서드 이름은 get<name>과 set<name>이 된다. 만약 단정(predicate)함수가 제공되면
   //setter 메서드는 전달된 인자를 저장하기 전에 인자 유효성을 테스트하기 위해 단정 함수를 사용한다. 만약 단정 함수가 false를 반환하면 setter메서드는 예외를 발생시킨다.

   //주의할것은getter/setter 메서드가 제어하고 있는 프로퍼티 값이 객체 o에 저장되지 않는 것이다. 대신 그 값은 오직 이함수의 지역변수(value)로만 저장된다. 또한 
   //getter/setter 메서드는 이 함수 내부에 지역적으로 정의되기 때문에 이 함수의 지역변수에 접근할수 있다. 다시 말해 value 변수는 두 접근 메서드 전용이고 setter 메서드를
   //통하지 않고서는 설정되거나 수정될 수 없다는 뜻이다. 
   function addPrivateProperty(o, name, predicate)
   {
      var value; //이것은 프로퍼티 값이다
      //getter 메서드는 단순히 value를 반환한다. 
      o["get" + name] = function(){ return value;};
      //setter 메서드는 value를 저장하거나 단정 함수가 값을 적합하지 않다고 판단하면 예외를 발생시킨다. 
      o["set" + name] = function(v)
      {
         if(predicate && !predicate(v))
            throw new Error("set" + name + " :유효하지 않은 값" + v);
         else
            value = v;
      };
   }
   //다음 코드는 addPrivateProperty()메서드를 사용하는 방법을 보여준다.
   var o = {}; //빈 객체
   //프로퍼티 접근 메서드 getName과 setName()을 추가한다. 문자열 값만 설정 가능하도록 조치한다. 
   addPrivateProperty(o,"Name",function(x){ return typeof x == "string";});
   o.setName("Frank"); //프로퍼티 값을 설정한다
   console.log(o.getName); //프로퍼티 값을 얻는다. 
   o.setName(0); //엉뚱한 자료형의 값을 설정해본다.
   //지금까지 같은 유효범위 체인에 정의된 두 클로저가 같은 내부 변수에 대한 접근을 공유하는 몇 가지 예제를 살펴보았다. 이는 중요한 기법이지만 이와 마찬가지로 클로저들이
   //공유해서는 안되는 변수를 공유하는 실수를 발견하는 것또한 중요하다. 
   //이 함수는 항상 v를 반환하는 함수를 반환한다. 
   function constfunc(v) { return function() { return v;}};
   //상수 함수에 대한 배열을생성한다
   var funcs = [];
   for(var i = 0; i<10; i++)funcs[i] = constfunc(i);
   //배열 요소 5의 함수는 값 5를 반환한다. 
   funcs[5](); // 5
   //이렇게 루프를 사용하여 여러 개의 클로저를 생성하는 코드를 사용할 때 클로저를 정의하는 함수내에서 루프를 이동하는 것은 흔히 볼수 있는 실수다. 다른 예로 다음코드를 보자
   //0-9값을 반환하는 함수들의 배열을 반환한다. 
   function constfuncs()
   {
      var funcs = [];
      for(var i=0; i<10; i++)
         funcs[i] = function(){ return i;};
      return funcs;
   }
   var funcs = constfunc();
   funcs[5]() //무엇이 반환될까
   //앞의 코드는 열 개의 클로저를 생성하고 생성한 클로저들을 배열에 저장한다. 모든 클로저는 같은 함수 호출 내에서 정의되고 따라서 클로저들은 변수 i에 대한 접근을 공유한다.
   //constfuncs() 실행이 끝나면 변수 i의 값은 10이고 열 개의 클로저 모두 이 값을 공유한다. 따라서 반환된 배열에 있는 모든 함수들은 같은 값을 반환하는데, 이건 우리가 전혀
   //원하지 않은 값이다. 클로저와 연관된 유효범위 체인이 살아 있다는 사실을 기억해야 한다. 중첩 함수는 유효범위에 대한 내부 사본이나 변수 바인딩의 스냅샷 따위는 만들지
   //않는다. 클로저를 작성할 때 기억해야 할 또 다른 사항은 this는 자바스크립트 키워드이지 변수가 아니라는 점이다. 앞서 논의한 것처럼 모든 함수 호출에는 this값이 있고 
   //바깥쪽 함수가 this값을 별도의 변수로 저장하지 않으면 클로저는 바깥쪽 함수의 this값에 접근할수 없다. 
   var self = this; //this값을 중첩 함수에서 사용하기 위해 변수에 따로 저장한다. 
   //arguments 바인딩 또한 비슷하다 arguments는 키워드가 아니지만 모든 함수 호출에 자동으로 선언된다. 클로저 함수는 자신만의 arguments를 가지고 있기 때문에 바깥쪽 
   //함수가 인자 배열을 다른 이름의 변수에 저장하지 않는한 클로저는 바깥쪽 함수의 인자 배열에 접근할 수 없다. 
   var outerArguments = arguments; //중첩 함수에서 사용하기 위해 별도로 저장한다. 
   
}