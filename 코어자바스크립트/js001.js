window.onload = function () {    
   //객체의 프로퍼티를 전달인자로 사용하기 : 어떤 함수에 세 개 이상의 매개변수가 있다면 이 함수를 호출하는 프로그래머가 인자의 올바른 순서를 기억하기가 어려워진다.
   //프로그래머가 매번 함수를 사용할 때마다 문서를 참조해야 하는 문제에서 벗어나려면 전달인자를 순서에 상관없이 이름/값의 쌍으로 함수에 전달하는 편이 효과적일 수 있다.
   //이런 방식으로 메서드 호출을 할수 있게 하려면 먼저 단일 객체를 전달인자로 받는 함수를 정의하고 함수의 사용자에게 함수에서 요구하는 이름/값 쌍을 가진 객체를 함수의
   //인자로 넘기도록 하면 된다. 다음 코드는 이러한 방식을 구현한 예제이고 또한 생략된 전달인자에 대해 기본 값을 지정하고 있음을 보여준다. 
   //배열 from에서 배열 to로 length 만큼의 요소를 복사한다. 
   //from 배열의 from_start 요소로부터 복사를 시작하고 to배열의 to_start위치부터 복사한 값을 써 넣는다. 
   //여기서 올바른 전달인자의 순서를 기억하기란 어려운 일이다. 
   function arraycopy(/*array*/ from, /*index*/ from_start, /*array */ to,/*index */ to_start, /*integer */ length)
   {
      //이곳에 코드가 위치한다.
   }
   //이버전은 조금 덜 효율적이지만 전달인자의 순서를 기억할 필요가 없다. 그리고 from_start와 to_start는 기본값은 0이다. 
   function easycopy(args)
   {
      arraycopy(args.from, args.from_start || 0, //기본값을 제공한다. )
      args.to_start || 0, args.length);
   }
   //easycopy()를 호출하는 방법
   var a = [1,2,3,4], b = [];
   easycopy({from:a,to:b,length:4});

   //전달인자 형식 : 자바스크립트 메서드의매개변수에는 정의된 형식도 없고, 함수에 전달한 값에 대해서 자료형 검사도 하지 않는다. 함수 인자에 해당 인자를 잘 설명하는 이름을
   //선택하거나 또한 바로 앞의 arraycopy()메서드에서처럼 주석에 인자의 자료형을 명시하면 코드를 문서화하는데 도움이 된다. 생략 가능한 전달인자에 대해서는 "optional"이라는
   //단어를 주석에 포함시키자. 그리고 메서드가 임의 개수의 인자를 받는다면 다음과같이 줄임표 부호를 사용하면 좋다. 
   //function max(/* 숫자값... */){ /*durlzhemrk dnlclgka*/}
   //자바스크립트는 필요에 따라 자유롭게 자료형 변환을 수행한다. 만약 문자열 인자를 요구하는 함수를 문자열이 아닌 다른 자료형의 인자로 넘겨 호출하면, 그 인자의 값은
   //해당 함수가 인자를 문자열로 사용하려 할때 문자열로 변환될 것이다. 모든 원시 형식은 문자열로 변환될 수 있고, 또 모든 객체에는 toString()메서드(별로 유용하지 않을 때도
   //있긴 하지만)가 있으므로, 이렇게 단순히 문자열로 변환되는 경우에는 어떤 에러도 발생하지 않는다. 하지만 항상 이런 것은 아니다. 앞에서 다룬 arraycopy()메서드를 다시
   //고려해보자. 이 메서드는 첫 번째 인자로 배열을 요구한다. 이 메서드를 적절히 구현했다면 만약 첫 번째 인자가 배열 또는 유사배열 객체가 아닐 때 호출은 실패할 것이다.
   //한두번만 사용하고 버릴 함수가 아니라면 인자 자료형을 검사하는 코드를 추가할 가치가 있는 것이다. 함수에 적절치 않은 값이 전달되면 예측할 수 있는 형태로 즉시 실패하는
   //편이 일단 함수를 실행하고 나중에 불명확한 메시지를 발생시키며 실패하는 것보다 낫다. 다음은 자료형 검사를 수행하는 함수에 대한 예제이다. 
   //배열(혹은 유사 배열 객체)요소의 전체 합을 반환한다. 모든 요소는 숫자여야 하고 null과 undefined는 무시된다. 
   function sum(a)
   {
      if(isArrayLike(a))
      {
         var total = 0;
         for(var i=0; i<a.length; i++) //모든요소를 순회함
         {
            var element = a[i];
            if(element === null)continue; //null과 undefined는 건너뛴다. 
            if(isFinite(element))total += element;
            else throw new Error("sum(): 요소는 반드시 유한수여야 합니다.");
         }
         return total;
      }
      else throw new Error("sum(): 인자는 배열 또는 유사 배열이어야 합니다.");
   }
   //이 sum()메서드는 받아들이는 인자에 대해 꽤 엄격하며, 적절하지 않은 값이 전달되면 적절한 정보를 담은 에러를 발생(throw)시킨다. 하지만 이 메서드는 실제 배열 외에 유사
   //배열 객체와도 호환되며 null과 undefined배열 요소는 무시하는 유연성도 갖췄다. 자바스크립트는 매우 유연하며 자료형을 느슨하게 처리하는 언어이기에 때로는 인자 개수와 
   //자료형에 유연한 함수를 작성하는 것이 바람직하다. 아래 fiexisum()메서드는 이런 유연한 접근방식을(거의 철저히)따른다. 이를테면 이 메서드는 임의 개수의 인자를 받지만
   //배열 형식의 인자는 재귀적으로 처리한다. 이런 방식으로 인해 이 메서드는 varargs메서드로 사용될 수도있고 배열 인자를 주어 호출할 수도있다. 게다가 이메서드는 에러를 던지기
   //전에 숫자가 아닌 값들을 최대한 숫자로 변환하려고 시도한다. 
   function flexissum(a)
   {
      var total = 0;
      for(var i=0; i<arguments.length; i++)
      {
         var element = arguments[i], n;
         if(element == null)continue; //null과 undefined 인자는 무시한다
         if(isArray(element)) //만약 인자가 배열이라면
            n = flexissum.apply(this,element); //재귀적 방식을 통해 합계를 계산한다. 
         else if (typeof element === "function") //만약 인자가 함수라면
            n = Number(element); //함수를 호출하고 숫자로 변환한다. 
         else n = Number(element); //그도 아니라면 숫자로 변환시도

         if(isNaN(n)) //숫자로 변환할수 없다면 error를 발생시킨다.
            throw new Error("flexissum(): can't convert " + element + " to number");
         total += n; //정상적인 숫자라면 total에 n을 더한다. 
      }
      return total;
   } 
};

