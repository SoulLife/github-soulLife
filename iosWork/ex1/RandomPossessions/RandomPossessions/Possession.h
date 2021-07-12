//
//  Possession.h
//  RandomPossessions
//
//  Created by macmini on 2021/07/12.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN
//Possession 클래스를 만들면 Possession.h와 Possession.m이란 두개의 파일이 만들어진다. 프로젝트 내비게이터에서 이 파일들을 찾아본다. Possession.h는 헤더파일(또는 인터페이스 파일)이다. 헤더 파일은 새 클래스의 이름, 상위 클래스, 인스턴스 변수와 이 클래스가 구현하는 메소드를 선언한다. Possession.m은 구현 파일이다. 클래스가 구현하는 메소드의 코드를 담고 있다. 모든 오브젝티브-C 클래스는 이 두개의 파일을 가진다. 헤더 파일은 클래스 인스턴스를 위한 사용자 메뉴얼이고 구현 파일은 클래스가 실제로 작동하는 방법을 정의하는 엔지니어링 디테일이라고 봐도 좋다.
//프로젝트 내비게이터에서 Possession.h를 클릭해 편집기 영역으로 열어본다. 현재 이 파일은 다음과 같을 것이다. 인터페이스 선언을 분해해 무엇을 의미하는지 알아보자. 먼저 C언어의 모든 키워드는 유효하다. 그리고 오브젝티브-C가 추가한 키워드는 @접두어로 구분할수있다. 오브젝티브-C에서 클래스를 정의하려면 @interface키워드 뒤에 새로운 클래스의 이름을 적으면 된다. 콜론(:)다음에 상위 클래스의 이름을 적는다. Possession의 상위 클래스는 NSObject다. 오브젝티브-C는 단일 상속만 허용한다. 따라서 여러분은 오직 다음과 같은 패턴만 보게된다. @interface className : SuperclassName
//다음으로 인스턴스 변수를 선언하는 부분이 나온다. 인스턴스 변수는 클래스와 상위 클래스 선언 다음부터 시작하는 중괄호({})안에 선언되어야만 한다. 중괄호를 닫은 후에는 클래스가 구현하는 메소드를 선언해야 한다. 마지막으로 @end키워드가 새로운 클래스의 선언을 종료한다.

//인스턴스 변수 : 지금까지 Possession클래스는 상위클래스 NSObject에 아무것도 추가하지 않았다. 필요한 것은 소유물에 있을것 같은 몇 개의 인스턴스 변수다. 일상 생활에서 소유물은 이름과 일련번호, 가격, 생성날짜 등을 가진다.Possession.h에서 Possession 클래스에 인스턴스 변수를 추가한다.
//이제 Possession의 모든 인스턴스는 단순한 integer를 위한 장소를 가진다. 또한 두 개의 NSString 인스턴스와 하나의 NSDate인스턴스에 대한 참조를 저장할 장소를 가진다(참조는 다른 말로 포인터라고 한다 별표(*)는 해당 변수가 포인터임을 가리킨다) 전체적으로 객체 네 개(Possession, 두 개의 NSSTring과 NSDate)를 보여준다. 각각의 객체는 그 자체로서 객체이며 다른 객체와 독립적으로 존재한다. Possession객체는 다른 세개의 객체에 대한 포인터를 가진다. 이 포인터들은 Possession객체의 인스턴스 변수다. 예를 들면, 각각의 Possession은 possessionName이라는 포인터 인스턴스 변수를 가진다.
//possessionName은 "Red Sofa"라는 내용을 가지는 NSString 인스턴스를 가리키고 있다. 그러나"Red Sofa"스트링은 Possession 객체안에 있지 않다. Possession객체는 "Red Sofa" NSString이 메모리상에서 어디에 있는지 알고 그 주소를 possessionName에 저장한다. 이런 관계를 이해하는 한 방법은 "Possession은 이스트링을 PossessionName이라 부른다 이다. 인스턴스 변수 valueInDollars의 경우에는 상황이 다르다. 이 인스턴스 변수는 다른 객체에 대한 포인터가 아니다. 그냥 int이다. 포인터가 아닌 인스턴스 변수는 객체 내부에 저장된다. 처음에는 이해하기 쉽지 않은 개념이다.
//접근자 메소드 : 이제 여러분은 인스턴스 변수를 갖게 되었으므로 이 변수의 값을 읽고 쓰는 방법을 알아야 한다. 객체지향 언어에서는 인스턴스 변수의 값을 읽고 쓰는 메소드를 접근자(accessor)라 하며 각각을 게터(getter)와 세터(setter)라 한다. 이런 메소드가 없다면 다른 객체의 인스턴스 변수에 접근할 방법이 없다.
//게터
/*
 -(NSString *)possessionName
 {
    //Possession이 possessionName이라 부르는 객체의 포인터를 반환한다.
    return possessionName;
 }
 //세터
 -(void)setPossessionName:(NSString *)newPossessionName
 {
    //인스턴스 변수가 다른 스트링을 가리키도록 바꾼다. Possession은 이 새로운 스트링을 possessionName이라 부를 것이다.
    possessionName = newPossessionName;
 }
 Possession의 possessionName에 접근하려면 다음중 한가지 메시지를 보내면 된다.
 //새로운 Possession인스턴스를 만든다
 Possession *p = [[Possession alloc] init];
 //possessionName을 새로운 NSString에 설정한다
 [p setPossessionName:@"Red Sofa"];
 //Possession의 possessionName의 포인터를 가져온다.
 NSString *str = [p possessionName];
 //해당 객체를 인쇄한다.
 NSLog(@"%@", str); //This would print "Red Sofa"
 */
//오브젝티브-C에서 세터 메소드의 이름은 set에 인스턴스 변수명을 붙인다. POssessionName의 경우는 setPossessionName이다. 게터 메소드의 이름은 다른 언어에서는 getPossessionName일수도 있지만 오브젝티브-C에서는 인스턴스 변수명이다. 코코아 터치 라이브러리는 여러분의 클래스도 이런 전통을 따를 것이라고 가정한다. Possession.h에서 인스턴스 변수에 대한 접근자 메소드를 정의한다. valueInDollars, possessionName, serialNumber에 대한 게터와 세터 메소드가 필요하다. dateCreated는 게터만 필요하다.
//오브젝티브-C를 다뤄본 경험이 있는 독자를 위해 프로퍼티에 대해서는 다음 장에서 설명하겠다. 이제 접근자 메소드가 선언되었으므로구현 파일에서 정의될 필요가 있다. Possession.m파일을 프로젝트 내비게이터에서 선택해 편집기 영역으로 들어간다.  구현파일의맨 위에서는 해당 클래스의 헤더 파일을 임포트(import)해야 한다. 클래스의 구현은 클래스가 어떻게 선언되었는지를 알아야 한다. (파일을 임포트하는 것은 파일이 한 번만 인클루드(include)되는 것을 보장받는 점만 제외하면 C언어에서 파일을 인클루드하는 것과 같다.)
//임포트 문장 다음에는 @implementation키워드로 시작하는 구현 블록이 온다. @implementation뒤에는 구현할 클래스의 이름을 적는다. 구현 파일에서 모든 메소드 정의는 구현 블록 안에 존재한다 메소드는 @end 키워드로 블록을 닫을 때까지 정의된다.
//다음 장까지 메모리 관리에 대한 내용은 건너뛴다. 그래서 POssession의 접근자 메소드는 매우 간단하다. 세터 메소드는 적절한 인스턴스 변수가 들어오는 (incoming)객체를 가리키도록 할당한다. 게터 메소드는 인스턴스 변수가 가리키는 객체에 대한 포인터를 반환한다.(valueInDollars의 경우 세터에서는 들어온 값을 인스턴스 변수에 할당하고 게터에서는 그 값을 반환한다) Possession.m을 다음과 같이 편집한다. 
@interface Possession : NSObject
{
    NSString *possessionName;
    NSString *serialNumber;
    int valueInDollars;
    NSDate *dateCreated;
}
-(void) setPossessionName: (NSString *)str;
-(NSString *)possessionName;
-(void)setSerialNumber: (NSString *)str;
-(NSString *)serialNumber;
-(void) setValueInDollars:(int)i;
-(int)valueInDollars;
-(NSDate *)dateCreated;
@end

NS_ASSUME_NONNULL_END
