window.onload = function () {    
    var book = {
        "main title": "javaScript",
        "sub-title": "The Definitive Guide",
        for: "all audiences",
        author: { firstname: "David", surname: "Flanagan" },
    }; 
    

    function getvalue(portfolio)
    {
        var total = 0.0;
        for(stock in portfolio)
        {
            //portpolio의 각 주식에 대해 보유량과 주당 가격을 얻어오고 이 둘을 곱한 값을 누적해 총액을 계산해 반환한다.
            var total = 0.0;
            for(stock in portfolio)
            {
                var shares = portfolio[stock];
                var price = getquote(stock);
                total += shares * price;
            }
            return total;
        }
    }
    function getquote(stock)
    {

    }
    function inherit(newObject)
    {
        return Object.create(newObject);
    }
    //delete는 상속받은 프로퍼티가 아닌 고유의 프로퍼티만 지울수있다. (상속받은 프로퍼티를 지울려면 해당 프로퍼티가 정의된 프로토타입 객체에서 삭제해야한다.)
    //삭제에 성공하면 해당 프로토타입 객체를 상속한 모든 객체가 영향을 받고 delete표현식에서 삭제에 성공하거나, 프로퍼티가 존재하지 않아서 아무 영향
    //도 끼지지 못한 경우에는 항상 true로 평가된다. delete연산자의 피연산자가 올바른 프로퍼티 접근 표현식이 아니라서 아무 효력도 낼수없는 경우에도 true로 평가
   var o = {x:1}; //o에는 프로퍼티 x가 존재하며, toString 프로퍼티는 상속받았다
   delete o.x; //객체 o에서 프로퍼티 x를 지우고, true를 반환한다.
   delete o.x; //x가 존재하지 않기 때문에 아무 일도 하지않고 true를 반환한다.
   delete o.toString; // toString은 객체 o의 고유 프로퍼티가 아니기 때문에 아무일도 하지않고 true를 반환한다.   
   delete 1; //말도 안되지만 true를 반환한다.
   delete Object.prototype;//Object.prototype은 속성 변경이 불가능한 프로퍼티이므로 지울 수 없다.
   var x = 1; //전역변수 x를 선언한다.
   delete this.x; //전역객체의 프로퍼티 x는 지울 수 없다. 
   function f() {} //전역함수 f를 선언한다.
   delete this.f; // 전역 객체의 함수f역시 지울수 없다. 

   var o = {x:1}
   "x" in o; //객체 o에 고유 프로퍼티 x가 존재하므로 true를 반환한다.
   'y' in o; //객체 o에 고유 프로퍼티 y가 존재하지 않으므로 false를 반환한다.
   "toString" in o; //객체 o에 상속받은 프로퍼티 toString가 있기 때문에 true를 반환한다. 
   o.hasOwnProperty("x"); //객체 o에는 고유 프로퍼티 x가 있으므로 메서드는 true를 반환한다. 
   o.hasOwnProperty("y"); //객체 o에는 고유 프로퍼티 y가 없으므로 메서드는 false를 반환한다. 
   o.hasOwnProperty("toString"); //toString은 상속된 프로퍼티이기 때문에 메서드는 false를 반환한다.
   o = inherit({y:2});
   o.x = 1;
   o.propertyIsEnumerable("x"); //열거할수 있는 고유 프로퍼티 x를 가지고 있기 때문에 메서드는 true를 반환한다. 
   o.propertyIsEnumerable("y"); //y는 상속받은 프로퍼티이기 때문에 메서드는 false를 반환한다. 
   Object.prototype.propertyIsEnumerable("toString"); //toString은 내장 프로퍼티이고, 열거할수 없기 때문에 false를 반환한다. 
   //undefined가 아니지만 확인할 때는 in연산자 대신 논리 연산자 !== 를 사용하는편이 훨씬 효과적이다. 
   o = {x:1};
   o.x !== undefined; //true객체 o에 프로퍼티 x가 존재한다. 
   o.y !== undefined; // false 객체 o에 프로퍼티 y가 존재하지 않는다. 
   o.toString !== undefined; //true: toString는 상속받은 프로퍼티이다. 
   o = {x:undefined}; //프로퍼티가 분명히 존재하지만 값이 undefined 이다.
   o.x !== undefined; //false: 프로퍼티가 존재하지만 값이 undefined다.
   o.y !== undefined; //false: 프로퍼티가 존재하지 않는다. 
   "x" in o; //true프로퍼티가 존재한다. 
   "y" in o; //false프로퍼티가 존재하지 않는다
   delete o.x; //프로퍼티 x를 제거한다. 
   "x" in o; //false프로퍼티가 더이상 존재하지 않는다. 
   //객체 o가 가진 프로퍼티 x의 값이 null이나 undefined가 아니라면, 2를 곱한다. 
   if(o.x != null) o.x *=2;
   //객체 o가 가진 프로퍼티 x의값이false가 아니라면, 2를 곱한다.
   //만약 x가 undefined나 null, false, '', 0,NaN중 하나라면 그냥 둔다.
   if(o.x) o.x *= 2;
   console.log(o.x);

};
