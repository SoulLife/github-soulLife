window.onload = function () {    
   //클래스와 모듈 : 각 객체는 다른 모든 객체와 구분되는 프로퍼티의 고유한 집합으로 취급하였다. 그러나 객체끼리 특정 프로퍼티를 공유할수 있도록 클래스를 정의하는 것도
   //종종 유용하다. 클래스의 구성원 즉 인스턴스는 상태를 정의하거나 저장하는 프로퍼티를 가지고 있고 그들의 동작을 정의하는 프로퍼티(보통 메서드라한다)를 가지고 있기도
   //하다 이러한 동작(메서드)은 클래스 수준에서 정의되고 모든 인스턴스가 공유한다. 예를 들어 복소수를 표현하고 계산하는 Complex클래스를 생각해보자. Complex의 인스턴스에는
   //복소수의 실수와 허수를 저장하는 프로퍼티가 있을 것이다. 그리고 복소수를 더하거나 곱하는 메서드 또한 정의되어 있을 것이다. 자바스크립트에서 클래스는 프로토타입 기반의
   //상속 매커니즘을 기반으로 하고 있다. 두 객체가 같은 프로토타입 객체로부터 프로퍼티를 상속받았다면 둘은 같은 클래스의 인스턴스다. 만약 두 객체가 같은 프로토타입을
   //상속하면 보통 이것은 두 객체가 같은 생성자 함수를 사용하여 만들어지고 초기화되었음을 뜻한다(항상 그런것은 아니다)만약 자바나 C++같은 강한 타입(Strong type)기반의 객체
   //지향 프로그래밍 언어에 익숙하다면 자바스크립트의 클래스는 그러한 언어들의 클래스와는 매우 다름에 유념해야 한다. 구문상으로는 비슷한 점이 있고 전통적인 클래스의 기능을 
   //자바스크립트에서 모방할 수는 있지만 자바스크립트의 클래스와 프로토타입 기반 상속 메커니즘은 자바나 그와 비슷한 언어의 클래스 상속과는 상당히 다르다는 사실을 이해해야 한다.
   //자바스크립트 클래스의 중요한 특징 중 하나는 동적으로 확장될 수 있다는 것이다. 클래스는 자료형(type)의 한 종류로 간주할수 있다. 객체의 형식 보다는 객체의 능력을 더 중요시
   //하는 덕 타이핑(duck-typing)이라는 프로그래밍 철학도 다루겠다. 
   //자바스크립트 객체 지향 프로그래밍에 대한 기초를 모두 다루고 나면 자바스크립트 언어 구조에 대한 내용보다는 좀더 실용적인 문제로 넘어갈것이다. 


   //클래스와 프로토타입 : 자바스크립트의 클래스는 같은 프로토타입 객체로부터 프로퍼티를 상속받은 객체의 집합이다. 따라서 프로토타입 객체는 클래스의 핵심이라고 할수 있다. 
   //일반적으로 인스턴스는 추가적인 초기화 작업이 필요하기 때문에 객체를 생성하고 초기화하는 함수를 작성하는 일은 일반적이다. 

   //range객체를 반환하는 팩터리 함수다.
   function range(from, to)
   {
      //아래에 정의한 range.methods 프로토타입 객체를 상속하는 객체를 생성하기 위해 inherit()함수를 사용한다. range.methods 프로토타입 객체는 이 함수의 프로퍼티로 저장되고
      //모든 range 객체가 공유하는 메서드를 정의하고 있다. 
      var r = inherit(range.methods);
      //이 range객체의 시작과 끝을(객체의 상태로)저장한다. 이 프로퍼티들은 해당 객체의 고유한 값이고 상속되지 않는다. 
      r.from = from;
      r.to = to;
      //생성한 객체를 반환한다.
      return r;
   }
   //이 프로토타입 객체는 모든 range 객체가 상속하는 메서드를 정의한다. 
   range.methods = {
      //x값이 범위 내에 있다면 true를 그렇지 않으면 false를 반환한다. 이 메서드는 텍스트 범위나 날짜 범위에 대해서도 숫자 범위와 마찬가지로 작동한다.
      includes: function(x) { return this.from <= x && x <= this.to;},
      //범위 내의 각 정수에 대해 f를 한번씩 호출한다. 이 메서드는 숫자 범위에 대해서만 작동한다
      foreach: function(f){
         for(var x=Math.ceil(this.from); x<= this.to; x++)f(x);
      },
      //범위를 표현하는 문자열을 반환한다
      toString: function() { return "(" + this.from +"..." + this.to + ")";}
   };
   //range객체를 사용하는 몇가지 예제들
   var r = range(1,3); //range객체를 생성한다
   r.includes(2); //true: 2가 범위에 있다.
   r.foreach(console.log); //1 2 3을 출력한다
   console.log(r); // (1...3)을 출력

   //위의 코드에는 range객체를 생성하는 팩터리함수 range()가 있다. 클래스 프로토타입 객체를 저장하기 위한 장소로 편의상 range()함수의 range.methods 프로퍼티를 사용하고 있다는
   //것을 눈여겨보자 이러한 방식으로 프로토타입 객체를 생성자 함수의 프로퍼티에 두는 것은 특별한 이유가 있어서도 아니고 관용적인 방법도 아니다. 둘째로 range()함수는 각 range
   //객체에 from 프로퍼티와 to 프로퍼티를 정의하고 있음에 주목하자. 이 프로퍼티들은 각 range객체의 고유한 상태를 저장하고 공유되거나 상속되지 않는다. 마지막으로 range.methods의
   //모든 메서드는 상속되고 공유되며 from, to프로퍼티를 참조하기 위해 this를 사용하고 있음에 유의하라. this는 메서드의 호출 대상 객체를 가리킨다. 이렇게 this를 사용하는 것은
   //모든 클래스 메서드의 기본특징이다. 
}