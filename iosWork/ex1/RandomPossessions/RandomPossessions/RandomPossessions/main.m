//
//  main.m
//  RandomPossessions
//
//  Created by macmini on 2021/07/11.
//

#import <Foundation/Foundation.h>

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
        //items 변수가 풀려난 메모리를 가리키게 하지 않는다.
        items = nil;
    }
    return 0;
}
