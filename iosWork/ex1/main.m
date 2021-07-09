//
//  main.m
//  Direct Manipulation
//
//  Created by macmini on 2021/07/08.
//

#import <UIKit/UIKit.h>
#import "AppDelegate.h"
@interface DragView: UIImageView
{
    CGPoint startLocation;
}
@end
@implementation DragView

-(id) initWithImage: (UIImage *) anImage
{
    NSLog(@"hehe");
    if(self = [super initWithImage:anImage])
        self.userInteractionEnabled = YES;
    return self;
}
-(void) touchesBegan:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event
{
    startLocation = [[touches anyObject] locationInView:self];
    NSLog(@"haha");
    [self.superview bringSubviewToFront:self];
}
-(void) touchesMoved:(NSSet<UITouch *> *)touches withEvent:(UIEvent *)event
{
    CGPoint pt = [[touches anyObject] locationInView:self];
    NSLog(@"hoho");
    float dx = pt.x - startLocation.x;
    float dy = pt.y - startLocation.y;
    CGPoint newcenter = CGPointMake(self.center.x + dx, self.center.y+dy);
    self.center = newcenter;
}
//추가 아래의 코드에서 제스처 인식자가 상호 작용의 종료시점을 확인한 후 뷰의 위치를 갱신하고 Transform 객체의 위치 값을 재설정하는 부분을 눈여겨 보자. 이런 방식에서는 별도의 로컬 스토리지가 필요치 않고 touch
//esBegan:withEvent: 메소드 역시 사용할 필요가없다. 이와 다른 방식에서는 이전 터치 상황을 저장해서 터치의 흐름을 관리해야 한다. 
-(void) handlePan: (UIPanGestureRecognizer *) uigr
{
    if(uigr.state == UIGestureRecognizerStateEnded)
    {
        CGPoint newCenter = CGPointMake(self.center.x + self.transform.tx, self.center.y + self.transform.ty);
        self.center = newCenter;
        CGAffineTransform theTransform = self.transform;
        theTransform.tx = 0.0f;
        theTransform.ty = 0.0f;
        self.transform = theTransform;
        return;
    }
    CGPoint translation = [uigr translationInView:self.superview];
    CGAffineTransform theTransform = self.transform;
    theTransform.tx = translation.x;
    theTransform.ty = translation.y;
    self.transform = theTransform;
}
@end
//예제 팬 제스처 인식자 추가
//제스처 인식자를 이용하면 터치 핸들러를 직접 추가하지 않고서도 예제1-1과같은 상호작용을 구현할수 있다. 팬 제스처 인식자는 드래그 제스처에 반응하며 iOS가 팬 동작을 감지하면 이에 알맞은 콜백 메소드를 할당한다.
//예제1-2 역시 예제 1-1처럼 터치를 감지하면 제스처 인식자를 추가한다. iOS가 사용자의 DrawView드래그 동작을 감지하면 handlePan:콜백 메소드는 이동한 거리만큼 뷰의 중앙점을 옮긴다.
//이번 예제에서는 이동한 거리 계산에 약간은 특이한 방법을 사용한다. 인스턴스 변수(previousLocation)에 원래 뷰의 위치를 저장한 후 팬 동작 감지 콜백이 호출될때마다 이동한 위치의 오프셋 값을 계산해 뷰의 위치
//값으로 업데이트한다. 이렇게 하면 어파인 변환 방식 또는 이번 예제에서처럼 뷰의 중심 위치를 이동시킬 때 좀처럼 쓰지 않는 setTranslation:inView: 메소드 방식을 적용할 수 있다. 여기서는 dx/dy 오프셋 값
//을 생성한 후 이 값을 뷰의 중심 위치 값으로 적용해서 실제 뷰의 프레임을 변경한다. 어파인 변환을 이용하면 간단한 오프셋 설정으로는 할수 없는 회전, 크기 조절, 위치 이동 등의 작업을 한번에 처리할수 있다. 어파인
//변환을 위해서는 제스처 인식자가 변경된 위치값을 상대 좌표가 아닌 절대 좌표로 전달해야 한다. 반본적으로 벡터 형식의 오프셋 값을 적용하는 대신 UIPanGestureRecognizer는 해당 뷰의 좌표 체계에 따른 하나의
//벡터 좌표 값만을 반환한다. 이때 좌표 체계는 일반적으로 해당 뷰의 상위에 있는 뷰의 것을 따른다. 이와 같은 벡터 이동은 간단한 어파인 변환 계산으로 가능하고, 다른 변환 동작에도 한꺼번에 적용할 수 있는 통일된
//위치 값 계산에 사용될 수 있다. 제스처의 상태 정보를 저장하지 않은 채 직접 변환 작업을 수행하는 handlePan:메소드는 다음과 같다.

int main(int argc, char * argv[]) {
    NSString * appDelegateClassName;
    @autoreleasepool {
        // Setup code that might create autoreleased objects goes here.
        //appDelegateClassName = NSStringFromClass([AppDelegate class]);
        NSLog(@"dehe");
        int retVal = UIApplicationMain(argc, argv, nil, @"DragView");
        return retVal;
    }
    
    
}
