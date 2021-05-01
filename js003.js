window.onload = function()
{       
    function hanoi(n, a,b,c)
    {
        if(n < 1) { return; }
        hanoi(n-1,a,b,c);
        console.log("%d 번째 원반: %s -> %s",n,a,c);
        hanoi(n-1,b,a,c);
    }
    hanoi(4,"A","B","C");
}
//