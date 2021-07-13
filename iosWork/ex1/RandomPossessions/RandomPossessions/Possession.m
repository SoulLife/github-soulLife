//
//  Possession.m
//  RandomPossessions
//
//  Created by macmini on 2021/07/12.
//
//Product > Build를 선택하거나 <커맨드>-B를 사용해 앱을 빌드한다. 컴파일 에러나 경고가 발생하지 않도록 한다. 이제 접근자 메소드가 선언되고 정의되었으므로, Possession인스턴스에 메시지를 보내 인스턴스 변수를 가져오거나 설정할 수 있다. 테스트해 보자. main.m에서 Possession의 헤더 파일을 임포트하고 새로운 Possession인스턴스를 만든다. 인스턴스가 만들어진 후, 콘솔에 인스턴스 변수를 기록한다.
//앱을 빌드하고 실행한다. 로그 내비게이터에서 가장 최근의 로그를 선택해 콘솔을 검사한다. 이전 콘솔 출력 다음으로 세 개의(null)스트링과 0을 보여주는 행을 보게 된다(객체가 만들어질때, 모든 인스턴스 변수는 0으로 설정된다. int 같은 원시 타입은 그 값이 0이고 객체 포인터는 nil을 가리킨다) Possession에 실체감을 주기 위해 새로운 객체를 만들고 세터 메소드에 인자로 줄 필요가 있다. main.m에 다음 코드를 입력한다
//인스턴스 메소드 : 모든 인스턴스 메소드가 접근자인 것은 아니다. 다른 일을 처리하는 메시지를 인스턴스에 보내고 싶을 때가 종종 있다. 그런 메소드의 하나가 description이다. Possession인스턴스를 설명하는 스트링을 반환하도록 description메소드를 구현할 수 있다. Possession이 NSOjbect의 하위 클래스이기 때문에 Possession클래스에서 이 메소드를 재구현하면 이를 오버라이딩(overriding)하는 것이다. (NsObject는 이미 description메소드를 선언하고 있다.)메소드를 오버라이딩할 때는 구현 파일에 해당 메소드를 정의하기만 하면 된다. 이미 상위 클래스에서 선언했으므로 다시 헤더 파일에서 선언할 필요는 없다.
//Possession.m에서 description메소드를 오버라이드한다. 새로운 코드는 기존 메소드의 중괄호({})안만 아니라면 @implementation과 @end사이의 어디에든 올 수 있다.
//이제 Possesion인스턴스에 description 메시지를 보낼 때마다 해당 인스턴스를 설명하는 NSString을 반환할 것이다.(오브젝티브-C와 메모리 관리에 익숙한 독자는 당황하지 말기 바란다. 다음 장에서 이 코드에 있는 문제점을 바로잡을 것이다.)main.m에서 이 새로운 메소드를 Possession의 인스턴스 변수를 인쇄하는 NSLog에 대체한다.
//초기화 메소드 : 이 장의 초입에서 어떻게 인스턴스가 만들어지는지 설명했다. 클래스가 alloc이란 메시지를 받는다. alloc은 해당 클래스의 인스턴스를 만들고 그에대한 포인터를 반환한다. 그리고 인스턴스는 init메시지를 받는다. init는 인스턴스 변수에게 초기값을 준다. 보다 복잡한 클래스를 작성하기 시작하면서 객체가 스스로를 초기화할 수 있는 인자를 취하는 init같은 초기화 메소드를 작성하고 싶어진다. 예를들면 하나 또는 하나 이상의 변수를 초기화 과정의 일부로 전달할수 있다면 Possession클래스는 보다 깔끔해질 것이다.
//다른 가능한 초기화 시나리오에도 대응하기 위해 많은 클래스들은 하나 이상의 초기화 메소드를 가진다. 모든 초기화 메소드는 init로 시작한다. 초기화 메소드를 이런 식으로 명명하면 초기화 메소드가 타 인스턴스 메소드와 다르지 않게 된다. 단지 명명 규칙(naming convention)일 뿐이다. 하지만 오브젝티브-C 커뮤니티에게 있어 가장 중요한 것은 명명 규칙이다. 반드시 따라야 한다. (오브젝티브-C에서 명명 규칙을 무시하면 상상하는 것보다 더 나쁜 문제가 야기된다.)
//모든 클래스에 아무리 많은 초기화 메소드가 있더라도 하나의 메소드만 지정 초기화메소드(designated initializer)로 선택된다. NSObject의 경우 오직 하나의 초기화 메소드 init이 있고 이것이 지정 초기화 메소드다. 지정 초기화 메소드는 객체의 모든 인스턴스 변수가 유효하도록 한다.(유효는 여러 가지 의미를 갖지만 이 문맥에서는 해당 객체가 초기화된후 메시지를 보내면 결과를 예상할 수 있고 잘못된 일이 생기지 않는 것을 의미한다. 보통 지정 초기화 메소드는 가장 중요하고 빈번히 사용되는 인스턴스 변수에 대한 파라미터를 가진다.
//Possession클래스는 네 개의 인스턴스 변수를 갖지만 세 개만 쓰기가 가능하다. 그러므로 Possession의 지정 초기화 메소드는 세 개의 인자를 받아들일 필요가있다. Possession.h에서 지정 초기화 메소드를 다음과 같이 선언한다.
//이 메소드의 이름 또는 셀렉터는 initWithPossessionName:valueInDollars:serialNumber:다 이 셀렉터는 세 개의 라벨(initWithPossessionName:, valueInDollars:, serialNumber:)을 가진다. 이는 이 메소드가 세 개의 인자를 받아들이는 것을 말해준다. 각각의 인자는 타입과 파라미터 이름을 가진다. 선언부에서는 타입이 라벨 다음 괄호 안에 나온다. 파라미터는 타입 다음에 나온다. 그래서 라벨 initWithPossessionName:은 NSString 타입의 인스턴스에 대한 포인터를 예상하고 있다. 해당 메소드의 몸체(body)안에서 가리켜진 NSString객체를 참조하기 위해 name을 사용 할수 있다.
//id 초기화 메소드의 선언부를 다시 한번 본다. 반환 타입은 id이며 임의 객체에 대한 포인터로 정의되어 있다(C언어의 void *와 비슷하다. 아이-디라고 읽는다)init메소드는 항상 id를 반환하도록 선언된다. 왜 반환타입을 Possession에 대한 포인터인 Possession *로 하지 않을까? 결국 그것이 이 메소드로부터 반환되는 객체의 타입인데 말이다. 하지만 만약 Possession이 하위 클래스가 있다면 문제가 생긴다. 하위 클래스는 Possession으로부터 초기화 메소드와 반환 타입까지도포함해 모든 메소드를 상속받는다. 하위 클래스의 인스턴스가 이 초기화 메시지를 받을수 있다. 그럼 무엇을 반환받을 것인가? Possession이 아니라 하위 클래스의 인스턴스를 받아야 한다. 이렇게 생각할지도 모른다. "문제없어. 하위 클래스의 초기화 메소드를 오버라이드해서 반환 타입을 바꾸면 돼" 하지만 오브젝티브-C에서는 동일한 셀렉터와 상이한 반환 타입(또는 인자)을 가지는 두 개의 메소드를 가질 수 없다. 초기화 메소드가 임의 객체를 반환하도록 명시함으로써 하위 클래스에 어떤 일이 생길지 걱정할 필요가 없어진다. isa 프로그래머는 초기화 메소드가 반환하는 객체의 타입을 항상 알고 있다. (어떻게 아느냐고? 해당 객체는 우리가 alloc메시지를 보내는 클래스의 인스턴스다)우리만 객체의 타입을 아는 것이 아니라 객체 자체도 자기의 타입을 알고 있다. 모든 객체는 isa라는 인스턴스 변수를 가진다. alloc메시지를 클래스에 보내 인스턴스가 만들어질때 반환되는 객체의 isa인스턴스 변수가 객체를 만든 클래스를 다시 가리키도록 설정한다 이 포인터를 isa포인터라 한다. 왜냐하면 객체는 그 클래스의 하나의 인스턴스이기 때문이다.
//isa 포인터는 오브젝티브-C가 강력한 이유다. 런타임시 메시지가 객체에 보내지면 객체는 isa포인터에 명시된 클래스로 가서 나는 이런 메시지를 받았다. 매치하는 메소드를 실맹시켜라 라고 전한다. 이 점이 대부분의 컴파일된 언어와 다르다. 대부분의 컴파일된 언어의 경우 컴파일 타입에 어디에서 메소드가 실행될 것인지 정해진다.
#import "Possession.h"

@implementation Possession

-(id) initWithPossesionName:(NSString *)name valueInDollars:(int)value serialNumber:(NSString *)sNumber
{
    //상위 클래스의 지정 초기화 메소드를 호출한다.
    self = [super init];
    if(self)
    {
        //인스턴스 변수에게 초기값을 부여한다.
        [self setPossessionName:name];
        [self setSerialNumber:sNumber];
        [self setValueInDollars:value];
        dateCreated = [[NSDate alloc] init];
    }
    //새로 초기화된 객체의 주소를 반환한다
    return self;
}
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
//오버라이딩메소드구현
-(NSString *) description
{
    NSString *descriptionString = [[NSString alloc] initWithFormat:@"%@ (%@) : Worth $%d, recorded on %@",possessionName,serialNumber,valueInDollars,dateCreated];
    return descriptionString;
}
@end
