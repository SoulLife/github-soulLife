window.onload = function()
{
    //콜메서드
    var func = function(a, b, c)
    {
        console.log(this.x,a,b,c);        
    };
    func(1,2,3); //window
    func.call({x:1},4,5,6);
    //apply메서드
    var func1 = function(a,b,c)
    {
        console.log(this,a,b,c);
    };
    func1.apply({x:1},[4,5,6]);
    var obj = {
        a: 1,
        method:function(x,y){
            console.log(this,x,y);
        }
    };
    obj.method.apply({a:4},[5,6]);
}


