using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Shapes;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Reflection;
using System.Windows.Threading;
using System.Windows.Documents;
namespace SayHello.ex4
{
    //버튼과 컨트롤 : WPF에서 컨트롤(control)이란 용어는 이전의 윈도우 프로그래밍 인터페이스보다 조금은 한정적으로 사용된다. 윈도우 폼(Window Forms)을 예로 들면 화면상에 보이는 
    //모든 것들을 컨트롤로 간주했었지만 WPF에서의 컨트롤은 사용자와 상호작용하는 엘리먼트로 제한된다. 상호작용이란 사용자가 마우스나 키보드를 눌렀을때 어떤 종류의 피드백을 제공하
    //는 것을 의미한다. 3장에서 논의한 TextBlock, Image, Shape 엘리먼트를 모두 키보드, 마웃, 스타일러스펜의 입력을 받을 수 있다. 다만 입력을 따로 처리하지 않고 무시했었다. 컨트롤
    //은 능동적으로 사용자의 입력을 감지하고 처리한다. Control 클래스는 다음 계층도에서 보듯이 FrameworkElement를 직접 상속받는다. 
    //Window는 ContentControl을 거쳐서 Control을 상속받으므로 FrameworkElement와 Control프로퍼티의 일부를 이미 사용했었다. Control이 정의된 프로퍼티에는 Background, Foreground, B
    //oardBrush, BorderThickness등이 있고, FontWeight나 FontStretch처럼 폰트와 관련된 프로퍼티도 있다. 참고로 TextBlock에도 폰트와 관련된 프로퍼티가 있지만 TextBlock은 Control을 
    //상속받지 않았다. 이 프로퍼티는 TextBlock 자체에 정의돼 있다. Control을 상속받은 클래스는 50개가 넘는데 이 클래스들은 버튼, 리스트 박스, 스크롤바 에디트 필드, 메뉴, 툴바와
    //같은 기능을 제공한다. 이들 클래스는 System.Windows.Controls와 System.Windows.Controls.Primitives 네임스페이스에 있으며, 여기에는 Control을 상속하지 않는 다른 클래스들도 함
    //께 정의돼 있다.전형적인 컨트롤은 버튼(button)으로 WPF에서는 Button 클래스로 표현한다. Button클래스에는 Content란 프로퍼티와 Click이란 이벤트가 있다. Click이벤트는 마우스나
    //키보드로 버튼을 누를때 발생한다. 다음 프로그램은 Button객체를 생성하고 Click 이벤트에 대한 핸들러를 설치해서 버튼을 클릭할 때 메시지 박스를 출력한다. 
    //Button 객체의 Content 프로퍼티에는 텍스트 문자열을 할당하고, Button객체 그 자체는 Window의 Content 프로퍼티에 할당한다. 할당하는 순서는 어떻게 해도 무방하다. 버튼을 Window
    //의 일부로 만들기 전이나 후에 관계없이 버튼 프로퍼티를 설정하고 이벤트 핸들러를 붙일수 있다. Window처럼 Button에도 Content 프로퍼티가 있다는 사실은 우연이 아니다. 두 클래스
    //모두 ContentControl을 상속받고 있어서 여기에 Content 프로퍼티가 정의돼 있기 때문이다. 다음은 Control에서 시작되는 클래스 계층도의 일부이다. 
    //Window와 ButtonBase 모두 동일한 Content프로퍼티를 갖고 있는데 여기에 심오한 의미가 있다. Window의 Content에 대입할수 있는 다양한 모든 객체는 버튼의 Content로도 사용 될수 있
    //다는 점이다. 버튼을 비트맵으로 표시할 수도 있고, Shape객체나 서식이 있는 텍스트로도 표시할수 있다. 심지어는 Button 객체의 Content에 다른 Button 객체를 연결할 수도 있다.

    //지금쯤은 클라이언트 영역 내부를 가득 채운 버튼을 보고서도 놀라지 않을 것 같다. 창의 크기를 변경시키면 버튼의 크기도 변경되는 것을 볼수 있다. 최초에는 버튼에 입력 포커스(Foc
    //us)가 없다. 즉 키보드를 눌러도 이에 반응하지 않는다는 의미이다. 프로그램을 실행하고 Space Bar를 눌러도 아무 일도 일어나지 않는다. 버튼에 입력 포커스가 없을지라도 Alt+C를 누
    //르면 버튼이 눌려진다. Alt 키를 누르고 자세히 살펴보면 "CLick me, plase!"의 첫 글자에 밑줄이 생긴것을 알수 있다. Content프로퍼티에 대입할 텍스트 문자열에서 원하는 글자의 앞
    //에 밑줄(_)을 넣으면 바로 가기 키(shortcut)를 사용할수 있다. 이 기능은 메뉴 항목에서 더 자주 사용하지만 버튼이나 다른 컨트롤에서도 사용 가능하므로 대화상자에서 좀 더 다양한
    //키보드 인터페이스를 만들수 있다. Tab키를 누르거나 버튼을 마우스 왼쪽 버튼으로 클릭하면 버튼에 입력 포커스가 생긴다. 버튼 경계에 점선이 생기는 것을 확인할 수 있는데, 입력 포
    //커스가 있다는 의미이다. 그 후에는 Space Bar나 Enter 키를 눌러도 버튼을 누를 수 있다. 프로그램에서 직접 버튼에 입력 포커스를 줄 수도 있다. 생성자에 다음 구문을 추가해보자.
    //버튼에 입력 포커스가 없어도 기본 버튼으로 설정해 놓는다면 Enter 키에 반응하게 된다. 다음 구문은 기본 버튼으로 만드는 기능을 한다.
    //다음 구문에 있는 프로퍼티는 Esc키에 대해 반응할수 있게 한다.
    //이 두 프로퍼티는 보통 대화상자에서 확인과 취소 버튼에 사용된다. 같은 버튼에 대해 두 프로퍼티를 모두 설정할 수도 있는데, 이는 "About" 대화상자에 주로 사용되는 기법으로 확인
    //버튼 하나만 있다. 자세히 살펴보면 마우스가 버튼 위를 지나갈 때 버튼 주위의 경계선이 약간 바뀜을 알수 있다. 클릭을하면 버튼의 배경색이 바뀌는 것도 확인할 수 있다. 컨트롤과 
    //다른 엘리먼트와의 차이점 중 하나가 바로 이런 피드백이다. ButtonBase에는 Clickmode라는 프로퍼티가 정의돼 있다. 이 프로퍼티는 ClickMode 열거형의 멤버로 대입하며 버튼이 마우스
    //클릭에 어떻게 반응하는지를 결정한다. 기본값은 ClickMode.Release이며 마우스 버튼을 뗄 때에 Click이벤트가 발생한다. ClickMode.Press나 ClickMode.Hover를 설정할 수도 있는데 전
    //자는 마우스를 누를 때 이벤트가 발생하며 후자는 마우스 커서가 버튼을 지나가기만 해도 이벤트가 발생한다. 클라이언트 영역을 가득 채운 버튼이 마치 방안에 있는 코끼리 같다. 앞 장
    //에서 살펴보았듯이 FrameworkElement에는 Margin이란 프로퍼티가 있고 이를 이용해 엘리먼트의 경계 바깥 부분에 여백을 줄 수 있다. 다음 구문을 살펴보자. 
    //이 구문을 추가해 다시 컴파일하면 버튼의 사방으로 1인치의 공간이 생긴다. 물론 아직도 버튼은 매우 크지만 이제는 버튼 내부를 변경해보자. 버튼의 Content인 텍스트 문자열은 현재 
    //가운데에 있다 다음 두 구문으로 이 텍스트 문자열을 좌측 하단으로 옮길수 있다. 
    //3장에서 HorizontalAlignment와 VerticalAlignment 프로퍼티에 대해서 논의한 적이 있다. 위 두 줄을 자세히 살펴보면 프로퍼티 이름 가운데에 Content란 단어가 있음을 알 수 있는데 이
    //때문에 버튼 내부를 조정하는 것임을 짐작할 수 있다. 지금쯤은 HorizontalAlignment에는 Center,Left, Right, Stretch의 4가지 멤버가 VerticalAlignment에는 Center, Top, Bottom, Str
    //etch의 4가지 멤버가 있다는 것을 잘 알고 있을 것이다. (이 상황에서 Stretch를 사용하면 Left와 Top을 사용한 것도 똑같은 효과를 낸다) 버튼의 내부에 약간의 공간을 넣는 것도 가능
    //하다. 다음과 같이 Margin 프로퍼티처럼 Thickness 구조체를 사용한다. 
    //이제 버튼의 바깥과 안쪽 모두에 1인치의 공간이 생겼다. Margin 프로퍼티(FrameworkElement에 정의됨)가 버튼의 바깥쪽에 여백을 주는 것인데 반해, Padding 프로퍼티(Control에 정의됨
    //)는 버튼의 내부에 여백을 준다. Control에 정의된 HorizontalContentAlignment와 VerticalContentAlignment 프로퍼티가 버튼 컨텐트의 위치에 영향을 주는 것처럼 HorizontalAlignment
    //와 VerticalAlignment프로퍼티는 컨테이너(클라이언트 영역)내에서 버튼의 위치에 영향을 준다. 버튼에서 이 두 프로퍼티의 기본값은 각기 HorizontalAlignment.Stretch와 VerticalAlign
    //ment프로퍼티는 컨테이너(클라이언트영역)내에서 버튼의 위치에 영향을 준다. 버튼에서 이 두 프로퍼티의 기본값은 각기 HorizontalAlignment.Stretch와 VerticalAlignment.Stretch이며
    //이는 클라이언트 영역을 가득 채우게 버튼을 늘리라는 것을 의미한다. 다음과 같이 양쪽 모두를 Center로 수정해보자. 
    //이제 버튼의 크기는 컨텐트에 맞게 조정됐고 위치도 창의 중간에 있게 된다. 버튼 크기는 컨텐트의 크기에 맞게 스스로 조절이 된다. 심지어 버튼이 이미 표시된 후라도 컨텐트의 크기에
    //맞춰진다. 또한 줄 바꿈을 넣을 수도 있다. 필요하다면 다음과 같이 버튼의 크기를 명시적으로 지정할 수도 있다. 
    //그렇지만 컨트롤의 크기를 명시적으로 지정하지 않는 것이 여러모로 더 편리하다. WPF에서는 사용자 화면 해상도에 맞게 컨텐트의 크기가 자동으로 조절된다는 사실을 기억하자. 컨트롤
    //의 크기를 지정하면 이런 기능을 사용할 수 없게된다. 추가한 모든 코드를 빼고 다른 방법을 사용해 버튼의 크기를 조절해보자. 다음과 같이 Window의 SizeToContent프로퍼티를 이용한다
    //이제 버튼의 크기에 맞게 창의 크기가 변하고, Button에 설정된 Margin도 적용된다. 기본값으로 버튼의 폰트는 em size가 11(8포인트)인 Tahoma글자체다. 다음과 같이 em size와 폰트는
    //쉽게 변경할수 있다.
    //Window의 FontSize와 FontFamily를 설정하는 것도 효과가 있다. 버튼이 이 값들을 계승하기 때문이다. 그리고 아래와 같이 색상도 바꿀수 있다. 
    //버튼에서의 BorderThickness 프로퍼티는 아무런 효과가 없다. 한편 마우스 커서를 버튼 위로 올리는 경우처럼 사용자에게 추가적인 피드백이 필요한 경우 도 있다. 다음 프로그램은 버튼
    //위에 서식화된 텍스트를 출력하기 위해 TextBlock을 사용하며 MouseEnter와 MouseLeave 이벤트를 처리해 색상을 변경한다. 
    class ClickTheButton : Window
    {
        public ClickTheButton()
        {
            Title = "Click the Button";
            Button btn = new Button();
            btn.Focus(); //추가
            btn.IsDefault = true; //추가2
            btn.IsCancel = true; //추가3
            //btn.Margin = new Thickness(96); //추가4
            //btn.HorizontalContentAlignment = HorizontalAlignment.Left; //추가5
            //btn.VerticalContentAlignment = VerticalAlignment.Bottom; //추가5
            //btn.Padding = new Thickness(96); //추가6
            //btn.HorizontalAlignment = HorizontalAlignment.Center; //추가7
            //btn.VerticalAlignment = VerticalAlignment.Center; //추가7
            //btn.Width = 96; //추가8
            //btn.Height = 96; //추가8
            SizeToContent = SizeToContent.WidthAndHeight; //추가9
            btn.FontSize = 48; //추가10
            btn.Background = Brushes.AliceBlue; //추가11
            btn.Foreground = Brushes.DarkSalmon; //추가11
            btn.BorderBrush = Brushes.Magenta; //추가11
            btn.FontFamily = new FontFamily("Times New Roman"); //추가10
            btn.Content = "_Click me, please!";
            btn.Click += ButtonOnClick;
            Content = btn;
        }

        private void ButtonOnClick(object sender, RoutedEventArgs e)
        {
            MessageBox.Show("The button has been clicked and all is well.", Title);
        }
    }
}
