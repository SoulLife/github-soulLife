window.onload = function () {    
   //함수의 파셜 애플리케이션 : f의bind()메서드는 지정된 컨텍스트와 지정된 인자 집합을 사용하여 함수 f를 호출하는 함수를 반환한다. 즉 함수를 어떤 객체에 바인딩하고,
   //부분적으로 인자를 적용한다는 뜻이다. bind()메서드는 대상 함수를 호출하기 위해 부분적으로 인자를 적용할 때 부분 인자를 왼쪽에 적용하는데 이는 bind()에 넘긴 
   //인자들은 대상 함수에 전달되는 인자 목록의 시작점에 위치한 다는 뜻이다. 하지만 이러한 부분 인자들을 오른쪽에 적용할 수도 있다.

   //유사 배열 객체(또는 객체의 뒤쪽 일부분만)를 실제 배열로 변환하는 유틸리티 함수 이후 코드에서 인자 객체를 실제 배열로 변환하는데 사용함 
   function array(a, n){ return Array.prototype.slice.call(a, n|| 0);}
   //이 함수에 전달된 인자는 대상 함수의 인자 목록에 대해 왼쪽으로 전달된다. 
   function partialLeft(f /*...*/){
      var args = arguments; //외부 인자 배열을 저장한다. 
      return function() { //함수를 반환
         var a = array(args, 1); //외부 인자의 1번 인덱스부터 시작(0번은 함수f)
         a = a.concat(array(arguments)); // 이후 이 내부 함수로 전달된 모든 인자를 추가
         return f.apply(this, a); //그다음 지금까지 만든 인자 목록으로 f를 호출
      };
   }
   //이 함수에 전달된 인자는 대상 함수의 인자 목록에 대해 오른쪽으로 전달된다. 
   function partialRight(f /*...*/){
      var args = arguments; //외부 인자 배열을 저장한다
      return function(){ //함수를 반환
         var a = array(arguments); //먼저 내부 함수에 전달된 인자로 시작
         a = a.concat(array(args,1)); //외부 인자의 1번 인덱스부터 나머지를 추가
         return f.apply(this, a); //이후 지금까지 만든 인자 목록으로 f를 호출
      };
   }
   //이 함수에 전달된 인자는 템플릿으로 사용된다. 인자 목록에서 정의되지 않은(undefined)값은 내부함수에 전달된 인자의 값으로 채워진다. 
   function partial(f /*...*/){
      var args = arguments; 
      return function(){
         var a = array(args, 1); //외부 인자의 1번 인덱스로부터 시작한다
         var i=0, j=0; 
         //args에 대해 루프를 돌며 undefined값을 만나면 내부 함수에 전달된 인자 값으로 설정한다. 
         for(; i<a.length; i++)
            if(a[i] === undefined)a[i] = arguments[j++];
         //이제 남은 내부 인자 값들을 추가한다
         a = a.concat(array(arguments,j));
         return f.apply(this, a);
      };
   }
   //세 인자를 전달하는 함수
   var f = function(x,y,z) { return x*(y - z);};
   //이 세 파셜 애플리케이션이 서로 어떻게 다른지 살펴보라
   partialLeft(f, 2)(3,4); //-2 : cjtqjsWo dlswkfh qkdlseldgka : 2 * (3-4)
   partialRight(f, 2)(3,4); // 6 : 마지막 인자로 바인딩함: 3 * (4-2)
   partial(f, undefined, 2)(3,4); // -6 : 가운데 인자로 바인딩함: 3 * (2-4)

   //이 파셜 애플리케이션 함수를 사용하면 앞서 정의한 함수들을 활용하는 흥미로운 함수를 쉽게 정의할수있다. 다음 에 몇가지 예제가 있다. 
   var increment = partialLeft(sum, 1);
   var cuberoot = partialRight(Math.pow, 1/3);
   String.prototype.first = partial(String.prototype.charAt,0);
   String.prototype.last = partial(String.prototype.substr,-1,1);
   //파셜 애플리케이션은 고차 함수와 결합해서 사용할 때 좀더 흥미롭다. 다음 예제는 앞에서 다룬 not()함수를 조합(composition)과 파셜 애플리케이션을 사용하여 정의하는 방법을 다룸
   var not = partialLeft(compose,function(x) { return !x;});
   var even = function(x) { return x % 2 ===0;};
   var odd = not(even);
   var isNumber = not(isNaN);
   //또한 평균과 표준편차를 구하는 방법을 조합과 파셜 애플리케이션을 사용하여 진정한 함수형 프로그래밍 스타일로 구현할수 있다. 

   var data = [1,1,3,5,5]; //외부 데이터
   var sum = function(x, y) { return x + y;}; //두 기본 함수
   var product = function(x, y) { return x * y;};
   var neg = partial(product, -1); //몇가지 다른 것들을 정의
   var square = partial(Math.pow,undefined, 2);
   var sqrt = partial(Math.pow,undefined, .5);
   var reciprocal = partial(Math.pow, undefined, -1);

   //이제 평균과 표준 편차를계산함 모든 함수 호출뿐이며 어떠한 연산자도 사용되지 않았다. 
   var mean = product(reduce(data, sum), reciprocal(data.length));
   var stddev = sqrt(product(reduce(map(data, compose(square, partial(sum, neg(mean)))), sum),reciprocal(sum(data.length,-1))));
}