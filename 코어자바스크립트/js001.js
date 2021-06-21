window.onload = function () {    
   //자바 스타일 클래스: 만약 자바나 그와 비슷한 강력한 타입의 객체 지향 언어를 사용하여 프로그램을 작성해봤다면 다음의 네 가지 멤버 유형에 익숙할 것이다. 
   //인스턴스 필드(instance fields) : 인스턴스 마다 있는 프로퍼티나 변수로, 개별 객체의 상태를 저장한다. 
   //인스턴스 메서드(instance methods) : 클래스의 모든 인스턴스가 공유하는 메서드로 개별 인스턴스를 대상으로 호출된다. 
   //클래스 필드(class fields) : 인스턴스가 아니라 클래스와 관련된 프로퍼티나 변수다
   //클래스 메서드(class methods) : 인스턴스가 아니라 클래스와 관련된 메서드다. 

   //자바스크립트가 자바와 다른 점 한 가지는 함수가 값이라는 점이고, 따라서 메서드와 필드 사이에는 뚜렷한 구분이 없다. 만약 프로퍼티 값이 함수라면 그 프로퍼티는
   //메서드이고, 함수가 아니라면 보통의 프로퍼티나 필드일 뿐이다. 이런 차이가 있음에도 자바의 네 가지 멤버 유형을 자바스크립트에서도 따라할수 있다. 
   //자바스크립트로 클래스를 정의할 때는 세 가지 객체가 관련된다. 그리고 이 세 객체의 프로퍼티는 각각 다른 종류의 멤버 구실을 한다. 

   //생성자 객체(constrctor object) : 앞에서 다루었듯이 생성자 함수(객체)는 클래스 이름을 정의한다. 이 생성자 객체에 추가한 프로퍼티는 클래스 필드와 클래스 메서드다(
   //필드냐 메서드냐는 프로퍼티 값이 함수인지 아닌지에 따라 결정된다.)
   //프로토타입 객체(prototype object) : 이 객체의 프로퍼티는 클래스의 모든 인스턴스에 상속된다. 그리고 그 값이 함수인 프로퍼티는 인스턴스 메서드도 동작한다. 

   //인스턴스 객체(instance object) : 각 인스턴스는 독립적인 객체이고 인스턴스에 직접 정의한 프로퍼티는 다른 인스턴스에 공유되지 않는다. 함수가 아닌 프로퍼티는 클래스의
   //인스턴스 필드로 작동한다. 
   
   //자바스크립트에서 클래스를 정의하는 과정은 세 단계의 알고리즘으로 줄일수 있다. 먼저 새 객체의 인스턴스 프로퍼티를 설정하는 생성자 함수를 작성한다. 두 번째 생성자의
   //프로토타입 객체에 인스턴스 메서드를 정의한다. 세 번째 생성자 자체에 클래스 필드와 클래스 프로퍼티는 정의한다. 이러한 알고리즘을 간단히 defineClass()함수로 구현할 수
   //있다
   //간단히 클래스를 정의하기 위한 함수이다. 
   function defineClass(constructor, //인스턴스 프로퍼티를 설정하는 함수.
                        methods, //인스턴스 메서드: 프로토타입으로 복사됨. 
                        statics) // 클래스 프로퍼티 : 생성자로 복사됨
   {
      if(methods)extend(constructor, prototype, methods);
      if(statics)extend(constructor, statics);
      return constructor;
   }
   //Range 클래스를 변형한 클래스다.
   var SimpleRange = defineClass(function(f, t) { this.f = f; this.t = t;},
   {
      includes: function(x) { return this.f <= x && x <= this.t;},
      toString: function() { return this.f + "..." + this.t;}
   },{upto: function(t) { return new SimpleRange(0, t);}});
   //복소수를 표현하는 클래스를 정의하고 자바스크립트에서 어떻게 자바 스타일의 클래스 멤버를 구현할수 있는지 보여줄 것이다. 앞서 다룬 defineClass()를 사용하지 않고 수동으로
   //클래스를 정의한다. 

   /*
   이 생성자 함수는 생성하는 모든 인스턴스에 인스턴스 필드 r과 i를 정의한다. 이 필드들은 객체의 상태를 실수부와 하수부로 나누어 보관한다. 
   */
  function Complex(real, imaginary){
     if(isNaN(real) || isNaN(imaginary)) //두 인자가 모두 숫자인지 확인한다
      throw new TypeError(); //숫자가 아니라면 예외를 발생시킨다. 
     this.r = real; //복소수의 실수부
     this.i = imaginary; //복소수의 하수부
  }
  /*
  인스턴스 메서드는 프로토타입 객체에 함수 값을 가진 프로퍼티로 정의된다. 여기 정의된 메서드들은 모든 인스턴스에 상속되고 객체가 행동하는 방식을 규정한다. 
  //자바스크립트 인스턴스 메서드는 인스턴스 필드에 접근하기 위해 this 키워드를 사용한다는 점을 유념하라.   
  */
 //이 복소수와 다른 복소수를 더하고 더한 값을 새 Complex 객체로 반환한다. 
 Complex.prototype.mul = function(that){
    return new Complex(this.r * that.r - this.i * that.i, this.r * that.i + this.i * that.r);
 };
 //복소수의 실제 크기를 반환한다. 이는 복소평면의 원점(0,0)으로부터의 거리로 정의된다.
 Complex.prototype.mag = function(){
    return Math.sqrt(this.r*this.r + this.i*this.i);
 };
 //이 복소수의 부정 값을 반환한다.
 Complex.prototype.neg = function() { return new Complex(-this.r, -this.i);};
 //Complex객체를 유용한 문자열로 변환한다. 
 Complex.prototype.toString = function(){
    return "{" + this.r + "," + this.i + "}";
 };
 //이 Complex 객체가 다른 Complex 객체와 같은 값을 가졌는지를 검사한다. 
 COmplex.prototype.equals = function(that){
    return that != null && //반드시 정의되어야 하고 null이어서는 안된다. 
    that.constructor === Complex && //Complex의 인스턴스여야 하고
    this.r === that.r && this.i === that.i; //값이 같아야 한다. 
 };

 /*
 클래스 필드(상수 같은)와 클래스 메서드는 생성자의 프로퍼티로 정의된다. 클래스 메서드는 일반적으로 this 키워드를 사용하지 않음을 주의하라 
 클래스 메서드는 오직 메서드에 전달된 인자만을 사용하여 수행된다. 

 //유용한 몇 가지 복소수를 클래스 필드로 미리 정의한다. 상수임을 나타내도록 이름은 대문자로 되어 있다. (ECMAScript 5에서는 이런 프로퍼티들을 실제로 읽기 전용으로 만들수 있다.) 
 */
Complex.ZERO = new Complex(0,0);
Complex.ONE = new Complex(1,0);
Complex.I = new Complex(0,1);

// 이 클래스 메서드는 인스턴스 메서드 toString()이 반환한 포맷에 따라 문자열을 분석하고 COmplex 객체를 반환한다. 문제가 있다면 TypeError예외를 발생시킨다. 
Complex.parse = function(s){
   try{ //분석이 성공했다고 가정한다. 
      var m = Complex._format.exec(s); //정규 표현식 수행
      return new Complex(parseFloat(m[1]), parseFloat(m[2]));
   }catch(x){
      throw new TypeError("Can't parse '" + s + "' as a complex number.");
   }
};
//앞의 Complex.parse()에서 사용하는 'private"클래스 필드다 필드 이름 앞의 밑줄은 이 필드가 내부적으로만 사용되어야 하고 공용 API의 일부로 간주되어서는 안된다는 의미다. 
COmplex._format = /^|{*[^,]+),([^]+)\}$/;
//Complex클래스를 정의하면 다음 코드와 같이 생성자와 인스턴스 필드, 인스턴스 메섣, 클래스 필드, 클래스 메서드를 사용할수 있다. 
var c = new Complex(2,3); //생성자로 새 객체를 만든다. 
var d = new Complex(c.i,c.r); //c의 인스턴스 프로퍼티를 사용한다. 
c.add(d).toString(); //{5,5}: 인스턴스 메서드 사용
//클래스 메서드와 필드를 사용하는 좀더 복잡한 표현식 
Complex.parse(c.toString()).add(c.neg()).equals(Complex.ZERO) //c를 문자열로 바꾸고 다시 변환한 다음 부정값을 더하면 결과는 언제나 0이다. 

//자바스크립트가 자바 스타일의 클래스 멤버를 흉내낼수있다고 하더라도 자바의 중요한 특징중 자바스크립트가 지원하지 않는 것이 몇가지 있다. 먼저 자바는 인스턴스 메서드 안에서
//인스턴스 필드를 메서드의 지역변수처럼 사용할수 있고 this를 비롯한 어떤 접두사도 붙일 필요가 없다. 자바스크립트는 이를 지원하지 않지마 with문을 사용하여 비슷한 효과를 얻을
//수는 있다(하지만 권장하지는 않는다. )
Complex.prototype.toString = function(){
   with(this){
      return "{" + r + "," + r + "}";
   }
};
//자바에서는 final을 사용하여 상수 필드를 정의할수 있다. 그리고 클래스 내부에서만 사용하고 외부에서 볼수 없는 필드나 메서드는 private으로 정의할수 있다. 자바스크립트에는 이런
//키워드들이 없어서 이를테면 값이 변경되면 안되는 프로퍼티들은 이름이 대문자이고 밑줄로 시작하는 이름의 프로퍼티는 클래스 외부에서 사용되면 안된다는 뜻이다. 이장의 후반부에서
//다시 이 주제를 다룰것이다. private프로퍼티는 클로저의 지역변수로 흉내낼수 있고 상수 프로퍼티는 ECMAScript5에서는 사용할수 있다. 
   
}