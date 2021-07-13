//
//  main.m
//  RandomPossessions
//
//  Created by macmini on 2021/07/11.
//

#import <Foundation/Foundation.h>
#import "Possession.h"
int main(int argc, const char * argv[]) {
    @autoreleasepool {
        // insert code here...
        //mutable 배열을 만들고 items 변수에 주소를 저장한다.
        NSMutableArray *items = [[NSMutableArray alloc] init];
        //스트링을 인자로 주면서 addObject: 메시지를 items 변수가 가리키는 NSMutableArray에 보낸다.
        [items addObject:@"One"];
        [items addObject:@"Two"];
        [items addObject:@"Three"];
        //또다른 메시지 insertObject:atIndex:를 items 객체에 보낸다.
        [items insertObject:@"Zero" atIndex:0];
        for(int i=0; i<[items count]; i++)
        {
            //배열에서 i번째 객체를 얻어 NSLog에 인자로 넘긴다.
            //은연중에 디스크립션 메시지를 해당 객체로 전달한다.
            NSLog(@"%@",[items objectAtIndex:i]);
        }
        Possession *p = [[Possession alloc] init];
        //새로운 NSString, "Red Sofa"를 만들고 Pssession에게 넘겨준다.
        [p setPossessionName:@"Red Sofa"];
        //새로운 NSString, "A1B2c"를 만들고 Possession에게 넘겨준다.
        [p setSerialNumber:@"A1B2C"];
        //100을 Possession의 valueInDollars에 설정한다.
        [p setValueInDollars:100];//앱을 빌드하고 실행한다. 이제 dateCreate를 제외한 모든 인스턴스 변수의 값을 볼수 있다. dateCreated는 조만간 다룰 것이다.
        //%@를 토큰으로 가지는 NSLog는 상응하는 인자의 description을 인쇄하는 것을 기억한다.
        //앱을 빌드하고 실행하고 로그 내비게이터에서 결과를 점검한다. 다음과 같은 로그를 볼 것이다.
        //Red Sofa (A1B2C): Worth $100, recorded on (null)상위 클래스로부터 오버라이딩하지 않고완전히 새로운 인스턴스 메소드를 만들고 싶다면 어떻게 해야 할까? 헤더 파일에서 새로운 메소드를 선언하고 구현 파일에서 정의한다. 시작해볼 첫 번째 메소드는 객체의 초기화 메소드(initializer)다.
        NSLog(@"%@",p);
    }
    return 0;
}
