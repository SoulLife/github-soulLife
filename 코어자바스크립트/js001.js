window.onload = function () {    
    var o = {x:1, y:2, z:3}; //열거할 수 있는 3개의 고유 프로퍼티
    o.propertyIsEnumerable("toString"); //flase : toString은 열거할 수 없는 프로퍼티다;
    for(p in o)
    {
        //객체 o의 모든 프로퍼티에 대해 프로퍼티 이름을 출력한다. 결과는 x,y,z가 출력된다. 하지만 toString은 출력되지 않는다.
        console.log(p);
    }
    //for/in 루프를 통해 열거되는 것을 막고싶으면 다음 두방법 가운데 하나를 이용해서 걸러야 한다. 
    for(p in o)
    {
        if(!o.hasOwnProperty(p))
        {
            continue; //상속받은 프로퍼티는 생략한다 
        }
    }
    for(p in o)
    {
        if(typeof o[p] === "function")
        {
            continue; //해당 프로퍼티가 메서드면 생략한다. 
        }
    }
    //객체의 프로퍼티를 열거하는 유용한 함수들
    /*
    객체 p의 열거 가능한 프로퍼티들을 객체 o에 복사한후 반환한다. 
    만약 객체 o와 p가 같은 이름의 프로퍼티를 갖고 있다면, 객체 o의 프로퍼티를 재정의한다. 
    이 함수는 getter/setter 메서드와 프로퍼티의 속성까지 복사하지는 않는다. 
    */
   function extend(o, p)
   {
       for(prop in p)
       {
           //p의 열거 가능한 모든 프로퍼티를 o의 프로퍼티로 추가한다 
           o[prop] = p[prop];
       }
       return o;
   }
   /*
   객체 p의 열거 가능한 프로퍼티들을 객체 o에 복사한 후 반환한다. 
   만약 객체 o와 p가 같은 이름의 프로퍼티를 갖고 있다면, 객체 o의 프로퍼티를 그대로 사용한다. 
   이 함수는 getter/setter메서드와 프로퍼티의 속성까지 복사하진 않는다. 
   */
  function merge(o, p)
  {
      for(prop in p)
      {
          if(o.hasOwnProperty[prop])continue; //p의 열거 가능한 모든 프로퍼티중에 같은 이름의 프로퍼티를 제외한 나머지를 객체 o의 프로퍼티로 추가한다.
          o[prop] = p[prop];
      }
      return o;
  }
  //객체 o의 프로퍼티 중에 객체 p에 없는 프로퍼티들을 제거하고 o를 반환한다. 
  function restrict(o, p)
  {
      for(prop in o)
      {
          //o의 열거 가능한 모든 프로퍼티 중에 p에 없는 프로퍼티만 제거한다. 
          if(!(prop in p))delete o[prop];
      }
      return o;
  }
  /*
  객체 p의 프로퍼티 중에 객체 o가 가진 프로퍼티와 중복되는 프로퍼티들을 객체 o에서 제거한 후 반환한다. 
  */
  function subtract(o, p)
  {
      for(prop in p)
      {
          //p의 열거 가능한 모든 프로퍼티중에 o와 같은 이름의 프로퍼티가 있다면 제거한다. (비록 존재하지 않더라도 삭제 연산은 정상적으로 진행된다. )
          delete o[prop];
      }
  }
  /*
  객체 o와 p가 가진 프로퍼티들을 새 객체에 담아 반환한다. 
  만약 같은 이름의 프로퍼티의 경우에는 객체 p의 프로퍼티 값을 사용한다.   
  */
 function union(o, p) { return extend(extend({},o),p);}
 /*
  객체 o의 프로퍼티중 p에도 있는 것들만 새 객체에 담아 반환한다. 
  o와 p의 교집합을 구하는 것과도 같지만, 객체 p의 프로퍼티 값은 버려진다는 차이가 있다.  
 */
  function intersection(o, p) { return restrict(extend({},o), p);}
  //객체 o가 가진 열거 가능한고유 프로퍼티들의 이름을 배열에 담아 반환한다. 
  function keys(o)
  {
      if(typeof o !== "object")throw TypeError(); //반드시 객체 인자가 필요함
      var result = []; //반환할 배열을 선언함
      for(var prop in o)
      {
          //객체 o의 열거 가능한 프로퍼티들 중에 고유 프로퍼티인 경우에 배열에 프로퍼티 이름을 추가한다. 
          if(o.hasOwnProperty(prop))
            result.push(prop);
      }
      return result; //배열을 반환한다. 
  }
  var o = {
      //데이터 프로퍼티
      data_prop: 1,
      //한 쌍의 함수로 정의된 접근자 프로퍼티
      get accessor_prop() { /* 함수몸체 */},
      set accessor_prop(value) { /* 함수 몸체*/}
  };
  var p = {
      //읽기/ 쓰기 속성을 가진 일반적인 데이터 프로퍼티 x, y
      x:1.0,y:1.0,
      //r은 getter/setter를 통한 읽기 /쓰기가 가능한 접근자 프로퍼티다
      //이러한 접근자 메서드 다음에 쉼표를 반드시 추가해야 한다.
      get r() { return Math.sqrt(this.x*this.x + this.y* this.y);},
      set r(newValue) {
          var oldValue = Math.sqrt(this.x*this.x + this.y * this.y);
          var ratio = newValue / oldValue;
          this.x *= ratio;
          this.y *= ratio;
       },
       //theta는 읽기 전용 접근자 프로퍼티고, getter함수만 갖는다.
       get theta() { return Math.atan2(this.y, this.x);}
  };
  var q = Object.create(p); //객체 p의 getter와 setter를 상속받는 객체 q를 생성한다.
  q.x = 1; q.y = 1; //객체 q에 고유 데이터 프로퍼티들을 만든후
  console.log(q.r); //상속받은 접근자 프로퍼티를 사용한다.
  console.log(q.theta);
  //이 객체는 매번 다른 일련번호를 생성한다.
  var serialnum = {
      //이 데이터 프로퍼티는 다음 일련번호 값을 갖는다.
      //프로퍼티 이름에 붙은 $는 내부(private)프로퍼티라는 힌트다
      $n: 0,
      //현재 일련번호 값을 반환한 후 , 값을 증가한다.
      get next() { return this.$n++;},
      //새 일련번호 값을 설정하는대, 이때 기존의 값보다 반드시 커야한다.
      set next(n)
      {
          if(n >= this.$n)this.$n = n;
          else throw "serial number can only be set to a larger value";
      }
  };
  //이 객체는 무작위 수를 반환하는 접근자 프로퍼티들을 가지고 있다.
  //예를 들어 random.octer는 매번 0부터255 사이의 임의의 수를 반환한다.
  var random = {
      get octet() { return Math.floor(Math.random() * 256);},
      get uint16() { return Math.floor(Math.random() * 65536);},
      get int16() { return Math.floor(Math.random() * 65536)-32768;}
  }  
  

};
