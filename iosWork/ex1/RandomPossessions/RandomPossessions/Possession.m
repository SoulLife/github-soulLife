//
//  Possession.m
//  RandomPossessions
//
//  Created by macmini on 2021/07/12.
//
//Product > Build를 선택하거나 <커맨드>-B를 사용해 앱을 빌드한다. 컴파일 에러나 경고가 발생하지 않도록 한다. 이제 접근자 메소드가 선언되고 정의되었으므로, Possession인스턴스에 메시지를 보내 인스턴스 변수를 가져오거나 설정할 수 있다. 테스트해 보자. main.m에서 Possession의 헤더 파일을 임포트하고 새로운 Possession인스턴스를 만든다. 인스턴스가 만들어진 후, 콘솔에 인스턴스 변수를 기록한다.
//앱을 빌드하고 실행한다. 로그 내비게이터에서 가장 최근의 로그를 선택해 콘솔을 검사한다. 이전 콘솔 출력 다음으로 세 개의(null)스트링과 0을 보여주는 행을 보게 된다(객체가 만들어질때, 모든 인스턴스 변수는 0으로 설정된다. int 같은 원시 타입은 그 값이 0이고 객체 포인터는 nil을 가리킨다) Possession에 실체감을 주기 위해 새로운 객체를 만들고 세터 메소드에 인자로 줄 필요가 있다. main.m에 다음 코드를 입력한다
#import "Possession.h"

@implementation Possession

-(void) setPossessionName:(NSString *)str
{
    possessionName = str;
}
-(NSString *)possessionName
{
    return possessionName;
}
-(void)setSerialNumber:(NSString *)str
{
    serialNumber = str;
}
-(NSString *)serialNumber
{
    return serialNumber;
}
-(void)setValueInDollars:(int)i
{
    valueInDollars = i;
}
-(int)valueInDollars
{
    return valueInDollars;
}
-(NSDate *)dateCreated
{
    return dateCreated;
}

@end
