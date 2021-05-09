window.onload = function()
{
    var str = "abc def";    
    Array.prototype.concat.call(str,"string");
    Array.prototype.every.call(str, function(char){ return char !== ' ';});
    Array.prototype.some.call(str, function(char) { return char === ' ';});
    var newArr = Array.prototype.map.call(str, function(char) { return char + '!';});
    //console.log(newArr);
    var newStr = Array.prototype.reduce.apply(str, [function(string, char, i){ return string + char + i;},'']);
    //console.log(newStr);
    
    function Person(name, gender)
    {
        this.name = name;
        this.gender = gender;
    }
    function Student(name, gender, school)
    {
        Person.call(this,name,gender);
        this.school = school;
    }
    function Employee(name, gender, company)
    {
        Person.apply(this,[name,gender]);
        this.company = company;
    }
    var by = new Student("보영","female","단국대");
    var jn = new Employee("재난","male","구골");    
}


