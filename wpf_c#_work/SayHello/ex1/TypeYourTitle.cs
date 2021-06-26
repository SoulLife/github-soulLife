using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;
namespace SayHello.ex1
{
    //Title 프로퍼티를 따로 지정하지 않고 사용자가 직접 타이핑할수 있는 프로그램이다. 

    //Title이 한 글자 이상인 경우에 한해 백스페이스('\b')만을 따로 처리하고 있다. 그 외의 경우에는 단순히 키보드에서 입력된 글자를 Title 프로퍼티 뒤에 덧붙이고 있다. Window 클래
    //스에는 창의 외형이나 동작에 영향을 주는 다른 프로퍼티들도 정의돼 있다. WindowStyle 프로퍼티에 WindowStyle 열거형의 멤버를 대입할수 있는데 기본값은 WindowStyle.SingleBorder
    //Window다. WindowStyle.SingleBorderWindow는 약간 더 미려하지만 클라이언트 영역의 크기는 약간 줄어든다. 대화상자에는 보통 WindowStyle.ToolWindow를 사용한다. 제목 표시줄이 약
    //간 더 짧고 닫기 버튼은 있지만 최소화 버튼과 최대화 버튼은 없다. 그러나 Alt +Space Bar를 누르면 시스템 메뉴가 생기므로 최소화나 최대화 동작을 수행 할수는 있다. WindowStyle.
    //None으로 설정하면 창 크기 조절 경계는 표시되지만 제목표시줄이 없어진다. 역시 Alt+Space Bar를 눌러 시스템 메뉴를 부를 수는 있다. Title 프로퍼티가 창에는 나타나지 않지만 작업
    //표시줄에서는 표시된다. ResizeMode프로퍼티를 통해 창 크기 조절 경계를 나타나게 하거나 사라지게 할 수 있다. 이 프로퍼티에는 ResizeMode 열거형의 멤버를 대입한다. 기본값은 
    //ResizeMode.CanResizeWithGrip으로 하면 클라이언트 영역의 우측 하단에 창 크기를 조절할수 있는 표시가 생긴다. ResizeMode.CanMinimize로 지정하면 창 크기를 조절하는 경계가 보이지
    //않으며 최대화 버튼도 사용할수 없고 최소화만 가능하다. 따라서 고정된 크기를 갖는 창의 경우에 유용하게 사용할수 있다. 마지막으로 ResizeMode.NoResize는 최소화, 최대화 버튼도 사
    //용할수 없으며 크기 조절 경계도 사라진다. 

    //WindowState프로퍼티에 WindowState열거형의 멤버를 대입해서 창이 최초에 표시되는 방식을 결정할 수 있다. 대입할수 있는 값으로는 WindowState.Normal, WindowState.Minimized,WindowS
    //tate.Maxmized가 있다. 

    //Topmost 프로퍼티를 true로 설정하면 다른 모든 창보다 앞에 나타난다. (이 기능은 신중하게 사용해야 한다. 오직 하나의 창만 맨앞으로 나올수 있으므로 사용자가 기능을 켜고 끌수 있게
    //하는 것이 좋다) Window클래스에서 다른 중요한 프로퍼티는 Background이다. Control에서 상속받은 프로퍼티로서 클라이언트 영역의 색을 지정한다. 실제 Background프로퍼티로 작업을 하
    //기에는 아직 색상이란 막연한 용어이다. Background프로퍼티는 Brush타입의 객체이며 배경색을 지정하는데 사용할수 있는 브러시 타입에는 그라디언트 브러시, 비트맵(Bitmap)등의 이미지
    //를 이용한 브러시 등이 있다. 브러시는 WPF에서 매우 중요한 역할을 하기 때문에 여기서는 두장이나 할애했다. 
    class TypeYourTitle : Window
    {
        protected override void OnTextInput(TextCompositionEventArgs e)
        {
            base.OnTextInput(e);
            if (e.Text == "\b" && Title.Length > 0)
                Title = Title.Substring(0, Title.Length - 1);
            else if (e.Text.Length > 0 && !Char.IsControl(e.Text[0]))
                Title += e.Text;

        }
    }
}
