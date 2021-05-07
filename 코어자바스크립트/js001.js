window.onload = function()
{
    var obj = {
        outer: function()
        {
            console.log(this); //windows
            var innerFunc = function()
            {
                console.log(this);//outer
            }
            innerFunc();
            var obj2 = {
                innerMethod: innerFunc
            };
            obj2.innerMethod(); //outer
        }
    };
    obj.outer();
}


