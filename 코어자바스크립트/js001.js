window.onload = function () {    
   //커링함수 : 여러 개의 인자를 받는 함수를 하나의 인자만 받는 함수로 나눠서 순차적으로 호출될수 있게 체인 형태로 구성한 것을 말합니다. 앞서 살펴본 부분 적용 함수와
   // 기본적인 맥락은 일치하지만 몇 가지 다른 점이 있습니다. 커링은 한번에 하나의 인자만 전달하는 것을 원칙으로 합니다. 또한 중간 과정상의 함수를 실행한 결과는 그다음 인자를
   // 인자를 받기위해 대기만 할뿐으로 마지막 인자가 전달되기 전까지는 원본 함수가 실행되지 않습니다. (부분 적용 함수는 여러 개의 인자를 전달할 수 있고 실행 결과를 재실행 할때원본 함수가
   //무조건 실행됩니다.)
   var curry3 = function(func)
   {
       return function (a)
       {
           return function (b)
           {
               return func(a,b);
           };
       };
   };
   var getMaxWith10 = curry3(Math.max)(10);
   console.log(getMaxWith10(8)); //10
   console.log(getMaxWith10(25)); //25
   var getMinWith10 = curry3(Math.min)(10);
   console.log(getMinWith10(8)); //8
   console.log(getMinWith10(25)); // 10
   //부분 적용 함수와 달리 커링함수는 필요한 상황을 직접 만들어 쓰기 용이합니다. 필요한 인자개수만큼 함수를 만들어 계속 리턴해 주다가 마지막에 만 짠 하고 조합해서 
   //리턴해주면 되기 때문이죠. 다만 인자가 많아질수록 가독성이 떨어진다는 단점이 있습니다. 
   var curry5 = function(func)
   {
       return function (a)
       {
           return function (b)
           {
               return function (c)
               {
                   return function (d)
                   {
                       return function (e)
                       {
                           return func(a,b,c,d,e);
                       };
                   };
               };
           };
       };
   };
   //5개만 받아서 처리했음에도 이를 표현하기 위해 자그마치 13줄이나 소모했습니다. 다행히 ES6에서는 화살표 함수를 써서 같은 내용을 단한줄에 표기할수 있습니다.
   var curry5 = func => a => b => c => d => e => func(a,b,c,d,e);
   //화살표 함수로 구현하면 커링 함수를 이해하기에 훨씬 수월합니다. 화살표순서에 따라 함수에 값을 차례로 넘겨주면 마지막에 func가 호출될거라는 흐름이 한눈에 파악됩니다.
   //각 단계에서 받은 인자들을 모두 마지막 단계에서 참조할 것이므로 GC되지 않고 메모리에 차곡차곡 쌓였다가 마지막 호출로 실행 컨텍스트가 종료된 후에야 비로소 한꺼번에 GC의 수거 대상이 됩니다.
   //이 커링 함수가 유용한 경우가 있습니다. 당장 필요한 정보만 받아서 전달하고 또 필요한 정보가 들어오면 전달하는 식으로 하면 결국 마지막 인자가 넘어갈 때까지  함수실행을 
   // 미루는 셈이 됩니다. 이를 함수형 프로그래밍 에서는 지연실행 이라고 칭합니다. 원하는 시점까지 지연시켰다가 실행하는 것이 요긴한 상황이라면 커링을 쓰기에 적합할 것입니다. 
   // 혹은 프로젝트 내에서 자주 쓰이는 함수의 매개변수가 항상 비슷하고 일부만 바뀌는 경우에도 적절한 후보가 될 것입니다. 
   var getInfomation = function(baseUrl){ //서버에 요청할 주소의 기본 URL
        return function (path)//path 값
        {
            return function (id) //id값
            {
                return fetch(baseUrl + path + "/" + id); //실제 서버에 정보를 요청
            };
        };
   };
   //ES6
   var getInfomation = baseUrl => path => id => fetch(baseUrl + path + "/" + id);
   //HTML5의 fetch함수는 url을 받아 해당 url에 HTTP 요청을 합니다. 보통 REST API를 이용할 경우 baseUrl은 몇개로 고정되지만 나머지 path나 id값은 매우 많을수 있죠
   // 이런 상황에서 서버에 정보를 요청할 필요가 있을 때마다 매번 baseUrl부터 전부 기입해 주기보다는 공통적인 요소는 먼저 기억시켜두고 특정한 값(id)만으로 서버 요청을
   // 수행하는 함수를 만들어두는 편이 개발 효율성이나 가독성 측면에서 더 좋을 것입니다.

   var imageUrl = "http://imageAddress.com/";
   var productUrl = "http://productAddress.com";
   //이미지 타입별 요청 함수 준비
   var getImage = getInfomation(imageUrl); //http://imageAddress.com
   var getEmotion = getImage("emotion"); //http://imageAddress.com/emotion
   var getIcon = getImage("icon"); //http://imageAddress.com/icon

   //제품 타입별 요청 함수 준비
   var getProduct = getInfomation(productUrl); //http://productAddress.com
   var getFruit = getProduct("fruit"); //http://productAddress.com/fruit
   var getVegetable = getProduct("vegetable"); //http://productAddress.com/vegetable

   //실제요청
   var emotion1 = getEmotion(100); //http://imageAddress.com/emotion/100
   var emotion2 = getEmotion(102);//http://imageAddress.com/emotion/102
   var icon1 = getIcon(205);//http://imageAddress.com/icon/205
   var icon2 = getIcon(234);http://imageAddress.com/icon/234
   var fruit = getFruit(300);http://imageAddress.com/fruit/300
   var fruit2 = getFruit(400); //http://imageAddress.com/fruit/400
   var vegetable = getVegetable(456);//http://imageAddress.com/vegetable/456
   var vegetable2 = getVegetable(789);//http://imageAddress.com/vegetable/789

   const logger = store => next => action => {
       console.log("dispatching",action);
       console.log("next state",store.getState());
       return next(action);
   };
   //Redux Middleware "thunk"
   const thunk = store => next => action => {
       return typeof action === "function"? action(dispatch, store.getState):next(action);
   };
   //위두 미들웨어는 공통적으로 store, next, action순서로 인자를 받습니다. 이중 store는 프로젝트 내에서 한 번 생성된 이후로는 바뀌지 않는  속성이고 dispatch의 의미를 
   //가지는 next역시 마찬가지지만 action의 경우는 매번 달라집니다. 그러니까 store와 next값이 결정되면 Redux 내부에서 logger또는 thunk에 store, next를 미리 넘겨서 반환된
   // 함수를 저장시켜놓고 이후에는 action만 받아서 처리할 수 있게끔 한 것이죠

};
