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
    class ClickTheButton : Window
    {
    }
}
