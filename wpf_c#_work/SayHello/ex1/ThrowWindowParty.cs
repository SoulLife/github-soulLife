using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;
namespace SayHello.ex1
{
    class ThrowWindowParty : Application
    {
        public ThrowWindowParty()
        {
            //ThrowWindowParty app = new ThrowWindowParty();
            //this.ShutdownMode = ShutdownMode.OnMainWindowClose;

            this.Run();
        }
        //OnStartup에서 생성된 3개의 창은 이 애플리케이션에서 모두 동등하다는 점이다. 어떤 창이라도 눌러 전면으로 나오게 할 수 있다. 어떤 순서로도 닫을수 있으며 마지막 창이
        //닫힐때 프로그램이 종료된다. 하나의 창 제목이 "Main Window"가 아니라면 어떤 창이 메인 창인지 알기 어려울 것이다. 그렇지만 Application객체의 프로퍼티를 살펴보면 show가
        //호출되는 첫창이 그 애플리케이션에서 메인 창으로 간주되는 것을 알수 있을 것이다.  Application클래스에는 WindowCollection 타입의 Windows(s가 붙음에 주의)라는 이름의
        //프로퍼티가 있다. WindowCollection클래스는 전형적인 .NET컬렉션 클래스로서 ICollection과 IEnumerable 인터페이스를 구현하고 있고 여러 개의 Window 객체를 저장할수있다.
        //이클래스에는 Count란 프로퍼티가 있으며 각기 Window 객체를 얻을수 있게 인덱스 참조 연산을 할수 있다. 오버라이딩된 OnStartup의 마지막에서는 Windows.Count 프로퍼티가
        //3을 반환할 것이고 Windows[0]은 "Main Window"란 제목의 창을 가리키게 된다. 이 프로그램에서 이상한점 하나를 발견할수 있는데 세개의 윈도우 모두 화면 하단부에 있는 
        //윈도우의 작업표시줄에 나타난다는 점이다. 작업 표시줄에 세칸을 차지하고 있는 것이 그리 좋아보이지는 않을것이다. 나머지 창들을 작업 표시줄에서 안보이게 하려면 for 루프
        //에 다음 구문을 추가시키면된다. 그러나 이 경우에는 다른 문제점이 생긴다. "Main Window란 제목의 창이 먼저 닫힐 경우 작업 표시줄에 있는 항목이 사라지게 된다. 
        //하지만 프로그램은 분명히 실행 중이며 두 개의다른 창들도 여전히 표시되고 있다.  일반적으로 Run메소드가 반환될때 프로그램이 종료되는데 마지막 창을 닫을 경우에
        //Run메소드가 반환된다. 이와같은 동작은 Application의 ShutdownMode프로퍼티를 어떻게 설정 하느냐에 따라 다르게 결정되며 이 프로퍼티는 ShutdownMode 열거형의 멤버로 설정
        //한다. 기본값으로는 ShutdownMode.OnLastWindowClose 멤버가 지정돼 있지만 이제는 ShutdownMode.OnMainWindowClose로 설정해서 결과를 살펴보자 Run을 호출하기 직전에 다음의
        //구문을 넣는다.  OnStartup의 아무 곳이나 다음 구문을 추가해도 같은 결과를 얻게 된다(Main에서는 Application객체의 이름인 app를 먼저 적어주어야 되는 반면에 OnStartup
        //에서는 this키워드가 붙게된다. 그런데 this는 생략할수 있으므로 그냥 프로퍼티 이름만 적어도된다. 이제 메인창이 닫힐 때만 Run이 반환되고 프로그램이 종료된다.
        //ShutdownMode를 변경한 것은 그대로 두고 for 루프에 다음 구문을 추가해보자. 
        //MainWindow는 Application클래스의 프로퍼티임을 기억하자. 따라서 이 구문은 어떤 창을 메인 창으로 지정하는지를 나타낸다. for 루프가 종료되면 결론적으로 Extra Window 
        //No 2"란 제목의 창을 메인창으로 지정하는 것이며 그러므로 이 창을 닫을때 프로그램이 종료된다. 세번째로 ShutdownMode에 대입할수 있는 값은 ShutdownMode.OnExplicitShutdown
        //인데 이는 Application의 Shutdown메소드를 명시적으로 호출하는 경우에만 Run이 반환된다. 이제 ShutdownMode와 Application클래스의 MainWindow 프로퍼티를 포함해 지금까지
        //가한 코드를 삭제하자. 여러 개의 창들에 대한 계층 구조를 만드는 다른 방법에 대해서 알아보자. 여기에는 Window 클래스에 정의된 owner 프로퍼티를 이용한다. 이 프로퍼티의
        //기본값은 null인데 창의 소유자(owner)가 없다는 뜻이다. Owner 프로퍼티에 다른 Window 객체를 대입할수 있다.(단 그 소유 관계가 순환 구조를 이룰수는 없다.)for 루프에 다음
        //코드를 추가해보자. 
        //이제 메인창이 나머지 두 개의 창을 소유하게 된다. 이렇게해도 세개창 사이에 전환이 가능하다. 그렇지만 소유된 창이 그 소유자보다 항상 앞에 나타난다. 소유자를
        //최소화시키면 소유자가 소유하는 창들도 화면에서 사라진다. 그리고 소유자를 닫게되면 소유된 창들도 자동적으로 닫힌다. 즉 소유된 두 창은 모달리스(modeless)대화상자가
        //되는것이다.대화상자는 크게 모달리스 대화상자와 모달 대화상자로 나뉘는데 더 일반적인 형태는 모달(modal)대화상자이다. ThrowWindowParty 프로그램에서 메인 창의 클라이
        //언트 영역을 마우스로 누를때 나타나는 창이 모달 대화상자의 예다 WindowOnMouseDown 메소드에서는 또다른 Window객체를 생성하고 Title 프로퍼티에 값을 대입하며 Show의 호출
        //대신에 ShowDialog를 호출하고 있다. Show와달리 ShowDialog는 호출 즉시 반환되지 않는다. 그리고 모달 대화상자가 나타난 경우에는 다른 창으로 전환이 되지 않는다.(윈도우의
        //다른 프로그램으로는 전환이 가능하다)모달 대화상자를 닫을 때에만 ShowDialog가 반환된다. 반면 모달리스 대화상자는 메인 애플리케이션과 대화상자 모두 다 동작한다. 모달
        //리스 대화상자의 좋은 예는 비주얼 스튜디오의 빠른찾기 대화상자다 여기서 소스 코드의 문자열을 찾게해주며 빠른 찾기 대화상자가 여전히 표시되는 상태에서도 소스 파일을
        //편집할 수 있다. 모달 대화상자는 사용자 입력을 가로채고 직접 처리하며 대화상자를 종료하기 전까지는 다른 창에서 작업할수 없다. 모달리스 대화상자는 그렇지 않다. 

        //첫번째 예제 프로그램인 SayHello에서 show를 ShowDialog로 바꾸고 Application 객체를 참조하는 부분을 모두 주석처리한다. ShowDialog가 자신의 메시지 루프를 구현하고 입력
        //이벤트들을 처리하기 때문에 프로그램은 여전히 잘 동작한다. 모달 대화상자는 애플리케이션의 메시지 루프에 참여하지 않음으로써 모달이 되는 것이며 그렇기 때문에 사용자
        //입력이 애플리케이션으로 넘어가지 않는다.  이전의 두 예제에서는Application을 상속해 클래스를 정의했다. Window를 상속해 클래스를 정의하는 것도 가능하다. 다음 예제에는 세
        //개의 클래스가 있고 세 개의 소스 코드 파일이 있다. 비주얼 스튜디오 2005에서 프로젝트에 빈 소스 코드 파일을 추가하기 위해 솔루션 탐색기의 프로젝트 이름에서 마우스 오른쪽
        //버튼을 누르고 메뉴의 추가 > 새 항목을 선택한다 또는 프로젝트 메뉴의 새 항목추가를 선택해도 된다. 그런후 코드 파일을 선택한다. 
        //프로젝트 이름은 InheritAppAndWindow이고 아래의 코드는 Main만 있는 클래스로 프로젝트 이름과 같다. 
        protected override void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);
            Window winMain = new Window();
            winMain.Title = "Main Window";
            winMain.MouseDown += WindowOnMouseDown;
            winMain.Show();
            for(int i=0; i<2; i++)
            {
                Window win = new Window();
                win.Title = "Extra Window No. " + (i + 1);
                win.Show();
                win.Owner = winMain;//추가
                //win.ShowInTaskbar = false;//추가 
                //MainWindow = win; //추가
            }
        }

        private void WindowOnMouseDown(object sender, MouseButtonEventArgs e)
        {
            Window win = new Window();
            win.Title = "Modal Dialog Box";
            win.ShowDialog();
        }
    }
}
