using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;
using System.Windows.Media;
using System.Reflection;
using System.Windows.Threading;
namespace SayHello.ex3
{
    //다음 프로그램에서는 Content프로퍼티에 빈 텍스트 문자열을 할당해두고 키보드 입력을
    //통해 문자를 추가해나간다. 1장에서의 TypeYouTile 프로그램과 유사하며 캐리지 리턴이나 탭도 입력이 가능하다. 
    //RecordKeystrokes 프로그램에서는 키가 눌릴 때마다 Content 프로퍼티가 변경되고 Window클래스는 이 변경에 반응해서 클라이언트 영역을 다시 그린다. 프로그램을 약간 바꾸면 제대로 
    //동작하지 않을수 있다. 예를 들어 다음과 같이 빈 문자열을 정의해보자. 
    //string str = ""; 그리고 생성자에서 이 변수를 Content 프로퍼티에 대입한다. Content = e.Text; 이는 다음 구문과 동일하다.str = str + e.Text;
    //두 구문 모두 다음과 같은 문제가 있다. 연결 연산자로부터 반환된 object객체가 입력한 string 객체와 같지 않다는 점이다. 문자열은 변경할수 없다는 것을 기억해야 한다. 연결 연산
    //자는 새로운 문자열을 생성하지만 Content 프로퍼티는 여전히 최초의 문자열로 설정돼있다. 이제부터는 약간 다르게 시도해 볼 것이다. 이를 위해 System.Text에 대한 using 문이 필요
    //하다 그리고 다음과 같이 StringBuilder 객체를 정의한다.  StringBuilder build = new StringBuilder("text");생성자에서 이 객체를 다음과 같이 Content에 대입한다. 
    //Content = build; StringBuilder 객체의 ToString 메소드는 생성시 만들어진 문자열을 반환하기 때문에 창에서는 "text"가 표시됨을 짐작할 수 있다. 다음과 같이 OnTextInput 메소드에
    //있는 구문을 수정 한다. 이렇게해도 동작하지 않을 것이다. StringBuilder 객체가 하나뿐이지만 STringBuilder객체에 저장된 문자열이 언제 변경되는지를 알지 못하기에 새로운 텍스트
    //문자열로 업데이트되지 않고 있다. 이런 경우를 지적하는 이유는 WPF에서의 객체들이 때때로 마술처럼 스스로 업데이트되기때문이다. 마술처럼 보이겠지만 마술은 아니고 항상 이벤트의
    //형태로 통지하고 있다. 무슨 일이 일어나고 일어나지 않는지를 알아야 환경을 이해하는 데 훨씬 도움이 된다. OnTextInput의 가장 아래 부분을 다음과 같이 고쳐보았다. 그러나 아직도
    //제대로 동작하지 않는다. build로 할당된 Content에 또다시 같은 객체를 대입하고 있음을 감지해 업데이트가 필요하지 않다고 판단하는 것이다 다음구문들을 추가해보자.
    //이 구문은 제대로 동작한다. 윈도우 컨텐트에 일반적인 텍스트를 지정할수 있음을 살펴보았다. 하지만 Content프로퍼티의 존재 이유가 단순 텍스트만을 출력하는 것은 절대 아니다. Con
    //tent 프로퍼티의 진정한 목적은 더욱 자연스러운 그래픽이 가미되는 것이고 UIElement를 상속받은 어떠한 클래 인스턴스라도 지정할수 있게 하는 것이다.
    //UIElement는 WPF에서 매우 중요한 클래스로 키보드, 마우스, 스타일러스 펜을 처리하는 것이 구현돼 있다. UIElement 클래스에는 또한 OnRender라는 중요한 메소드가 있다. OnRender 메
    //소드는 객체의 그래픽 표시를 얻기 위해 호출된다(3장의 끝 부분에서 이에 대한 예를 살펴볼 것이다.)Content 프로퍼티의 동작에 관한 모든 객체는 UIElement를 상속받은 것과 그렇지
    //않은 것의 두 그룹으로 나눌 수 있다. 후자 그룹은 ToString으로 출력이 되는 객체이며 전자 그룹은 OnRender로 출력이된다. UIElement를 직접 상속받은 유일한 클래스는 FrameworkEl
    //ement이고, WPF에서 살펴볼 모든 엘리먼트는 FrameworkElement를 상속받는다. 이론상으로 UIElement는 사용자 인터페이스 이벤트와 화면에 표현하는데 필요한 구조를 제공한다. 이런 구
    //조는 다양한 프로그래밍 프레임워크(framework)를 지원하는데 WPF는 이런 프레임워크의 하나이며, FrameworkElement를 상속받는 클래스들로 구성된다. 상싱선에서 프로퍼티와 메소드를
    //확연하게 구별하기 어려울 것이다. 같은 맥락으로 UIElement에서 정의된 이벤트와 FrameworkElement에서 정의된 이벤트를 구별하는 것도 쉽지 않다. FrameworkElement를 상속 받는 중요
    //한 클래스 중 하나는 Image이다. 다음은 Image와 관련된 클래스 계층도이다. 
    //Image 클래스는 도큐먼트나 애플리케이션에서 쉽게 이미지를 사용할수 있게 해준다. 다음은 필자의 웹사이트에서 비트맵을 가져와 창에 표시하는 프로그램이다. 
    class RecordKeystrokes :Window
    {
        StringBuilder build = new StringBuilder("text");
        public RecordKeystrokes()
        {
            Title = "Record Keystrokes";

            Content = build;
        }
        protected override void OnTextInput(TextCompositionEventArgs e)
        {
            base.OnTextInput(e);
            string str = Content as string;
            if(e.Text == "\b")
            {
                //if (str.Length > 0)
                if (build.Length > 0)
                    build.Remove(build.Length - 1, 1);
                    //str = str.Substring(0, str.Length - 1);
            }
            else
            {
                //str += e.Text;
                build.Append(e.Text);
            }
            //Content = str;
            //Content = null;// 추가
            Content = new StringBuilder(build.ToString());
        }
    }
}
