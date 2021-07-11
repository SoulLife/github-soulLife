//
//  eron.m
//  RandomPossessions
//
//  Created by macmini on 2021/07/11.
//

#import <Foundation/Foundation.h>
//NSArray와 NSMutableArray : 여러분이 사용해온 NSMutableArray가 과연 무엇일까? 배열은 컬렉션 객체다(컨테이너라고도 한다) 코코아 터치 프레임 워크는 NSDictionary와 NSSet등 몇 개의 컬렉션 객체를 갖고있고 이 객체들은 각각 조금씩 다른 용도를 갖고 있다. 배경은 인덱스로 접근할수 있는 정렬된 객체의 목록이다. 다른 언어들에서는 목록 또는 벡터라고도 한다 NSArray는 변경할수없다. 즉 인스턴스화한 이후에는 객체를 추가하거나 삭제할 수 없다. 다만 배열에서 객체를 추출할수는 있다. NSArray의 변경가능한 하위 클래스인 NSMutableArray를 통해 객체를 동적으로 추가하고 삭제하는 것이 가능하다.
//오브젝티브-C에서 배열은 실제로 객체를 담지 않는다. 대신에 각각의 객체에 대한 포인터(참조)를 가진다. 객체가 배열에 추가될 때
//[array addObject:object];apahfl 메모리상에서 해당 객체의 주소가 배열 안에 저장된다. 다시 말해 커맨드 라인 툴에서 NSMutableArray의 인스턴스를 만들고 네 개의 NSString인스턴스를 추가한다.
//배열은 단지 오브젝티브-C객체에 대한 참조만 갖고 있다. 원시형 타입이나 C구조체는 배열에 추가할 수 없다. 예를 들어 int로된 배열을 만들수 없다. 또한 배열은 객체에 대한 포인터만 갖기 때문에 하나의 배열은 여러 타입의 객체를 담을수 있다. 이런점에서 배열이 선언된 타입의 객체만 담을수 있는 엄격한 타입검사(strongly-typed)언어와 다르다.
//count라는 메시지를 보내 배열이 몇 개의 객체를 현재 저장하고있는지 알아볼 수 있다. 배열의 전체 객체 수보다 더큰 인덱스에 있는 객체를 요구하면 예외가 발생하기 때문에 배열의 크기 정보는 중요하다.(예외는 매우 좋지 않다. 대부분의 경우 앱을 크래시시킨다. 이 장의 말미에서 예외에 대해 좀더 설명하겠다)
// int numberOfObjects = [array count]; addObject: 메시지로 객체를 배열에 추가하면, 배열의 마지막에 추가된다. 배열에 있는 객체의 수보다 같거나 작은 인덱스를 준다면 특정 위치에 객체를 추가할 수도 있다.
//int numberOfObjects = [array count]; [array insertObject:object atIndex:numberOfObjects];
//nil은 배열에 추가할 수 없다. 대신에 NSNull을 사용해야 한다. NSNull은 nil을 표현하는 객체다. 객체에 대한 포인터를 추출하려면 objectAtIndex메시지를 배열에 보낸다. NSString *object = [array objectAtIndex:0];
//리테인 카운트(retain count)를 알고 있는 독자를 위한 설명: 배열에 추가된 객체는 retain메시지를 받는다. 객체가 배열에서 제거될 때는 release 메시지를 보낸다. 배열이 deallocate될 때는 모든 객체에게 release 메시지를 보낸다. retain, release, deallocate가 무슨말인지 몰라도 괜찮다. 다음 장에서 알게 될것이다.

//오브젝티브-C클래스의 하위 클래스 만들기 : 클래스는 계층구조로 존재한다. 전체 계층구조의 루트 클래스인 NSObject를 제외한 모든 클래스는 하나의 상위 클래스만 가진다 클래스는 상위 클래스의 작동방식을 상속한다. 그 의미는 최소환 모든 클래스가 NSObject에 정의된 메소드와 인스턴스 변수를 상속한다는 뜻이다. 최상위 클래스로서 NSObject의 역할은 코코아 터치의 모든 객체의 기본적인 작동방식을 구현하는 것이다. NSObject가 구현한 메소드 중 두 개는 alloc과 description이다. (우리는 가끔 "description은 NSObject상의 메소드다"라고 말하는데 결국 같은 의미다.)
//하위 클래스는 상위 클래스의 작동방식을 확장하기 위해 메소드와 인스턴스 변수를 추가할수 있다. 예를들면 NSMutableArray는 동적으로 객체를 추가하고 삭제하는 기능을 추가함으로써 객체에 대한 포인터를 가지는 NSArray의 기능을 확장한다.
//하위 클래스는 상위 클래스의 메소드를 오버라이드(override)할 수 있다. 예를 들면 NSString은 NSObject의 description메소드를 오버라이드 한다. NSObject에 description메시지를 보내면 해당 인스턴스에 대한 정보를 반환한다. description은 디폴트로 <QuizAppDelegate: 0x4b22a0>처럼 해당 객체의 클래스와 메모리 상의 주소를 반환한다.
//NSObject의 하위 클래스는 자기 자신(하위 클래스)의 인스턴스를 좀 더 잘 설명하는 정보를 반환하도록 description메소드를 오버라이드한다. 예를 들면 NSString은 스트링 자체를 반환하도록 description을 오버라이드한다. NSArray는 배열에 있는 각 객체의 description을 반환하도록 오버라이드 한다.
//이번 실습에서는 NSObject의 하위 클래스로 Possession을 만든다. Possession의 인스턴스는 여러분이 일상에서 소유하는 물건을 표현한다. File > New > New File을 선택한후 iOS > CocoaTouch > Objective-C class를 선택하고 Next 버튼을 클릭한다. 다음패널에서 NSObject를 상위 클래스로 선택하고 Next 버튼을 클릭한다.

//새 클래스의 이름을 Possession이라고 짓는다. 프로젝트용 새 클래스를 만들 때 클래스를 설명하는 파일을 프로젝트 소스 디렉터리에 저장하는 것이 좋다. 디폴트로 현재 프로젝트 디렉터리가 선택되어 있다. 프로젝트 내비게이터에서 이 파일들을 추가할 그룹을 선택할수 있다. 그룹은 단지 정리하기 위한 것으로 이 프로젝트가 아주 작기 때문에 그다지 중요하지 않다. 그냥 디폴트를 사용한다 RandomPossessions 옆의 targets 체크박스를 반드시 선택한다. 그래야 만 프로젝트를 빌드할때 이 클래스가 컴파일된다. Save 버튼을 클릭한다. 
