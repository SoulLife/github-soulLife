window.onload = function () {    
   //생성자와 클래스 구별 : 프로토타입 객체는 클래스를 구별할때 핵심적인 역할을 한다. 두 객체는 같은 프로토타입 객체를 상속한 경우에만 같은 클래스의 인스턴스다.
   //새로 생성된 객체의 상태를 초기화하는 생성자 함수는 클래스 구별의 핵심이 아니다. 서로 다른 두 생성자 함수라도 같은 프로토타입 객체를 가리키는 prototype 프로퍼티를
   //가질수 있다. 그러면 두 생성자는 같은 클래스의 인스턴스를 만드는데 사용될 수 있다. 
   //생성자가 prototype만큼 객체 구별에 핵심적인 역할을 하지는 않더라도 생성자는 클래스를 대표하는 역할을 맡는다. 당연하게도 대부분의 생성자 함수 이름은 클래스 이름과
   //같다. 예를 들면 Range()생성자는 Range객체를 만든다는 식이다. 그러나 더 근본적으로 생성자는 객체가 어떤 클래스에 속한 것인지 검사할때 instanceof연산자와 같이 사용된다
   //객체 r이 Range객체인지를 알고 싶다면 다음과같이 할수있다. 
   r instanceof Range //r이 Rage.prototype을 상속했다면 true를 반환한다. 
   //instanceof 연산자는 실제로 r이 Range 생성자에 의해 초기화되었는지를 검사하지는 않고 r이 Range.prototype를 상속하는지를 검사한다. 그럼에도 instanceof는 생성자를 사용하여
   //클래스를 구별하도록 강제한다. instanceof 연산자에 대해서는 난중에 다시 살펴본다 


   //constructor프로퍼티 : 메서드를 객체 리터럴의 프로퍼티로 정의하는 것이 편리하긴 하지만 그래야만 객체를 만들수 있는 것은 아니다. 모든 자바스크립트 함수는 생성자로 사용될
   //수 있는데 함수가 생성자로 호출되려면 prototype프로퍼티가 있어야 한다. 따라서 모든 자바스크립트 함수에는 자동으로 prototype프로퍼티가 설정된다(ECMAScript 5에서 Function.
   //bind()메서드가 반환하는 함수는 제외)이 prototype프로퍼티의 같은 constructor프로퍼티 하나만 가진 객체다. constructor프로퍼티는 열거되지 않으며 constructor프로퍼티의 값은
   //해당 함수 객체다. 
   var F = function() {}; //이것은 함수 객체다 
   var p = F.prototype; // 이것은 F와 연관이 있는 프로토타입 객체다. 
   var c = p.constrctor(); //이것은 프로토타입과 관련한 함수 객체다. 
   c === F // true : 모든 함수에 대해 F.prototype.constrctor==F이다
   //미리 정의된 프로토타입 객체가 있고 이 프로토타입 객체가 constrctor프로퍼티를 가지고 있다는 말은 일반적으로 어떤 객체가 자기자신의 생성자를 가리키는 constrctor프로퍼티
   //또한 상속하고 있음을 뜻한다. 따라서 생성자는 클래스를 구별하는 데 사용될수 있고 constrctor프로퍼티를 통해 객체의 클래스를 얻을수 있다. 
   var o = new F(); //클래스 F의 객체 o를 생성한다
   o.constrctor === F //true : constructor 프로퍼티는 클래스를 가리킨다. 
   //Range 클래스는 미리 정의되어 있던 Range.prototype을 별도로 정의한 객체로 덮어쓴다. 그리고 이 별도로 정의한 프로토타입 객체에는 constrctor프로퍼티가 없다. 따라서 Range
   //클래스의 인스턴스에도 constrctor 프로퍼티는 없을 것이다. 이 문제는 명시적으로 프로토타입 객체에 constrctor프로퍼티를 추가함으로써 해결할 수 있다. 
   Range.prototype = {
      constrctor:Range, //역 참조를 위해 constrctor 프로퍼티를 명시적으로 설정한다. 
      includes: function(x) { return this.from <= x && x <= this.to;},
      foreach:function(f){
         for(var x=Math.ceil(this.from); x <= this.to; x++)F(x);
      },
      toString: function() { return "(" + this.from + "..." + this.to + ")"}
   };
   //일반적으로 사용하는 또 다른 기법은 constrctor프로퍼티가 있는 미리 정의되어 있는 prototype객체를 사용하는 것이다. 거기에 하나씩 메서드를 추가해 가면 된다. 
   //미리 정의되어 있는 Range.prototype객체를 확장하기 때문에 자동으로 생성된 Range.prototype.constructor프로퍼티를 덮어쓰지 않는다. 
   Range.prototype.includes = function(x) { return this.from <= x && x<=this.to;};
   Range.prototype.foreach = function(f){
      for(var x=Math.ceil(this.from); x<=this.to; x++)F(x);
   };
   Range.prototype.toString = function(){
      return "(" + this.from + "..." + this.to + ")";
   };
}