window.onload = function()
<<<<<<< HEAD
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
