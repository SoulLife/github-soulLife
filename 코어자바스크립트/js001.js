window.onload = function()
{
    //문장블록 여러문장을 하나의 복합문으로 묶는다. 단순히 여러 문장을 중괄호로 감싸면 된다. 따라서 다음의 예제처럼
    // 단일 문장이나 마찬가지이며 자바스크립트에서 단일 문장을 쓰는 곳이라면 어디든지 사용할수 있다.
    {
        var x = Math.PI;
        var cx = Math.cos(x);
        console.log("cos(파이) = " + cx);
    }    
}

