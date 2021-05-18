window.onload = function()
{
    function convert(x)
    {
        switch(typeof x)
        {
            case "number": //주어진 숫자를 16진수 정수로 변환한다.
                return x.toString(16);
            case "string": //문자열을 큰따옴표로 묶어서 반환한다.
                return '"' + x + '"';
            default: //이 외의 타입은 문자열로 변환한다.
                return String(x);
        }
    }
    var count = 0;
    while(count < 9)
    {
        console.log(++count);
    }
    var o = {x:1, y:2, z:3};
    var a = [], i = 0;
    for(var p in o) // 비어있음
    {
        console.log(o[p]);
        a[i++] = o[p];
    }
    for(i in a)
    {
        console.log(a[i]);
    }
}

