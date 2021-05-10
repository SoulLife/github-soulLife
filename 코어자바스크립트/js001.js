window.onload = function()
{
    var func = function(x)
    {
        console.log(this,x);
    };
    func(1);
    var obj = {
        method: func
    };
    obj.method(2);
}


