window.onload = function()
{
    //이 함수는 전달된 값을 제곱하여 반환한다 함수 정의 표현식
    var square = function(x) { return x * x;}

    //프로퍼티의 접근 표현식
    var o = {x:1,y:{z:3}}; //간단한 객체 리터럴 선언
    var a = [o,4,[5,6]]; //객체를 포함한 간단한 배열 리터럴 선언
    o.x; //1:표현식 o의 프로퍼티 x의 값
    o.y.z; // 3: 표현식 o.y의 프로퍼티 z의 값
    o["x"]; //1: 객체 o의 프로퍼티 x의 값
    a[1]; //4:표현식 a의 인덱스 1위치에 있는 원소값
    a[2]["1"]; // 6: 표현식 a[2]의 인덱스 1 위치에 있는 원소 값
    a[0].x; //1: 표현식 a[0]의 프로퍼티 x의 값
    //호출 표현식
    var f = function(x) { return x;};
    f(0); //f는 함수 표현식이다. 여기서 0은 인자 표현식이다
    Math.max(x,y,z); //Math.max는 함수고 x,y,z가 호출 인자다
    a.sort() //a.sort는 함수고, 호출 인자가없다.
    //객체 생성 표현식
    new Object();
    new Point(2,3);
    
    
}

