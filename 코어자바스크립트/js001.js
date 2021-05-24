window.onload = function () {    
    var random = {
        get octet() { return Math.floor(Math.random() * 256);},
        get uint16() { return Math.floor(Math.random() * 65536);},
        get int16() { return Math.floor(Math.random() * 65536)-32768;}
    }  
    //프로퍼티의 속성 writable과 enumerable, configurable가 있다 
    //writable는 프로퍼티의 값변경 유무를 지정한다 
    // enumerable는 프로퍼티가 열거될수있는 여부결정
    //configurable는 configurable속성뿐아니라 writable속성과 enumerable속성값의 변경 가능여부를 설정한다. 
    //{value:1, writable:true, enumerable:true, configurable:true}를 반환한다.
    Object.getOwnPropertyDescriptor({x:1},"x");
    //이전 절에서 정의한 random 객체의 octet 프로퍼티의 속성을 살펴보자
    Object.getOwnPropertyDescriptor(random,"octet");
    //상속받은 프로퍼티나 존재하지 않는 프로퍼티의 경우 undefined를 반환한다. 
    Object.getOwnPropertyDescriptor({}, "x"); //프로퍼티가 없으므로 undefined를 반환한다. 
    Object.getOwnPropertyDescriptor({},"toString"); //상속받은 프로퍼티이므로 undefined를 반환한다. 
    var o = {}; //프로퍼티가 없는 빈 객체를 정의한다. 
    //열거할 수 없는 데이터 프로퍼티 x를 정의하고, 프로퍼티의 값을 1로 설정한다.
    Object.defineProperty(o,"x",{value:1,writable:true, enumerable:false, configurable: true});
    //정의한 프로퍼티를 열거할 수 있는지 검사한다.
    o.x; // 1
    Object.keys(o); // []
    //프로퍼티 값을 바꿔보자
    Object.defineProperty(o, "x", {writable: false});
    o.x = 2; //단순히 값을 변경하지 못하거나, 엄격모드에서는 TypeError 예외가 발생한다. 
    o.x; //1
    //여전히 configurable 프로퍼티이므로, 다음과 같이 기존 값을 변경할 수 있다. 
    Object.defineProperty(o, "x", {value:2});
    //프로퍼티 x를 데이터 프로퍼티에서 접근자 프로퍼티로 바꿧다. 
    Object.defineProperty(o,"x",{get:function() {return 0;}});
    o.x; // 0
    var p = Object.defineProperties({}, {
        x:{ value: 1, writable:true, enumerable:true, configurable:true},
        y:{value:1, writable:true, enumerable:true, configurable:true},
        r:{
            get:function() { return Math.sqrt(this.x*this.x + this.y*this.y)},enumerable:true,configurable:true
        }
    });
    /*
    Object.prototype에 열거되지 않는 메서드 extend()를 추가한다.
    이메서드는 호출시에 인자로 전달된 객체에서 프로퍼티들을 복사함으로써 객체를 확장한다
    단순 프로퍼티의 값뿐 아니라 모든 프로퍼티 속성을 복사한다.
    인자로 넘긴 객체가 소유한 모든 고유 프로퍼티는 대상 객체에 같은 이름의
    프로퍼티가 존재하지 않는 한 대상 객체에 복사된다.
    */
   Object.defineProperty(Object.prototype, "extend", //Object.prototype.extend를 정의한다.
   {
       writable: true,
       enumerable: false, //열거불가능하게 했다.
       configurable: true,
       value: function(o)
       {
            //Object.prototype.extend메서드의 값은 함수다.
            //열거되지 않는 프로퍼티들을 포함한 모든 고유 프로퍼티에 대해
            var names = Object.getOwnPropertyNames(o);
            for(var i=0; i<names.length; i++)
            {
                //루프에서 살펴본다.
                //this 객체에 이미 같은 이름의 프로퍼티가 존재하면 건너뛴다.
                if(names[i] in this)continue;
                //객체 o의 프로퍼티 디스크립트터를 가져온다.
                var desc = Object.getOwnPropertyDescriptor(o,names[i]);
                //this 객체에 프로퍼티를 생성할 때 앞에서 가져온 디스크립터 객체를 사용한다.
                Object.defineProperty(this,names[i],desc);
            }
       }
   }
   )

};
