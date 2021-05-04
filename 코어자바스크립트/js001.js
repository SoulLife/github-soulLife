window.onload = function()
{   
    var user = { 
        name:"Jaenam",
        urls:{
            portfolio: "http://github.com/abc",
            blog: "http://blog.com",
            facebook: "http://facebook.com/abc"
        }
    };
    var copyObject = function(target)
    {
        var result = {};
        if(typeof target === 'object' && target !== null)
        {
            for(var prop in target)
            {
                result[prop] = copyObject(target[prop]);
            }
        }else
        {
            result = target;
        }        
        return result;
    };
    var user2 = copyObject(user);
    user2.name = "Jung";
    console.log(user.name === user2.name);
    user.urls.portfolio = "http://portpolio.com";
    console.log(user.urls.portfolio === user2.urls.portfolio);

    user2.urls.blog = '';
    console.log(user.urls.blog === user2.urls.blog);
};

