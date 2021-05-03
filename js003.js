window.onload = function()
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
