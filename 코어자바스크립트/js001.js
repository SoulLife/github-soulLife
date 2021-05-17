window.onload = function()
{
    var i; //하나의 변수를 선언함
    var j = 0; //하나의 var와 값을 선언함
    var p, q; //두변수를 선언함
    var greeting = "hello" + name;//복잡한 초기 값 표현식
    var x = 2.34, y = Math.cos(0.75), r, theta; //많은 변수들이 선언됨
    var x = 2, y = x*x;
    var x = 2, f = function(x) { return x * x;}, y = f(x); //두번째 변수 y에서  첫번째 변수 x를 사용함
    //여러변수를 선언할수 있음
    //각 라인별로 변수를 선언함
    console.log(x,y,f(2));
    for(var i=0; i<10; i++)console.log(i);
    for(var i = 0, j = 10; i< 10; i++,j--)console.log(i * j);
    for(var i in o)console.log(i);
}

