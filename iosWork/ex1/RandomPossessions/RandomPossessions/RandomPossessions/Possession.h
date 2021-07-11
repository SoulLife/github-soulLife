//
//  Possession.h
//  RandomPossessions
//
//  Created by macmini on 2021/07/11.
//

#ifndef Possession_h
#define Possession_h


#endif /* Possession_h */
//Possession 클래스를 만들면 Possession.h와 Possession.m이란 두개의 파일이 만들어진다. 프로젝트 내비게이터에서 이 파일들을 찾아본다. Possession.h는 헤더파일(또는 인터페이스 파일)이다. 헤더 파일은 새 클래스의 이름, 상위 클래스, 인스턴스 변수와 이 클래스가 구현하는 메소드를 선언한다. Possession.m은 구현 파일이다. 클래스가 구현하는 메소드의 코드를 담고 있다. 모든 오브젝티브-C 클래스는 이 두개의 파일을 가진다. 헤더 파일은 클래스 인스턴스를 위한 사용자 메뉴얼이고 구현 파일은 클래스가 실제로 작동하는 방법을 정의하는 엔지니어링 디테일이라고 봐도 좋다.
//프로젝트 내비게이터에서 Possession.h를 클릭해 편집기 영역으로 열어본다. 현재 이 파일은 다음과 같을 것이다. 인터페이스 선언을 분해해 무엇을 의미하는지 알아보자. 먼저 C언어의 모든 키워드는 유효하다. 그리고 오브젝티브-C가 추가한 키워드는 @접두어로 구분할수있다. 오브젝티브-C에서 클래스를 정의하려면 @interface키워드 뒤에 새로운 클래스의 이름을 적으면 된다. 콜론(:)다음에 상위 클래스의 이름을 적는다. Possession의 상위 클래스는 NSObject다. 오브젝티브-C는 단일 상속만 허용한다. 따라서 여러분은 오직 다음과 같은 패턴만 보게된다. @interface className : SuperclassName
//다음으로 인스턴스 변수를 선언하는 부분이 나온다. 인스턴스 변수는 클래스와 상위 클래스 선언 다음부터 시작하는 중괄호({})안에 선언되어야만 한다. 중괄호를 닫은 후에는 클래스가 구현하는 메소드를 선언해야 한다. 마지막으로 @end키워드가 새로운 클래스의 선언을 종료한다.

//인스턴스 변수 : 지금까지 Possession클래스는 상위클래스 NSObject에 아무것도 추가하지 않았다. 필요한 것은 소유물에 있을것 같은 몇 개의 인스턴스 변수다. 일상 생활에서 소유물은 이름과 일련번호, 가격, 생성날짜 등을 가진다.Possession.h에서 Possession 클래스에 인스턴스 변수를 추가한다.
//이제 Possession의 모든 인스턴스는 단순한 integer를 위한 장소를 가진다. 또한 두 개의 NSString 인스턴스와 하나의 NSDate인스턴스에 대한 참조를 저장할 장소를 가진다(참조는 다른 말로 포인터라고 한다 별표(*)는 해당 변수가 포인터임을 가리킨다) 전체적으로 객체 네 개(Possession, 두 개의 NSSTring과 NSDate)를 보여준다. 각각의 객체는 그 자체로서 객체이며 다른 객체와 독립적으로 존재한다. Possession객체는 다른 세개의 객체에 대한 포인터를 가진다. 이 포인터들은 Possession객체의 인스턴스 변수다. 예를 들면, 각각의 Possession은 possessionName이라는 포인터 인스턴스 변수를 가진다.
//possessionName은 "Red Sofa"라는 내용을 가지는 NSString 인스턴스를 가리키고 있다. 그러나"Red Sofa"스트링은 Possession 객체안에 있지 않다. Possession객체는 "Red Sofa" NSString이 메모리상에서 어디에 있는지 알고 그 주소를 possessionName에 저장한다. 이런 관계를 이해하는 한 방법은 "Possession은 이스트링을 PossessionName이라 부른다 이다. 인스턴스 변수 valueInDollars의 경우에는 상황이 다르다. 이 인스턴스 변수는 다른 객체에 대한 포인터가 아니다. 그냥 int이다. 포인터가 아닌 인스턴스 변수는 객체 내부에 저장된다. 처음에는 이해하기 쉽지 않은 개념이다.

#import <Foundation/Foundation.h>
@interface Possession : NSObject
{
    NSString *possessionName;
    NSString *serialNumber;
    int valueInDollars;
    NSDate *dateCreated;
}
@end
