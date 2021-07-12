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
        NSLog(@"%@ %@ %@ %d",[p possessionName],[p dateCreated], [p serialNumber], [p valueInDollars]);
    }
    return 0;
}
