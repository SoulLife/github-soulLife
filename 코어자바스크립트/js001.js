window.onload = function () {    
   //프로토 타입 체인  메서드 오버라이드 : 객체를 참조하는 __proto__를 생략하면 인스턴스는 prototype에 정의된 프로퍼티나 메서드를 마치 자신의 것처럼 사용할수 있다고 했습니다. 
   //그런데 만약 인스턴스가 동일한 이름의 프로퍼티 또는 메서드를 가지고 있는 상황이라면 어떨까요?
   var Person = function (name)
   {
      this.name = name;
   };
   Person.prototype.getName = function()
   {
      return this.name;
   };
   var iu = new Person("지금");
   iu.getName = function()
   {
      return "바로 " + this.name;
   }
   console.log(iu.getName())//바로 지금
   var arr = [1,2];
   Array.prototype.toString.call(arr);
   Object.prototype.toString.call(arr);
   arr.toString();

   arr.toString = function()
   {
      return this.join("_");
   }
   arr.toString(); //1_2

   //객체 전용 메서드의 예외사항 : 어떤 생성자 함수이든 prototype은 반드시 객체이기 때문에 Object.prototype이 언제나 프로토타입 체인의 최상단에 존재하게 됩니다. 따라서 객체에서만 사용할
   //메서드는 다른 여느 데이터 타입처럼 프로토타입 객체 안에 정의할 수가 없습니다. 객체에서만 사용할 메서드를 Object.prototype내부에 정의한다면 다른 데이터 타입도 해당 메서드를 사용할 수
   //있게 되기 때문이죠

   Object.prototype.getEntries = function()
   {
      var res = [];
      for(var prop in this)
      {
         if(this.hasOwnProperty(prop))
         {
            res.push([prop,this[prop]]);
         }
      }
      return res;
   }
   var data = [ ["object",{a:1, b:2, c:3}],
               ['number',345],
               ["string","abc"],
               ["boolean",false],
               ["func",function(){}],
               ["array",[1,2,3]
               ]];
   data.forEach(function (datum)
   {
      console.log(datum[1].getEntries());
   })

};

