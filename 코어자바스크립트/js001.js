window.onload = function () {    
   //indexOf()와 lastIndexOf() : indexOf()와 lastIndexOf()메서드는 배열의 원소 중에서 특정한 값을 찾는다. 만약 값이 존재하면 해당 값의 인덱스를 반환하고
   // 존재하지 않을 경우에는 -1을 반환한다. indexOf()는 배열의 처음부터 검색하고, lastIndexOf()는 배열의 끝에서부터 검색한다. 
   a = [0,1,2,1,0];
   a.indexOf(1); //반환값은1이고 , a[1]은 1이다
   a.lastIndexOf(1); //반환값은 3 a[3]은 1이다.
   a.indexOf(3); //반환값은 -1이고, 값이 3인 원소는 없다.
   //indexOf()와 lastIndexOf()는 함수를 인자로 받지 않는다. 첫번째 인자는 배열에서 찾고자 하는 값이다.두번째 인자는 생략할수 있는데, 이 인자를 사용해 검색을
   //시작할 배열 인덱스를 지정할수있다. 만약 이인자를 지정하지 않으면, indexOf()는 배열의 앞에서부터 검색을 시작하고, lastIndexOf()는 배열의 마지막 원소부터
   //검색을 시작한다. 두 번 째 인자로 음수를사용 할수있는데, 이값은 배열의 마지막 원소로부터의 상대적인 위치다. 이는 splice()메서드의 두 번째 인자와 동일하다.
   //예를 들어 -1은 배열의 마지막 원소다 
   //배열 a에서 x인 값을 포함한 원소의 인덱스를 배열로 반환한다. 
   function findall(a, x)
   {
       var results = []; //반환할 인덱스들을 담은 배열
       len = a.length, pos = 0; //검색할 배열의 길이 검색을 시작할 위치
       while(pos < len) //검색할 원소가 있다면
       {
            pos = a.indexOf(x, pos); //검색한다.
            if(pos === -1)
                break;//찾을수없다면 종료한다.
            results.push(pos); //찾았다면 배열에 인덱스를 저장하고
            pos = pos + 1; //검색시 시작 위치를 다음 원소로 지정한다.
       }
       return results; //찾은 원소의 인덱스를 담은 배열을 반환한다.
   }
   //문자열에도 indexOf()와 lastIndexOf()메서드를 사용할수있는데 이들역시 배열 메서드와 동일하게 작동한다 


   //배열 타입 : 임의의 객체가 배열인지 여부를 판별하는 작업은 매우 유용하다. ECMAScript5에서는 Array.isArray()라는 함수를 통해 특정 객체가 배열인지 여부를 판할수 있다.
   Array.isArray([]); //true
   Array.isArray({}); //false
   //ECMAScript5 이전에는 임의의 객체가 배열인지를 판단하기가 무척 어려웠다. 이는 typeof연산자가 배열뿐아니라 함수를 제외한 모든 객체에 대해 object를 반환하기 때문이다. 
   //단순한 형태의 경우라면 다음과 같이 instanceof연산자를 사용할 수도있다.
   [] instanceof Array; //true
   ({}) instanceof Array; //false
   //그러나 instanceof를 사용하면 웹브라우저에서 문제가 생길수 있는데, 종종 하나 이상의 창 또는 프레임이 열려있을 경우에 해당된다. 각 창 또는 프레임은 고유한 자바스크립트
   //실행 환경과 전역 객체를 가지고 있다. 또한, 각각의 전역 객체는 별도의 생성자 함수들을 가지고 있다. 따라서 하나의 프레임에 속한 객체는 다른 프레임에 속한 생성자의
   //인스턴스가 될 수 없다. 프레임 간의 혼동이 자주 발생하지는 않지만, instanceof 연산자로는 배열인지를 확실하게 검증할수 없다는 뜻이다. 
   //이를 해결하기위해서는 객체의 class속성을 살펴볼 필요가 있다. 배열의 경우 class속성은 항상 Array값을 가지고있고 이를 이용하면 ECMAScript3에서는 isArray()함수를 다음과
   //같이 정의하여 사용하면 된다.
   var isArray = Function.isArray || function(o){
       return typeof o === "object" && Object.prototype.toString.call(o) === "[object Array]";
   };
   //사실 ECMAScript5의 Array.isArray()함수도 class속성을 검사하는 방법을 사용하고있다. Object.prototype.toString()을 사용

   //유사배열 객체 : 자바스크립트 배열에는 다른 객체에 없는 몇 가지 특징이 있다. 
   //* length 프로퍼티는 배열에 새 원소가 추가될때마다 자동으로 갱신된다., *length값을 임의로 설정함으로써 배열의 크기를 줄일 수 있다.
   //* 배열은 Array.prototype에 정의된 유용한 메서드들을 상속한다., * 배열의 class속성값은 "Array"로 설정된다. 
   //이것은 일반 객체와는 다른, 자바스크립트 배열만의  고유한 특성이다. 그러나 이것은 배열의 핵심적인 특성이 아니다. length 프로퍼티와 양의 정수 이름의 프로퍼티가
   //있는 객체는 일종의 배열로 취급할 수 있는 것이다. 이처럼 배열과 유사한 객체는 실무에서 자주 나타난다. 비록 배열 메서드를 직접 호출한다거나 length 프로퍼티가 배열에
   //고유한 어떤 동작을 하리라고 기대할수는 없지만 실제 배열을 순회하는데 사용했던 기존 코드를 그대로 활용할 수있다. 실제로 수 많은 배열 알고리즘이 기존 배열뿐 아니라
   //유사 배열 객체에서도 잘작동한다. 작성한 알고리즘이 배열을 읽기 전용으로 다루거나 배열의 길이를 바꾸지 않는다면 더욱 더 그렇다. 
   //다음 코드는일반적인 객체를 배열과 유사한 객체로 만들기위해 속성들을 추가한다. 이렇게 만들어진 유사 배열(pseudo-array)의 원소를 순회하는 예를 살펴보자. 
   var a = {}; //일반적인 빈 객체로 시작한다. 
   //배열과 유사한 객체로 만들기위해 속성들을 추가한다. 
   var i = 0;
   while(i < 10)
   {
       a[i] = i*i;
       i++;
   }
   a.length = i;
   //이 객체가 마치 실제 배열인 것처럼 반복문을 수행한다. 
   var total = 0;
   for(var j=0; j<a.length;j++)
   {
       total += a[j];
   }
   //Arguments 객체는 배열과 유사한 객체다. 클라이언트 측 자바스크립트에서는 document.getElementsByTagName()과 같은 상당수의 DOM메서드가 배열과 유사한 객체를 반환한다.
   //아래의 함수는 객체가 배열과 유사한지 판별하는 함수다.
   //o가 배열과 유사한 객체인지 판별한다.
   //문자열과 함수는 length 프로퍼티를 갖고 있지만, 이를 typeof를 통해서 걸러낼 수 있다
   //클라이언트 측 자바스크립트에서는 DOM의 text node가 length 프로퍼티를 갖고 있고
   //이를 o.nodeType != 3으로 걸러낼수 있다. 
   function isArrayLike(o)
   {
       if(o && //o는 null이나 undefineded 등등이 아니다
        typeof o === "object" && //o는 객체다
       isFinite(o.length) && //o의 길이는 유한하다
       o.length >= 0 && //o의 길이는 0이상이다.       
        o.length === Math.floor(o.length)&&//o.length는 정수다.
        o.length < 4294967296) //o.length < 2의32승이 성립한다. 
            return true;//그러면 o는 유사 배열이다.
        else//아니면 배열과는 비슷하지 않다. 
            return false;
   }
   //ECMAScript5에서는 문자열을 배열처럼 사용할수 있다는 점을 살펴볼것이다(ECMAScript5 이전 버전을 사용하는 몇몇 브라우저에서는 문자열을 인덱스로 접근할 수 있다.)
   //하지만 문자열에 위의 함수를 적용해보면 대체로 false가 반환된다. 문자열은 배열로 다루기보다 문자열 그 자체로 다루는 편이 최선이다. 
   //자바스크립트 배열 메서드는 배열뿐 아니라 유사 배열 객체에도 적용이 가능하도록 범용(generic)메서드로 구현되었다. ECMAScript5의 모든 배열 메서드는 범용이다.
   //ECMAScript3에서는 toString()과 toLocaleString()을 제외한 모든 메서드가 범용이다. (concat()메서드는 예외다. 배열과 유사한 객체에 호출할수는 있으나)
   //반환될 배열에 해당 객체를 적절히 확장(expand)해 넣지는 못한다.) 유사 배열은 Array.prototype을 상속받지 않기 때문에 배열 메서드를 해당 객체의 메서드로
   //호출할수는 없다. 대신 Function.call메서드를 통해서 간접적으로 호출할 수있다. 
   var a = {"0":"a", "1":"b", "2":"c", length:3}; //배열과 유사한 객체
   Array.prototype.join.call(a, "+"); // a + b + c
   Array.prototype.slice.call(a,0);
   // => ["a","b","c",]: 진짜 배열이 복사되어 반환됨
   Array.prototype.map.call(a, function(x){
       return x.toUpperCase();
   }); //=? ["a","b","c"]
   //call()메서드를 사용하는 구현 기법에 대해서는 isArray()메서드에서 살펴봤다. call()메서드는 Function 객체의 메서드로 난중에 다시설명하겠다. 
   //ECMAScript5의 배열 메서드는 파이어폭스 1.5에서 처음 소개되었다. 범용 메서드들이어서 파이어폭스는 Array의 생성자를 통해 사용할수 있는 버전도 정의하였다. 
   //이를 사용하면 앞의 예제는 다음과 같이 작성될수 있다. 
   var a = {"0":"a", "1":"b", "2":"c", length:3}; //배열과 유사한 객체
   Array.join(a, "+");
   Array.slice(a,0);
   Array.map(a, function(x) { return x.toUpperCase();});
   //이러한 정적 함수 형태의 배열 메서드는 유사 배열을 다룰 때 유용하지만 표준이 아니라서 모든 브라우저가 지원한다는 보장이 없다. 따라서 이와 같은 메서드를
   //사용할 경우에는 사용하기 전에 다음과 같은 코드를 추가해야 한다. 
   Array.join = Array.join || function(a,sep){
       return Array.prototype.join.call(a,sep);
   };
   Array.slice = Array.slice || function(a, from, to){
       return Array.prototype.slice.call(a,from, to);
   };
   Array.map = Array.map || function(a, f, thisArg){
       return Array.prototype.map.call(a, f, thisArg);
   }

   //문자열을 배열처럼 사용하기 : ECMAScript5(뿐 아니라 ECMAScript 5이전 버전을 사용하는 IE8을 포함한 대부분의 최근 브라우저)에서는 문자열은 읽기 전용 배열처럼
   //동작한다 문자열의 각 문자는 charAt()메서드로 접근할 수도있지만 대괄호 []를 사용해 접근할수도있다. 
   var s = "test";
   s.charAt(0); // t
   s[1]; //e
   //typeof 연산자는 문자열에 대해서는 여전히 "string"을 반환한다. 문자열을 Array.isArray()에 넘겨보면 당연히 false가 반환된다. 
   //문자열을 인덱스로 접근함으로써 얻을수 있는 가장 큰 장점은 charAt()메서드 호출을 단순하게 []로 대체할수 있다는 것이다. 이렇게 코드를 대체함으로써 코드가
   //전보다 간결해지고 가독성이 높아진다. 전반적으로 기존의 메서드를 사용할 때보다 더 효율적이다. 하지만 여기서 중요한 사실은 문자열에 범용 배열 메서드들을 바로
   //사용할수 있다는 점이다. 
   s = "javaScript";
   Array.prototype.join.call(s, " "); //j a v a S c r i p t
   Array.prototype.filter.call(s, function(x){
       return x.match(/[^aeiou]/); //오직 모음의 경우만 true를 반환한다. 
   }).join(""); //문자열에서 모음을 제거한 "JvScrpt"를 반환한다. 
   //문자열은 변하지 않는 값이라서 읽기전용 배열로만 다룰수 있음을 알아두자. push()와 sort(), reverse(), splice()와 같은 배열 메서드는 배열을 직접 수정하므로 문자열에는 동작하지
   //않는다. 그러나 배열 메서드를 사용해 문자열을 수정하려고 해도 오류갑 ㅏㄹ생하지는 않으며 아무런 부수 효과없이 종료될 뿐이다. 
};
