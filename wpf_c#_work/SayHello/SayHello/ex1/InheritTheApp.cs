using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;
namespace SayHello.ex1
{
    //Application 클래스에는 유용한 몇 가지 이벤트가 정의돼있다. .NET의 관례대로 대부분의 이벤트는 이를 처리하는 protected메소드와 연관된다. Application에 정의된
    //StartUp이벤트는 protected로 선언된 OnStartup과 연관되며 Application 객체의 Run메소드가 호출된 직후에 실행된다. Run메소드가 반환되기 직전에 Exit이벤트가 발생하고
    //이에 대응하는 OnExit메소드가 호출된다. 애플리케이션의 초기화나 종료를 수행할 때 이 두가지 이벤트를 사용할수 있다. 사용자가 윈도우를 로그오프하거나 컴퓨터를 종료
    //시킬때는 OnSessionEnding 메소드와 SessionEnding 이벤트가 발생한다. 이 이벤트는 SessionEndingCancelEventArgs 타입의 인자를 넘기는데 이 타입은 CancelEventArgs
    //클래스로부터 상속됐으며 Cancel이란 이름의 프로퍼티를 갖고 있다. 윈도우가 종료되는 것을 방지하고 싶다면 이 프로퍼티를 true로 세팅한다. 콘솔 애플리케이션이
    //아닌 윈도우즈 애플리케이션으로 컴파일할 경우에만 SessionEnding 이벤트를 받을수 있다. 프로그램에서 Application클래스의 이벤트들을 처리할 필요가 있다면 해당하는
    //이벤트에 대한 이벤트 핸들러를 설치해야 하지만 가장 편리한 방법은 Application을 상속하는 클래스를 정의하는 것이다. Application을 상속받은 클래스에서는 발생된
    //이벤트를 처리하는 기본 메소드들을 오버라이딩할 수 있다. 
    class InheritTheApp
    {
        public InheritTheApp()
        {

        }
        

    }
}
