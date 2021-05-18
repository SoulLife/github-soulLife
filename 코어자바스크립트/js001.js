window.onload = function()
{
    var alertFruit = function(fruit)
    {
        alert("your choice is" + fruit);
    };
    var fruits = ["apple", "banana", "peach"];
    var $ul = document.createElement("ul");
    fruits.forEach(function(fruit){
        var $li = document.createElement("li");
        $li.innerText = fruit;
        $li.addEventListener("click",alertFruit.bind(null,fruit));
        $ul.appendChild($li);        
    });
    document.body.appendChild($ul);
    alertFruit(fruits[1]);
}

