window.onload = function()
{   
    var pow = function(exponent)
    {
        return function(base)
        {
            return Math.pow(base,exponent);
        }
    }
    var square = pow(2);
    var sqrt = pow(5);
    var cubicroot = pow(1/3);
};

