window.onload = function () {    
    //객체 리터럴을 통해 만든 객체는 Object.prototype을 객체의 프로토타입으로 설정
    //new를 사용해 만든 객체는 생성자 함수의 prototype프로퍼티 값이 prototype 속성의 값이 되고 Object.create()메서드로 만든 객체는 메서드의 첫번째
    //인자가 프로토타입 속성의 값이 된다. 
    var p = {x:1}; //객체 p를 정의한다
    var o = Object.create(p); //객체 p를 프로토타입으로 하는 객체를 만든다. 
    p.isPrototypeOf(o); //true : 객체 o는 객체 p를 상속받는다. 
    Object.prototype.isPrototypeOf(p); //true : 객체 p는 Object.prototype을 상속받는다. 

    //class속성 객체의 타입에 대한 정보를 담고 있는 문자열이다. ECMAScript3과 ECMAScript5 모두 어떠한 방법으로도 이 속성을 변경할수없고 그 값을
    //질의하는 것도 아주 간접적으로만 가능하다. 객체의 클래스 정보를 알아보기 위해서는 객체의 toString()메서드를 호출하면된다. 이때 반환되는 스트링의 아홉번째 
    //문자부터 문자열 끝에서 두번째 문자까지 추출한다. 
    function classOf(o)
    {
        if(o ===null)return "Null";
        if(o === undefined) return "Undefined";
        return Object.prototype.toString.call(o).slice(8,-1);
    }
    //위의 함수에는 어떠한 자바스크립트 값을 넣어도 동작한다. 숫자,문자열, 불리언 값은 toString()메서드를 호출할때 객체처럼 동작하고 
    // 추가로 null과 undefined인 경우도 처리하고있다. (ECMAScript5에서는 null과 undefined를 따로 처리할 필요가없다. )
    classOf(null); //Null
    classOf(1); // Number
    classOf(""); //String
    classOf(false); //Boolean
    classOf({}); //Object
    classOf([]); //Array
    classOf(/./); // Regexp
    classOf(new Date()); //Date
    classOf(window); // Window(클라이언트측 호스트 객체)
    function f() {}; //생성자 함수를 생성한다.
    classOf(new f()); // Object

    //extensible 속성은 객체에 새 프로퍼티를 추가할수 있는지 여부를 결정한다. ECMAScript3에서는 모든 내장 객체와 사용자 정의 객체는 특별한 경우가 아니면 확장할수있고
    //호스트 객체의 확장상언 구현체에 따라 다르다.
    //확장할수있는 객체인지 알아보려면 Object.isExtensible() 함수에 해당 객체를 인자로 넘긴다. 객체를 확장할 수 없도록 하려면 
    //Object.preventExtensions()에 해당 객체를 인자로 넘긴다. Object.preventExtensions()함수를 사용해 객체를 확장할수 없도록 설정하면, 설정하기 전 상태로
    //돌아갈수 없음에 유의하라.
    //Object.seal()은 Object.preventExtensions()와 동작이 유사하지만 객체를 확장할수 없게 만들뿐만아니라 객체가 가진 모든 고유 프로퍼티를 설정 불가능 하게
    //만든다. 다시 말해 객체에 새로운 프로퍼티를 추가할수 없고 기존 프로퍼티의 설정을 바꾸거나 지울수도 없다는 뜻이다. 하지만 writable 속성이
    //true인 기존 프로퍼티의 값은 변경할수 있다. Object.seal()메서드로 한번 봉인된 객체는 다시 해제할 수 없다. Object.isSealed()메서드를 사용해
    //객체가 봉인되어 있는지 검사할수 있다. 
    //Object.freeze()메서드는 객체를 좀더 단단히 잠근다. 객체를 확장할수 없게 만들고 프로퍼티 설정을 바꿀수 없게 바꾼다. 
    //Object.seal()과 object.freeze()는 주어진 객체의 고유 프로퍼티에만 영향을 미치고, 객체가 가진 프로토타입 객체에는 영향을 미치지 않는다. 객체를 철저히
    //잠그고싶다면 객체의 프로토타입 체인까지 잠궈야 한다. 
    //Object.preventExtensions()와 Object.seal(), Object.freeze()메서드들은 인자로 넘겼던 객체를 다시 반환한다. 이점을 이용하면 다음 예시처럼 함수 호출을 한줄로
    //중첩시킬 수 있다. 
    //Object.freeze()로 프로토타입을 고정시키고
    //열거할 수없는 프로퍼티y를 가진 객체를 Object.seal()로 봉인한다. 
    var o = Object.seal(Object.create(Object.freeze({x:1}),{y: {value:2, writable: true}}));

};
