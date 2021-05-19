window.onload = function()
{   
    var a = [1,2,3,4,5];
    var target = 3;
    for(var i=0; i<a.length; i++)
    {
        if(a[i] == target) break;
    }
    function getData()
    {
        var arr = [[1,2,3],[4,5,6]];
        return arr;
    }
    var matrix = getData();
    //숫자로 채워진 2차원 배열을 가져온다.
    //배열에 있는 모든 숫자를 합해보자.
    var sum = 0, success = false;
    //에러가 발생하면 벗어날 수 있도록 레이블을 붙인 구문으로 시작한다.
    compute_sum: if(matrix)
    {
        for(var x=0; x<matrix.length; x++)
        {
            var row = matrix[x];
            if(!row) break compute_sum;
            for(var y = 0; y<row.length;y++)
            {
                var cell = row[y];
                if(isNaN(cell))break compute_sum;
                sum += cell;
            }
            
        }
        success = true;
        //break문을 사용하면 이곳으로 건너뛴다. 만약 success == false이면 주어진 배열에 뭔가 문제가 있는 것으로 판단한다. 
        //그렇지 않은 경우에는 sum변수에 배열에 모든 숫자의 합이 저장되어 있다. 
    }
    console.log((success ? "데헤":"이힝"));
    function display_object(o)
    {
        //인자가 null이거나 undefind로 평가되면 즉시 함수를 종료한다.
        if(!o)return;
        //함수의 나머지 부분은 여기서 계속된다.
    }
    function factorial(x)
    {
        //만약 입력 전달인자가 유효하지 않으면 예외를 발생시킨다.!
        if(x < 0) throw new Error("x must not be negative");
        //유효하다면 값을 계산하여 정상적으로 반환한다.
        for(var f = 1; x > 1; f *=x, x--) //비어있음
        return f;
    }
    try
    {
        //보통 이 코드는 아무런 문제없이 블록의 시작부터 끝까지 실행된다.
        // 하지만 경우에 따라 예외가 발생할 수 있다.
        //예외는 throw문에 의해 직접적으로 발생할 수도 있고,
        //또는 예외를 발생시키는 메서드의 호출에 의해 발생할 수도 있다.        
    }catch(e)
    {
        //이블록 내부의 구문들은 오직 try블록에서 예외가 발생한 경우에 실행된다.
        //이 구문들에서는 지역변수 e를 사용해 Error객체 또는
        //앞에서 던진 다른 값을 참조할 수 있다.
        // 이 블록에서는 어떻게든 그 예외를 처리할 수도있고,
        //그냥 아무것도 하지 않고 예외를 무시할 수도 있고.
        //아니면 throw를 사용해서 예외를 다시 발생시킬 수도 있다.
    }finally
    {
        //이 블록에는 try 블록에서 일어난 일에 관계없이
        //무조건 실행될 코드가 위치한다. 
        //이 코드는 try 블록이 어떻게든 종료되면 실행된다.
        //try블록이 종료되는 상황은 다음과 같다.
        //1)정상적으로 블록의 끝에 도달했을 때
        //2)break, continue 또는 return 문에 의해서
        //3)예외가 발생했지만 앞의 catch절에서 처리되었을 때
        //4)예외가 발생했고 그것이 잡히지 않은 채 퍼져나갈 때

    }
}

