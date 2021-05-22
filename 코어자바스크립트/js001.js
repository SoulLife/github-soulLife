window.onload = function () {
    var empty = {}; //프로퍼티가 없는 빈 객체
    var point = { x: 0, y: 0 }; //두 개의 프로퍼티 x,y를 정의한다.
    var point2 = { x: point.x, y: point.y + 1 }; //프로퍼티를 수식의 값으로 정의한다.
    var book = {
        "main title": "javaScript",
        "sub-title": "The Definitive Guide",
        for: "all audiences",
        author: { firstname: "David", surname: "Flanagan" },
    }; 
    var author = book.author; //book 객체에서 author 프로퍼티를 가져온다.
    var name = author.surname; //author 객체에서 surname 프로퍼티를 가져온다.
    var title = book["main title"];//book객체에서 'main title' 프로퍼티를 가져온다.
    book.edition = 6; //book 객체에 edition 프로퍼티를 만든다.
    book["main title"] = "ECMAScript"; //"main title" 프로퍼티를 만든다.

    var addr = "";
    for(i =0; i<4; i++)
    {
        //addr += customer["address" + i] + "\n";
    }//customer객체의 address0,address1,address2, address3프로퍼티의 값을 읽고 읽은값을 addr변수에 차례대로 이어붙인다. 
    // .돗트로 프로퍼티에 접근하는 방법은 프로퍼티의 이름을 반드시 식별자로 표현해야 하는대 배열방식으로 접근하는 방법은 문자열로 표현한다 

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
    var o = {}; //o는 Object.prototype을 상속받은 객체고
    o.x = 1; //고유 프로퍼티x를 갖는다. 
    var p = inherit(o); //p는 객체 o와 Object.prototype을 상속받는 객체고,
    p.y = 2; //고유 프로퍼티 y를 갖는다. 
    var q = inherit(p); //q는 객체 p와 o, Object.prototype을 상속받는 객체고,
    q.z = 3; //고유 프로퍼티 z를 갖는다. 
    var s = q.toString(); //q는 Object.protype을 상속받았기 때문에 toString()을 사용할 수 있다.
    q.x + q.y; //결과는 3이고, q의 프로퍼티 x와 y는 각각 객체 o와 p에서 상속받았다. 

    var unitcircle = {r:1}; //객체c는 unitcircle로부터 
    var c = inherit(unitcircle); //프로퍼티 r을 상속받는다. 
    c.x = 1; c.y = 1; //객체 c는 고유 프로퍼티, x, y를 갖는다. 
    c.r = 2; //객체 c는 상속받은 프로퍼티 r을 재정의한다. 
    unitcircle.r; //=>1: 프로토타입 객체의 프로퍼티 r은 바뀌지 않는다. 
    console.log("c.r = %d, unitcircle.r=%d",c.r,unitcircle.r);

    //구체적이고 확실한 방법
    var len = undefined;
    if(book)
    {
        if(book.subtitle)
        {
            len = book.subtitle.length;
        }        
    }
    //간단하고 관용적인 방법, subtitle.length값 또는 undefined가 반환된다. 
    var len = book && book.subtitle && book.subtitle.length;
    //내장된 생성자의 프로토타입 프로퍼티들은 읽기 전용이다. 
    Object.prototype = 0; //문제없이 실행되나 Object.prototype은 바뀌지 않고, 예외가 발생하지는 않는다. 

};
