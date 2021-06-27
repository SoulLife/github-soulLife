using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;
using System.Windows.Media;
namespace SayHello.ex2
{
    //브러시 : 표준창에서 넓은 내부를 클라이언트 영역(client area)이라고 부른다. 텍스트, 그래픽, 컨트롤 등을 출력하는 영역이며 이 영역을 통해 사용자의 입력을 받기도 한다. 
    //1장에서 만든 창은 클라이언트 영역이 흰색이다. 클라이언트 영역은 기본 배경색이 흰색이기 때문이다. 하지만 윈도우 제어판에서 미적인 이유나 개성을 발휘하기 위해 다른색을 설정
    //할수도 있다. 어떤 사람들은 검정색의 배경에 글자는 흰색인 화면을 더 선호하기도 한다. 이런 경우로 인해 개발자들은 화면 색상을 다루는 필요성과 그 방법을 알아야 한다. 
    //WPF에서는 색상을 다루기 위해서 System.Windows.Media 네임스페이스에 정의된 Color구조체를 사용한다. Color 구조체는 색상을 표현하기 위해 빨간색, 녹색, 파란색을 원색으로 사용
    //한다. (빛의3원색)이 3원색을 R, G, B로 나타내는데 이렇게 정의된 3차원의 공간을 RGB색공간(color space)이라고도 한다. 

    //Color 구조체에는 R, G, B라는 byte타입의 3가지 프로퍼티가 있으며 각 프로퍼티는 0에서 255사이의 값이 될수 있다. 세 프로퍼티가 모두 0인 경우는 검정색을 의미하며 모두 255인 경
    //우는 흰색을 나타낸다. COlor구조체에는 3원색 외에도 알파 채널(alpha channel)을 의미하는 A라는 이름의 프로퍼티가 있다. 알파 채널은 색상의 투명도를 결정한다. 값이 0이면 색이완
    //전히 투명하다는 의미이고 255인 경우는 불투명함을 뜻한다. 이 둘 사이의 값이 될수 있으며 값이 낮을수록 더 투명하다. 다른 구조체처럼 Clolr에도 아무 인자가 없는 생성자가 있다
    //이 경우에는 A, R, B, B값이 모두 0으로 설정된 색 즉 완전히 투명한 검정색을 생성하게 된다. 다른 색을 만들기 위해서는 아래와 같이 4가지 Color 프로퍼티에 수동으로 값을 할당하면
    //된다. 
    //Color clr = new Color();
    //clr.A = 255; clr.R = 255; clr.G = 0; clr.B = 255;   이색은 불투명한 자홍색(magenta)이다. 또한 Color구조체에는 한 줄로 Color객체를 생성하는 몇 가지의 정적 메소드가 있다. 
    //다음 메소드는 byte타입의 인자 3개를 받는다. Color clr = Color.FromRgb(r, g, b)이 메소드는 A가 255의 값이 된다. 알파 값을 직접 지정하기 위해서 다음과 같이 호출하는 방법도있
    //음Color clr = Color.FromArgb(a, r, g, b);빨간색 녹색 파란색의 byte값으로 결정되는 RGB색 공간을 sRGB색 공간이라고도 한다. 여기서의 s는 표준(standard)을 의미한다. 스캐너나 디
    //지털 카메라로부터 생성된 비트맵 이미지를 모니터로 출력하는 데 sRGB공간이 관례로 굳어졌다. 비디오 디스플레이에 색을 출력할 때 sRGB의 각 값은 일반적으로 비디오 디스플레이 보
    //드로부터 모니터로 보내는 전기신호의 전압과 정비례한다. 그러나 다른 출력 장치에 색을 표시하는 데는 sRGB가 적당하지 않을수도 있다. 예를 들어 일반적인 컴퓨터 모니터보다 녹색을 더
    //강하게 출력할 수있는 프린터가 있다면 모니터에서 녹색의 최대값인 255를 어떻게 표현해야 할까. 
    //이런 점덜을 충족시키려면 다른 RGB색 공간을 정의해야 한다. WPF의 Color구조체에는 scRGB라는 또다른 방법이 지원되는데 이는 3원색을 64비트의 값으로 표현하기 때문에 예전에는
    //sRGB64라고도 불렀다. Color구조체에는 scRGB색성분이 float값으로 저장된다. COlor 구조체에서 scRGB색공간을 수용하기 위해 ScA, ScR, ScG, ScB라는 4가지의 float타입 프로퍼티가 있
    //다. 이들 프로퍼티는 A, R, G, B의 값과 별개로 존재하는 것이 아니어서 G 프로퍼티를 바꾸면 ScG프로퍼티도 바뀌게 되고 반대의 경우도 그렇다. 

    //G프로퍼티가 0이면 ScG도 0이되며 G가 255이면 ScG는 1이된다. 이범위안에서 선형(linear)관계를 가지는 것은 아니다. ScR과 R의 관계 ScB와 B의 관계도 ScG와 G의 관계와 같다. ScG의
    //값은 비디오 디스플레이의 범위나 sRGB의 범위를 넘어서는 색을 표현하기 위해서 0보다 작을수도 있고 1보다 클수도 있다. 오늘날의 브라운관(음극선관)에서는 보통 선형적 방식으로 빛
    //을 표현하지 않는다. 빛의 세기(I)와 디스플레이로 보내지는 전압은 다음과같이 지수승의 관계가 있다. 감마 승수는 디스플레이의 특성과 환경광(ambient light)에 관한 값이다. 이 값
    //은보통 사용되는 모니터에서는 일반적으로 2.2에서 2.5사이의 값을 가진다(sRGB표준에서는 2.2로 가정한다) 사람이 빛의 세기를 시각적으로 인지하는 능력또한 비선형으로 대략 빛의 세
    //기의 1/3제곱에 비례한다. 다행스럽게도 사람 인지력의 비선형성과 CRT의 비선형성이 서로 상쇄돼 sRGB의 원색은 거의 선형적으로 인지된다. 즉 RGB값이 16진수로 80-80-80인 경우에 사
    //람의 시각에서는 대게 중간 정도의 회색으로 인지된다. 이런 점 때문에 어찌됐건 sRGB가 표준의 위치에 오르게 됐다. 반면에 scRGB의 원색은 빛의 세기에 대해 선형적인 관계로 설계됐
    //기때문에 scG와 G의 관계는 다음과 같게된다. 지수승 2.2는 sRGB표준에서 가정한 감마 값이다. 이 관계는 근사치임에 유의해야 한다. 투명도는 다음과같이 더 간단한 관계를 가진다. 
    //scRGB에 기반한 Color 객체를 만들기 위해서는 다음과같이 정적 메소드를 사용한다. 
    //Color clr = Color.FromScRgb(a, r, g, b); 인자들은 float값이며 0보다 작을수도 있고 1보다 클수도 있다. System.Windows.Media에는 Colors란 이름의 클래스도 있는대 여기에는 알파
    //벳순으로 AliceBlue, AntiqueWhite에서부터 Yellow, YellowGreen까지 141개의 읽기 전용 정적 프로퍼티가 있다. 다음구문처럼 사용한다. 
    //Color clr = Colors.PapayaWhip;한가지 특징외에 모든 색 이름은 웹브라우저가 지원하는 것과 동일하다. 그 특징은 Transparent프로퍼티로서 알파가 0인 Color값이 반환된다. Colors클
    //래스의 다른 140개 프로퍼티는 알파가 255이고 미리 정의된 sRGB값의 Color객체가 반환된다. Control에서 상속된 Window의 Background프로퍼티를 바꾸면 클라이언트 영역의 배경색을 바
    //꿀수있다. 단 Background프로퍼티에 Color객체를 직접 대입할수는 없고 훨씬 다양하게 사용되는 Brush타입의 객체를 Background에 대입해야 한다. Brush는 WPF에서 매우 광범위하게 사
    //용되므로 책의 앞부분에서 살펴볼 필요가 있다. Window객체의 Backgroudn프로퍼티에 실제 대입할수 있는 것은 Brush를 상속받은 비추상(nonabstract)클래스의 인스턴스다. 브러쉬(brush
    //)와 관련된 모든 클래스는 System.Windows.Media네임스페이스에 있다. 2장에서는 SolidColorBrush클래스 하나와 GradientBrush를 상속받은 두 개의 클래스에 대해 살펴볼것이다. 
    //이름에서 암시하듯이 가장 간단한 브러시는 SolodColorBrush로써 단일 색상의 브러시이다. 1장 후반부의 예제 에서 System.Windows.Media에 대한 using문을 넣고 Window객체 생성자에
    //다음구문을 추가하면 클라이언트 영역의 색을 변경할수 있다. 
    //Color clr = Color.FromRgb(0, 255, 255); SolidColorBrush brush = new SolidColorBrush(clr); Background = brush;
    //이렇게하면 배경이 청록색(cyan)이된다. 물론 다음과 같이 모든 내용을 한줄로 써도된다. Background = new SolidColorBrush(Color.FromRgb(0, 255, 255));
    //SolidColorBrush에는 인수가 없는 생성자도 있으므로 이를 이용해 객체를 생성하고 그 후 에 Color라는 프로퍼티에 값을 설정할 수도있다. 
    //SolidColorBrush brush = new SolidColorBrush(); brush.color = Color.FromRgb(128, 0, 128);


    //마우스를 클라이언트 영역의 중간으로 이동할수록 배경색은 더 밝은 회색이 되며 반대로 클라이언트 영역을 채우는 가상의 타원을 벗어나면 배경은 검정색이 된다. OnMouseMove 메소드
    //를 오버라이딩한 곳에서 이 동작을 수행하며 이 메소드는 마우스가 클라이언트 영역 위를 움직일 때마다 호출된다. 이 메소드는 다음 두 가지 이유에서 약간 복잡하다. 먼저 클라이언트
    //영역의 크기를 계산해야 한다. 그렇지만 클라이언트 영역에는 실제 내용이 없기 때문에 그 크기를 알수 있는 좋은 방법이 없다. 그래서 창의 ActualWidth와 ActualHeight프로퍼티에서
    //창의 크기를 조절하는 경계와 제목 표시줄의 크기를 뺀다. 이 크기는 SystemParameters클래스의 정적 프로퍼티로부터 얻을수 있다. 

    //MouseEventArgs 클래스의 GetPosition메소드를 호출해서 마우스 포인터의 위치를 구할수 있는데 이 위치는 ptMouse라는 Point객체에 저장된다. 한편 클라이언트 영역의 중심은 ptCenter
    //라는 Point객체에 저장한다. ptmouse에서 ptCenter를 빼면 중심으로부터의 거리가 된다. Point구조체에 대한 문서화 내용을 살펴보면 Point에서 Point를 뺀 결과는 Vector 타입의 객체
    //가 된다는 사실을 알수 있을 것이다. 이 메소드에서는 vectMouse가 이에 해당한다. 수학적으로 벡터는 크기와 방향을 가진다. vectMouse의 크기는 ptCenter와 ptMouse사이의 거리이며
    //Vector 구조체의 Length프로퍼티로 알수 있다. Vector객체의 방향은 x,y 프로퍼티로 알수 있으며 이는 원점(0,0)에서 점(X,Y)까지의 방향을 의미한다. 이 경우에 vectMouse.X는 ptMouse
    //.X - ptCenter.X와 같게되며 Y의 경우도 마찬가지이다. Vector 객체의 방향은 각도로도 표현할수 있다. Vector 구조체에는 두 Vector객체 사이의 각을 계산하는 AngleBetween이란 이름
    //의 정적 메소드가 있다. 그러나 VaryTheBackground프로그램의 onMouseMove 메소드에서는 Y와 X의 비율을 가지고 탄젠트의 역함수인 아크탄젠트를 이용해 vectMouse의 각도를 직접 계산
    //했다. 이 각도는 수평축에서 시계 방향으로 측정된 라디안 값이다. 그런 후 이 각도를 또 다른 Vector 객체를 계산하기 위해 사용하는데 이 Vector는 클라이언트의 중심에서 클라이언트
    //영역을 채우는 타원 위의 점까지 거리를 표현한다. 회색의 정도는 단순하게 이 두 벡터의 비율로 정했다. 그 다음은 최초 생성 때 클래스 필드로 설정한 SolidColorBrush의 Color객체를
    //얻어온다. 그리고 회색을 만들기 위해 3원색을 같은 값으로 설정하고 다시 이 값을 브러시의 Color.프로퍼티에 대입한다. 이 프로그램이 수행하는 것을 보면 꽤 놀랄것이다. 분명 브러
    //시가 변경될때마다 클라이언트 영역이 다시 그려지는데 이와 관련된 어떤 코드도 넣은 적은 없기 때문이다. 이런 동적인 응답이 가능한 이유는 Brush가 Freezable 클래스를 상속 받았
    //기 때문인데 Freezable 클래스에는 Changed라는 이벤트가 구현돼 있다. Changed 이벤트는 Brush객체에 어떤 변화가 생길 때마다 발생하며 이를 이용해서 브러시에 변화가 생길 때마다
    //배경을 다시 그릴수 있는 것이다. Changed 이벤트와 유사한 메커니즘은 애니메이션의 구현이나 WPF의 다른 기능들을 위해 매우 광범위하게 사용된다. Colors 클래스에 색 이름된 141개
    //의 읽기 전용 정적 프로퍼티가 있듯이, Brushes(srk붙음에 주의)란 이름의 클래스에도 141개의 읽기 전용 정적 프로퍼티가 있다. Colors에서의 색 이름이 그대로 쓰이나 반환되는 객체
    //는 SolidColorBrush타입이다. Background프로퍼티를 다음과 같이 설정하는 대신에 Background = new SolidColorBrush(Colors.PaleGoldenrod);
    //다음과 같이 바꿔 쓸수도 있다. Background = Brushes.PaleGoldenrod;
    //이 두 구문 모두 같은 색으로 창의 배경을 칠하기는 하지만 두 방법에는 차이점이 있다. VaryTheBackground 프로그램에서 다음의 정의 부분을 
    //SolidColorBrush brush = new SolidColorBrush(Colors.Black); 다음과같이 변경해보자 SolidColorBrush brush = Brushes.Black;
    //다시 컴파일 하고 실행시키면 읽기 전용 상태이므로 "#FF000000" 개체에서 속성을 설정할수 없습니다. 라는 잘못된 연산 오류가 나타날 것이다. 이 문제는 OnMouseMove 메소드의 가장
    //마지막 문장에서 브러시의 Color 프로퍼티에 값을 설정하려고 했기 때문에 발생한다(예외상황 메시지에서의 16진수는 Color 프로퍼티의 현재 값이다.)
    //Brushes클래스로부터 반환된 SolorColorBrush객체는 고정된(frozen)상태로 더 이상 값을 변경할수 없다. Changed 이벤트처럼 고정이라는 것도 Freezable 클래스에 구현됐고 Brush는 이
    //클래스를 상속받는다. Freezable객체의 CanFreeze프로퍼티가 true이면 Freeze메소드를 호출할수 있다. 이 메소드를 호출하면 객체를 변경할수 없게 고정상태로 만든다. 이렇게 하면 
    //IsFrozen 프로퍼티가 true가 된다 객체를 고정시키면 더 이상 변화 상태를 모니터링할 필요가 없기 때문에 성능을 향상시킬 수 있다. 고정된 Freezable 객체는 스레드 간에도 공유가 가
    //능하지만 고정되지 않은 Freezable 객체는 공유할수 없다. 고정된 객체를 다시 고정 해제된 상태로 만들수는 없으나 고정되지 않은 상태의 복사본을 만들수는 있다. VaryTheBackgroud의
    //필드 정의는 다음과 같이 하면 된다.   SolidColorBrush brush = Brushes.Black.Clone();
    



    class VaryTheBackground : Window
    {
        SolidColorBrush brush = new SolidColorBrush(Colors.Black);
        public VaryTheBackground()
        {
            Title = "Vary the Background";
            Width = 384;
            Height = 384;
            Background = brush;
        }
        protected override void OnMouseMove(MouseEventArgs e)
        {
            base.OnMouseMove(e);
            double width = ActualWidth - 2 * SystemParameters.ResizeFrameVerticalBorderWidth;
            double height = ActualHeight - 2 * SystemParameters.ResizeFrameHorizontalBorderHeight - SystemParameters.CaptionHeight;
            Point ptMouse = e.GetPosition(this);
            Point ptCenter = new Point(width / 2, height / 2);
            Vector vectMouse = ptMouse - ptCenter;
            double angle = Math.Atan2(vectMouse.Y, vectMouse.X);
            Vector vectEllipse = new Vector(width / 2 * Math.Cos(angle), height / 2 * Math.Sin(angle));
            Byte byLevel = (byte)(255 * (1 - Math.Min(1, vectMouse.Length / vectEllipse.Length)));
            Color clr = brush.Color;
            clr.R = clr.G = clr.B = byLevel;
            brush.Color = clr;
        }
    }
}
