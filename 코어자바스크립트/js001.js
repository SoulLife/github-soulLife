window.onload = function () {    
   //값으로서의 함수 : 함수의 가장 중요한 특징은 정의될 수 있고 호출될 수 있다는 점이다. 함수의 정의와 호출은 자바스크립트뿐만 아니라 다른 대부분 프로그래밍 언어의
   //문법적 특징이다. 하지만 자바스크립트에서 함수는 문법일 뿐만 아니라 값이기도 한데 이는 함수가 변수에 할당될 수 있고 객체의 프로퍼티나 배열 원소로 저장될 수도 있으며
   //다른 함수의 인자로 전달될 수도 있고 기타 여러 방식으로 사용 될 수 있음을 뜻한다. 함수가 자바스크립트 문법일 뿐만 아니라 자바스크립트 데이터도 될수 있다는 것을
   //이해하기 위해 다음 함수 정의를 살펴보자
   function square(x) { return x * x;}
   //이정의는 새 함수 객체를 생성하고 이를 변수 square에 할당한다 함수의 이름은 사실 실체가 없는 개념이다. 함수 객체를 참조하는 변수의 이름일 뿐이기 때문이다. 함수는 다른
   //변수에 할당될 수도 있고, 그렇게 하더라도 여전히 똑같이 작동한다
   var s = square; //이제 s는 square와 같은 함수를 참조한다. 
   square(4); //16
   s(4); //16
   //또한 함수는 변수 외에도 객체 프로퍼티에 할당될 수도 있는데 이를 메서드라고 한다. 
   var o = {square:function(x){ return x * x;}}; //객체 리터럴
   var y = o.square(16); //y는 256이다 
   //함수를 배열 요소에 할당한다면 이름은 아예 필요가없다. 
   var a = [function(x) { return x * x;},20];//배열 리터럴
   a[0](a[1]); //400
   
   //간단한 함수를 몇 개 정의한다. 
   function add(x,y) { return x + y;}
   function subtract(x,y) { return x - y;}
   function multiply(x,y) { return x * y;}
   function divide(x,y) { return x / y;}
   //위 함수 중 하나를 인자로 받아 두 개의 피연산자와 같이 호출하는 함수를 정의한다. 
   function operate(operator, operand1,operand2)
   {
      operator(operand1,operand2);
   }
   //(2+3) + (4*5)와 같은 값을 계산하려면 다음과 같이 함수를 호출한다. 
   var i = operate(add,2,3) + operate(multiply,4,5);
   //예제를 위해 다시 간단한 함수를 구현한다. 
   //이번에는 객체 리터럴 속에 함수 리터럴을 사용하였다. 
   var operators = {
      add:function(x,y) { return x + y;},
      subtract:function(x, y) { return x - y;},
      multiply:function(x, y) { return x * y;},
      divide:function(x,y) { return x / y;},
      pow:Math.pow //미리 정의되어 있는 함수 역시 사용할 수 있다.
   };
   //이 함수는 연산자 이름을 취하고, 객체 안에서 그 연산자를 찾고나서 주어진 피연산자와 같이 호출한다. 연산자 함수를 호출하는 구문을 눈여겨 보라. 
   function operate2(operation, operand1, operand2)
   {
      if(typeof operators[operation] === "function")
         return operators[operation](operand1,operand2);
      else
         throw "알 수 없는 연산자";
   }
   //("hello" + ' ' " + world")같은 값을 계산하려면 다음과 같이 호출할 수 있다.
   var j = operate2("add", "hello", operate2("add", " ","world"));
   //미리 정의된 Math.pwo()함수를 사용한다.
   var k = operate2("pow",10,2);
   //값으로서의 함수에 대한 다른 예로 ,Array.sort()메서드를 들 수 있다. 이 메서드는 배열의 요소를 정렬한다. 사용할 수 있는 정렬 기준은 아주 많기 때문에(숫자 순서,
   //알파벳 순서, 날짜 순서, 오름차순, 내림차순, 기타 등등), sort()메서드는 정렬을 어떻게 수행할지 알려주는 함수를 선택적 인자로 받는다. 선택적 인자로 넘겨주는 함수가
   //하는 일은 간단하다. 전달된 두 값중에서 어떤 값이 정렬된 배열에서 먼저 나와야 하는지를 명시하는 값을 반환한다. 이러한 함수 인자 때문에 Array.sort()는 완전히
   //일반화(generic)되고 한없이 유연해진다. 어떤 형식의 데이터라도 상상할수 있는 모든 순서로 정렬할수 있다. 
};

