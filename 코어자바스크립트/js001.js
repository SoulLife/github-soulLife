window.onload = function () {    
    //배열을 순회하는 방법은 for루프를 사용하는 것이다
    var o = {x:1, y:1};
    var keys = Object.keys(o); //객체 o에서 속성 이름을 배열로 가져온다 
    var values = []; //속성 이름과 일치하는 속성 값을 배열로 저장한다
    for(var i=0; i<keys.length; i++)
    {
        //속성 이름 배열의 각 인덱스에 대해서 
        var key =keys[i]; //속성 이름을 가져온다.
        values[i] = o[key]; //속성 이름과 일치하는 속성 값을 배열에 저장한다.
    }
    for(var i in values)
    {
        if(!values.hasOwnProperty(i))continue; //상속받은 속성은 건너뛴다
        //루프 몸체가 올 수있다.
    }
    for(var i in values)
    {
        //i가 음의 정수라면 건너뛴다. 
        if(String(Math.floor(Math.abs(Number(i)))) != i)
            continue;
    }
    var data = [1,2,3,4,5]; //순회하고 싶은 배열을 만든다 
    var sumOfSquares = 0; //배열의 각 원소를 제곱한 값의 합계를 구하고 싶다면,
    data.forEach(function(x)
    {
        sumOfSquares += x*x; //제곱값을 sumOfSquares에 누적한다.
    });
    sumOfSquares; //제곱한 값의 합은 55가 된다 

};
