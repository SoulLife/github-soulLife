using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;
namespace SayHello.ex1
{
    //Window를 상속받는 클래스는 일반적으로 생성자에서 그 클래스를 초기화한다. 예제에서는 Title 프로퍼티만 초기화한다. 프로퍼티 이름 앞에 객체의 이름을 따로 쓰지 않았는데
    //MyWindow가 Window를 상속받기 때문이다. 다음과 같이 this키워드를 명시할 수도 있다. 
    //MouseDown이벤트에 대한 이벤트 핸들러를 따로 설치하지 않고 클래스 OnMouseDown메소드를 오버라이딩할 수 있다. OnMouseDown이 인스턴스 메소드이기 때문이며 this를 Getposition
    //메소드에 넘겨 Window 객체를 참조할수 있고 직접 Title프로퍼티를 참조할수도 있다. 살펴본 예제에서 큰 문제는 없지만 Application을 상속해 클래스를 정의하는 것이 아니라 Window
    //를 상속한 클래스를 하나의 파일에서 정의하는 것이 조금더 일반적이며 더 쉬운 방법이다. 다음의 예가 하나의 파일로 만든 프로그램의 전형적인 예다. 
    //이 프로그램을 가지고 다양하게 수정을 해보며 탐구해보자. 몇 가지 방안을 제시하겠지만 이 외에도 다양한 방법을 연구해보기 바란다. 윈도우 운영체제에서 창은 화면상에 표시되는
    //위치와 크기를 갖는데 이를 재지정할수 있다. Window클래스는 FrameworkElement로부터 Width와 Height프로퍼티를 상속받는다. 따라서 다음과 같이 생성자에서 이 프로퍼티값을 재설정
    //할수있다.(Width,Height속성에 값 설정)두 프로퍼티는 정수가 아닌 double 값으로 정의돼 있어서 다음과 같은 설정이 가능하다. 
    //Width와 Height프로퍼티는 초기에는 정의돼 있지 않으며 프로그램에서 따로 정의하지 않는 한 계속 이런 상태로 남는다. 이를 달리 표현하면 NaN값을 갖는다고 하는데 IEEE(전기 전자
    //기술자 협회 Insitute of Eleectircal and Electonics Engineers Inc)에서 숫자가 아님(not a number)에 대한 부동 소수점 표준으로 정의된 약어이다. 
    //따라서 창의 실제 크기를 얻기 위해서는 Width와 Height프로퍼티를 사용해서는 안 되며 그 대신 읽기 전용인 ActualWidth, ActualHeight프로퍼티를 사용해야 한다. 그러나 이 두 프로
    //퍼티도 Window 생성자에서는 값이 0 이다. 창이 화면에 표시된 후에 비로소 실제 값을 갖게 된다. 앞서보인 두 구문을 다시 살펴보자 다음과 같이 임의로 선택한 숫자를 할당하고 있다.
    //이는 픽셀(pixel)을 의미하는 숫자가 아니다 Width와 Height프로퍼티를 픽셀 단위로 지정한다면 double값으로 정의하지 않았을 것이다. WPF에서는 모든 크기나 위치를 지정할때 장치
    //독립적 픽셀(device-independent pixels)또는 논리 픽셀(logical pixels)이라고 하는 단위를 사용한다. 그러나 픽셀이라고 부르는게 그리 타당하지 않아서 앞으로는 장치 독립적 단위
    //(device-independent units)라고 부를 것이다. 이 단위는 1/96인치이며, 따라서 288과 192의 값은 실제로는 창의 가로가 3인치이고 세로가 2인치임을 의미한다. 
    //모니터에 자를 대고 길이를 재보면 크기가 정확하게 일치하지 않을 수도있다. 픽셀과 인치와의 관계는 윈도우에서 설정되며 사용자에 의해 변경이 가능하기 때문이다. 변경하기 위해서
    //는 윈도우 화면에서 마우스의 오른쪽 버튼을 누르고 드롭다운 메뉴에서 속성을 누른다. 설정 탭을 누르고 고급 버턴을 누른후 일반 탭을 눌러보자. 
    //기본값으로는 96DPI(인치당 도트수 dots per inch)로 설정돼 있는데 그런 경우라면 Width와 Height의 값인 288과 192가 그대로 픽셀값과 일치한다. 

    //그러나 120DPI로 설정을 변경한다면 Width와 Height프로퍼티가 288, 192인 경우에 실제 픽셀수가 360과 240이 되는 것이다. 픽셀이 아닌 실제창의 크기가 3인치, 2인치를 의미하는 것도
    //변함없다. 미래의 모니터는 지금보다 더 해상도가 높아질 것이다. 이런 경우에도 WPF프로그램은 별다른 수정 없이 잘 동착할수 있어야 한다. 예를 들어 모니터의 설정이 인치당 200개의
    //픽셀이라고 가정하자. 어떤 사용자는 화면의 모든 것이 작아지는게 싫어서 디스플레이 등록정보를 192DPI와같이 적당한 해상도로 바꾸는 경우도 있을것이다. WPF 프로그램에서는 Width
    //와 Height가 각기 288과 912라는 장치 독립적 단위이므로 이 경우에는 576픽셀과 384픽셀이 되며 실제 크기는 여전히 3인치와 2인치가 된다. 

    //WPF 전반에 걸쳐 장치 독립적 단위를 사용한다. 이전에 나온 예제 프로그램에서 마우스를 누를 때 나타나는 메시지 박스는 클라이언트 영역의 좌측 상단을 기준으로 위치를 지정했다
    //이 위치도 픽셀 단위가 아니라 1/96인치의 장치 독립적 단위다. Width와 Height에 매우 작은 값을 넣어 시험해보면 창의 제목 표시줄은 항상 특정 크기보다 작아지지 않는다는 사실을
    //발견할수있다. 이런 창의 최소 크기는 정적 읽기 전용 프로퍼티인 SystemParameters.MinimumWindowWidth와 SystemParameters.MinimumWindowHeight에 저장돼 있다(여기도 1/96인치의
    //장치 독립적 단위다)SystemParameters 클래스에는 이 같은 몇 가지 정적 프로퍼티가 있다. 화면의 특정한 위치에 창을 위치시키고 싶다면 다음과 같이 WIdow 클래스에 정의된 
    //Left와 Top프로퍼티를 변경한다. 
    //이 두 프로퍼티는 화면의 좌측 상단을 기준으로 창의 좌측 상단이 위치되는 곳을 가리킨다. 다시 말하지만 장치 독립적 단위는 double값이며 프로그램에서 이 프로퍼티를 변경하지 않
    //으면 NaN의 값이 유지된다. Window클래스에 Right와 Bottom프로퍼티는 정의돼 있지 않다. 창의 오른쪽 하단 위치는 Left와 Top창의 크기 등을 통해 계산해 낼수 있다. 

    //비디오 어뎁터와 모니터가 가로 1600픽셀, 세로1200픽셀의 해상도를 지원한다고 가정하고 디스플레이 등록정보 대화상자에서 해상도를 변경했다고 하자 정적 프로퍼티인 System.Parame
    //ters.PrimaryScreenWidth와 SystemParameters.PrimaryScreenHeight에 있는 값을 살펴본다면 이 값이 1600과 1200일까? 화면의 DPI설정이 96일 경우에만 그렇다 그리고 이경우에는 화면
    //이 16과3분위2인치와 12와2분의1인치이다. 그러나 화면의 DPI가 120으로 돼있다면 SystemParameters.PrimaryScreenWidth와 SystemParameters.PrimaryScreenHeight가 각기 1280과 960장
    //치 독립적 단위를 반환할것이며 이 경우에는 크기가 13의3분의1인치와 10인치일 것이다. 

    //SystemParameters는 모든 크기를 장치 독립적 단위로 표현하기 때문이지만 여기에 예외가 있는데 SystemParameters 프로퍼티중 SmallIconWidth과 SmallIconHeight는 픽셀 단위다. 대부
    //분의 값들은 별다른 변환 없이 바로 사용할수 있다. 예를 들어 창을 화면의 우측 하단 영역에 위치시키기 위해 다음과같이 할수 있다.
    //Width와 Height프로퍼티는 미리 설정했다고 가정한다. 그런데 이 결과에 만족하지 않을수 있다. 화면 하단부에 작업 표시줄이 있다면 창의 하단 위치가 겹칠수 있기 때문이다. 애플리
    //케이션 데스크톱 톨바(작업표시줄이 한예)가 차지하고 있지 않는 영역인 작업 영역(workarea)을 기준으로 해서 우측 하단에 위치시키는게 더 좋을것 이다. 

    //SystemParameters.WorkArea프로퍼티는 Rect타입의 객체를 반환한다. 이 타입은 왼쪽 상단의 위치와 크기로써 사각형을 정의하는 구조체이다. 이 WorkArea 프로퍼티는 폭과 높이가 아닌
    //Rect로 정의돼야만 한다. 사용자가 작업 표시줄을 화면의 왼쪽에 배치할수도 있기 때문이다. 이런 경우라면 Rect구조체의 Left프로퍼티가 0보다 큰값을 가질 것이고 Width프로퍼티는
    //화면의 폭에서 Left값을 뺀 값을 갖게된다. 다음은 창을 작업 영역의 우측하단에 위치시키는 코드이다. 
    //그리고 다음 코드는 창을 작업 영역의 중앙에 위치시킨다.

    //이 코드를 Window클래스에 정의된 WindowStartupLocation프로퍼티를 사용해 바꿀수 있다. WindowStartupLocatlion 열거형의 멤버를 이 프로퍼티에 대입한다. 기본값은 WindowStartupLo
    //cation.Manual로 프로그램이나 윈도우 운영체제에서 수동으로 창의 위치를 지정한다. WindowStartupLocation.CenterScreen으로 지정하면 창을 화면의 중앙에 위치시킨다. 이름은 Scree
    //n으로 돼 있지만 화면이 아닌 작업 영역의 중앙을 의미한다. 세 번째로 Window StartupLocation.CenterOwner가 있는데 모달 대화상자를 그 소유자의 중앙에 위치시킨다. 
    class MyWindow : Window
    {
        public MyWindow()
        {
            Title = "Inherit App & Window";
            Width = 288;
            Height = 192;
            Left = SystemParameters.PrimaryScreenWidth - Width;
            Top = SystemParameters.PrimaryScreenHeight - Height;
            Left = SystemParameters.WorkArea.Width - Width;
            Left = (SystemParameters.WorkArea.Width - Width) / 2 + SystemParameters.WorkArea.Left;
            Top = (SystemParameters.WorkArea.Height - Height) / 2 + SystemParameters.WorkArea.Top;
            Top = SystemParameters.WorkArea.Height - Height;
            //Width = 100 * Math.PI;
            //Height = 100 * Math.E;
        }
        protected override void OnMouseDown(MouseButtonEventArgs e)
        {
            base.OnMouseDown(e);
            string strMessage = string.Format("Window clicked with {0} button at point ({1})", e.ChangedButton, e.GetPosition(this));
            MessageBox.Show(strMessage, Title);
        }
    }
}
