window.onload = function()
<<<<<<< HEAD
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
=======
{       
    var Module = Module || {};
    (function(_Module)
    {
         var name = "NoName";
         function getName()
         {
             return name;
         }   
         _Module.showName = function()
         {
             console.log(getName());
         };
         _Module.setName = function()
         {
             name = x;
         }
    })(Module);
    Module.setName("Tom");
    Module.showName();
}
>>>>>>> 0d805207e6c5b9a35d8c7a71389491ddac0a695b
