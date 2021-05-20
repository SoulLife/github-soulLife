window.onload = function()
{   
    var empty = {}; //프로퍼티가 없는 빈 객체
    var point = {x:0, y:0}; //두 개의 프로퍼티 x,y를 정의한다.
    var point2 = {x:point.x, y:point.y+1}; //프로퍼티를 수식의 값으로 정의한다.
    var book = { "main title": "javaScript", "sub-title":"The Definitive Guide", "for": "all audiences"
    ,author: { firstname: "David", surname:"Flanagan"}}; //프로퍼티 이름은 공백과 하이픈(-)을 포함할 수 있다. 
                                                        //예약어인 for도 인용부호를 둘러싸서 문자열 리터럴로 사용할 수있다. 프로퍼티 author의 값은 객체 그 자체다. 
                                                        //이 예에서 볼수 있듯이, 프로퍼티의 이름은 인용부호로 감싸지 않을 수도 있다.
    var o1 = Object.create({x:1, y:2}); //o1은 x,y 프로퍼티를 상속받는다.
    //inherit()은 프로토타입 객체 p의 속성을 상속받아 새롭게 생성된 객체를 반환한다. 만일 ECMAScript5 함수인 Object.create()가 정의되어 있다면 
    //해당 함수를 사용할 수 있다. 하지만 사용할수 없는 경우에는 예전 방법을 사용한다. 
    function inherit(p)
    {
        if(p == null) throw TypeError(); //p는 null이 아닌 객체여야 한다. 
        if(Object.create) //만약 Object.create()를 사용할 수 있으면
            return Object.create(p); //이를 사용한다
        var t = typeof p;//만일 객체의 타입 검사가 좀 더 필요한 경우 아래와 같이하자
        if(t !== "object" && t !== "function") throw TypeError();
        function f(){}; //임시로 빈 생성자 함수를 정의한다. 
        f.prototype = p; //f의 프로토타입 프로퍼티를 p로 설정한다.
        return new f(); // p를 상속하는 객체를 만들기 위해서는 함수 f()를 사용한다. 
    }

}

