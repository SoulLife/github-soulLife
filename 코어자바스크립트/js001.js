window.onload = function()
{
    var point = {x:1, y:1}; //객체정의
    "x" in point; // true 프로퍼티 x가 있다
    "z" in point; //false 프로퍼티 z가 없다. 
    "toString" in point; //true 상속된 프로퍼티
    var data = [7,8,9];
    "0" in data; //true 배열의 0번째 원소가 있기 때문
    1 in data; //true 배열의1번째 원소가 있기 때문
    3 in data; // false 배열에 3번째 원소가 없기때문

    var d = new Date(); //Date() 생성자로 새로운 객체를 생성한다.
    d instanceof Date; // true d는 Date()에 의해 생성되었다. 
    d instanceof Object; //true 모든 객체는 Object의인스턴스
    d instanceof Number; //false d는 Number의 객체가 아니다.
    var a = [1,2,3]; // 배열 리터럴 문법으로 새로운 배열을 생성한다.
    a instanceof Array; //true a는 배열이다.
    a instanceof Object; //true 모든 배열은 객체다.
    a instanceof RegExp; //false 배열은 정규 표현식이 아니다. 

    var o = {x:1};
    var p = null;
    if(o && o.x)console.log("데헤"); // 1: 0가 객체이기 때문에 o.x를반환한다 
    p && p.x; //null: p가 null 이기때문에 p.x를 평가하지않고 null를 반환한다. 

    var geval = eval;
    var x = "global", y = "global";
    function f()
    {
        var x = "local";
        eval("x +='changed';");
        return x;
    }
    function g()
    {
        var y = "local";
        geval("y += 'changed';");
        return y;
    }
    console.log(f(), x); //지역변수 값이 변경되었다. 결과는 "localchanged global";
    console.log(g(), y); //전역변수 값이 변경되었다. 결과는 "local globalchanged";

    
}

