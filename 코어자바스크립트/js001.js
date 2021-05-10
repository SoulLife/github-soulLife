window.onload = function()
{
    var count = 0;
    var cbFunc = function()
    {
        //console.log(count);
        if(++count > 4)clearInterval(timer);        
    };
    var timer = setInterval(cbFunc,300);
    var newArr = [10,20,30].map(function(currentValue,index){
        //console.log(currentValue,index);
        return currentValue + 5;
    });
    //console.log(newArr);
    Array.prototype.map = function(callback, thisArg){
        var mappedArr = [];
        for(var i=0;i<this.length;i++)
        {
            var mappedValue = callback.call(thisArg || window.this[i], i, this);
            mappedArr[i] = mappedValue;
        }
        return mappedArr;
    };
    setTimeout(function() { console.log(this);}, 300);
    [1,2,3,4,5].forEach(function(x)
    {
        console.log(this);
    });
    document.body.innerHTML += '<button id="a">클릭</button>';
    document.body.querySelector("#a").addEventListener("click",function(e){
        console.log(this,e);
    })
}


