window.onload = function () {    
    //every()와 some() : every()와 some()메서드는 배열 조건자 함수(predicate)다. 두 메서드는 인자로 주어진 조건자 함수를 배열에 적용하며 결과로, true나 false를
    //반환한다. every()메서드는 수학에서 모든 곳에 대하여(for all)를 뜻하는 정량자 A(반대로표시)와 같다. 다시 말해 전달인자로 넘긴 함수가 배열의 모든 원소에
    //대하여 true를 반환하는 경우 every()메서드는 true를 반환한다. 
    a = [1,2,3,4,5];
    a.every(function(x) { return x<10;}) ;//true: 모든 값이 10보다 작다. 
    a.every(function(x) { return x %2===0;}); //flase: 모든값이 짝수는 아니다. 
    //some()메서드는 수학에서 일부분에 대하여(there exists)를 뜻하는 정량자 3와 같다. 다시 말해 전달인자로 넘긴 함수가 배열의 일부 원소에 대해 true를 반환하는
    //경우에 some()메서드는 true를 반환한다. 
    a = [1,2,3,4,5];
    a.some(function(x) { return x%2===0;}); //배열 a의원소 중에 짝수가 있기 때문에 반환값은 true다
    a.some(isNaN); //배열 a에는 숫자만 있기 때문에 반환값은 false

    //every()와 some()메서드는 반환값이 결정되면 배열의 원소 순회를 중단한다. some()메서드는 조건 함수의 반환값이 true를 만족하는 첫 번째 원소를 만나면 
    //즉시 true를 반환하므로, 모두 false인 경우에만 전체 원소를 순회하게 된다. 
    //every()메서드는 some()과 반대다. 조건 함수의 반환값이 false를 만족하는 첫 번째 원소를 만나면 즉시 false를 반환하고 모두 true인 경우에만 전체 원소를 순회한다.
    //수학적 관례에 따르면 빈 배열인 경우 every()메서드는 항상 true를, some()메서드는 항상 false를 반환한다.

};
