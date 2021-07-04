using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Reflection;
using System.Windows.Threading;
namespace SayHello.ex3
{
    //이미지를 출력하기 위해서는 두 단계가 필요하다. 먼저Uri객체를 생성하고 비트맵의 위치를 지정한다. 그리고 이를 BitmapImage의 생성자에 넘긴다. BitmapImage에서 실제로 이미지를 
    //메모리에 로딩한다(GIF, TIFF, JPEG, PNG 등 다양한 대중적인 포맷이 지원된다)Image 클래스로 창에 이미지를 출력한다. COntent 프로퍼티에 대입하는 것이 바로 Image 클래스의 인스턴
    //스다. Image 클래스는 System.Windows.Controls 네임스페이스에 있다. 엄격하게 말하면 Image는 컨트롤로 간주되지 않으며 Control 클래스를 상속받고 있지도 않다. 그러나 System.Win
    //dows.Controls 네임스페이스는 매우 중요해서 대부분의 프로그램에서 사용할 것이다. BitmapImage 클래스는 System.Windows.Media.Imageing 네임스페이스에 있으며 비트맵 작업을 한다
    //면 매우 중요한 네임스페이스이다. 그러나 프로그램에서 꼭 필요한 경우가 아니면 using문으로 포함시키지는 않을 것이다. 이미지 파일을 메모리가 아닌 디스크 드라이브에 로딩할 수도
    //있다. Uri생성자의 인자로 전체 파일 이름을 절대 경로로 지정하거나 "file://를 붙여서 상대 경로로 할수 있다. 다음 구문으로 교체해서 송어를 낚아 올리는 낚시꾼의 이미지를 받아
    //보자. Uri uri = new Uri(System.IO.Path.Combine(Environment.GetEnvironmentVariable("windir"), "Gone Fishing.bmp");
    //Environment.GetEnvironmentVariable 메소드는 "C:\WINDOWS"와 같이 "windir"의 환경 변수를 알려준다. Path.Combine 메소드는 경로 이름과 비트맵의 파일 이름을 합쳐주어 게으른 프로
    //그래머들이 슬래시를 정확하게 넣어야 하는 걱정을 덜어준다. Path 클래스 앞에 System.IO를 붙여도되고 using문을 이용해 네임스페이스를 포함시킬 수도 있다. 
    //Uri객체를 BitmapImage 생성자에 넘길수도 있지만 BitmapImage의 UriSource프로퍼티에 Uri객체를 직접 대입할 수도 있다. 다만 아래와 같이 이 프로퍼티에 대입하는 것을 Bitmap Image
    //의 BeginInit와 EndInit호출 사이에 위치시킬 것을 권장한다. 
    //bitmap.BeginInit();   bitmap.UriSource = uri;   bitmap.EndInit(); 잘 알고 있듯이 비트맵에는 가로 픽셀 수와 세로 픽셀수가 있다. BitmapImage 클래스는 BitmapSource에서 읽기 전
    //용의 정수형인 PixelWidth와 PixelHeight 프로퍼티를 상속받는다. 항상 그렇지는 않지만 비트맵에는 해상도 정보가 포함되기도 한다. 해상도 정보는 어떨 때에는 매우 중요하고(희긔 우
    //표의 스캔처럼)또 어떨 때는 별로 그렇지 않다. 인치당 점의 개수에 해당되는 해상도 정보는 읽기 전용의 double값인 DpiX와 DpiY에 있다. BitmapImage 클래스에는 읽기 전용의 double
    //프로퍼티인 Width와 Height도 있다. 이 값은 다음 공식으로 계산 된다. 이 공식에서 분자에 있는 96이라는 숫자를 빼면 높이와 폭이 인치로 계산된다. 96때문에 인치에서 장치 독립적
    //단위로 변환된다. Height와 Width 프로퍼티는 장치 독립적 단위로 비트맵의 크기를 나타낸다. 또한 BitmapImage는 BitmapSource에서 Format 프로퍼티를 상속받는데, 이는 비트맵의 색
    //포맷(color format)을 알려준다. 색 테이블(color table)이 있는 경우라면 Palette 프로퍼티를 통해 접근할 수 있다. ShowMyFace 프로그램이 얼굴을 출력하든지 송어 낚시꾼이나 기타 
    //어떤 내용을 출력하든지에 상관없이 이미지는 창의 영역에 맞게 왜곡 없이 출력되고 있다. 클라이언트 영역의 가로세로 비율이 정확히 맞지 않으면 남는 부분인 위와 아래 혹은 왼쪽과
    //오른쪽은 창의 배경이 보일 것이다. 창의 내부에서 이미지 크기를 결정하는 것은 Image프로퍼티다.. 그중 하나는 Stretch인데 기본값은 Stretch.Uniform이며 이는 클라이언트 영역을 채
    //울때 이미지 크기를 균일하게 늘리거나 줄이라는 의미이다. Stretch 프로퍼티에 설정할수 있는 또 다른 값은 Stretch.Fill이다. img.Stretch = Stretch.Fill;
    //이 설정은 이미지가 창 전체에 표시되게 가득 채우라는 의미이며, 보통은 이미지의 왜곡이 생긴다. 이는 가로 세로의 비율이 정확하게 일치하지 않으므로 크기가 서로 다르게 변경되기
    //때문이다. Stretch.UniformToFill은 이미지의 크기를 균일하게 변경시키기는 하지만 클라이언트 영역 전체를 채운다. 이를 수행하기 위해서 이미지의 어느 한쪽을 잘래는 방법을 사용한
    //다. Stretch.None은 BitmapSource의 Width, Height프로퍼티에서 얻어온 값을 이용해 그 크기대로 출력한다. Stretch에 Stretch.None이외의 값을 대입하면 Image의 StretchDirection 프
    //로퍼티도 설정할수 있다. 기본값은 StretchDirection.Both이며 이미지의 크기를 늘리거나 줄이거나 모두 가능하다는 의미이다. StretchDirection.DownOnly로 설정하면 이미지의 크기가
    //줄어 들 수 는 있어도 커지지는 않는다. 반대로 StretchDirection.UpOnly는 이미지의 크기를 키우는 것만 할수 있다. 
    //이미지의 크기에 관계없이 이미지가 출력되는 곳은 항상 창의 중앙 부분이다.(Stretch.UniformToFill만예외)
    //FrameworkElement에서 상속받은 Image의 HorizontalAlignment, VerticalAlignment 프로퍼티를 설정함으로써 위치를 변경시킬 수 있다. 다음고 같이 이미지의 출력 위치를 클라이언트 영
    //역의 우측 상단으로 변경할수 있다.     img.HorizontalAlignment = HorizontalAlignment.Right; img.VerticalAlignemnt = VerticalAlignment.Top;
    //HorizontalAlignment, VerticalAlignment 프로퍼티는 WPF의 레이아웃에 매우 중요한 역할을 한다. 이 프로퍼티를 앞으로도 계속 반복적으로 보게 될것이다. Image객체를 우측 상단에 위
    //치시킬때 경계에 인접하지 않기를 원한다면 다음과 같이 Image 객체에 여백을 줄수 있다. img.Margin = new Thickness(10); Margin은 FrameworkElement에 정의돼 있고 엘리먼트 주위에
    //약간의 여유 공간을 주기 위해 사용된다. 여기서 Thickness 구조체는 네 경계면 모두 같은 두께로 여백을 주고 있다. 이 경우에는 10/96인치이므로 약0.1인치다. 네 경계에 서로 다른
    //여백을 줄 수도 있다. 2장에서 살펴본 것처럼 네 개의 인자를 전달하는 Thickness 생성자를 사용하며 왼쪽, 위쪽, 오른쪽, 아래쪽 순서로 설정한다. 
    //img.margin = new Thickness(192,96,48,0); 이제 여백이 왼쪽은 2인치 위쪽은1인치 오른쪽은 1/2인치가 됐으며 아래쪽은 여백이 없다. 이미지와 여백 모두가 표시되지 않을 정도로 창을
    //아주 작게 하면 여백이 우선시 되므로 이미지가 보이지 않게 된다. Image객체는 FrameworkElement로부터 Width, Height프로퍼티도 상속받았다. 읽기와 쓰기가 가능한 double값인데 그
    //값을 보면 "숫자가 아님"(not a number))을 의미하는 NaN이므로 정의되지 않았음을 알 수 있다(Window 객체의 경우와 같다)Stretch의 설정과 일치하지 않더라도 Image 객체의Width, Hei
    //ght를 설정할 수 있다. 또한 다음과 같이 이미지의 크기에 맞게 창의 크기도 조정할수 있다. SizeToContent = SizeToContent.WidthAndHeight;
    //Window 객체의 Foreground 프로퍼티를 설정하는 것은 이미지 출력에 아무런 영향을 미치지 않는다. Foreground 프로퍼티는 Window의 컨텐트가 텍스트나 텍스트를 출력하는 다른 엘리먼
    //트 타입인 경우에만 효과가 있다. 보통 Window객체의 Background 프로퍼티를 설정하면 클라이언트 영역 중에서 이미지가 없는 부분에 대해서만 효과가 생긴다. 그러나 다음과
    //같이해보자 img.Opacity = 0.5; Background = new LinearGradientBrush(Colors.Red, Colors.Blue, new Point(0,0), new Point(1,1));
    //이제 배경 브러시는 이미지를 통해서도 보여진다. Opacity 프로퍼티는 기본값이 1이지만 엘리먼트를 투명하게 하기 위해0부터 1사이의 값으로 바꿀 수 있다(Window 객체 자체에서는 통하
    //지 않는다). 그래픽 변환에 관한 자세한 논의는 이책의29장으로 미룬다. 단 다음 구문을 보면 비트맵을 회전시키는 것이 얼마나 쉬운지를 알수 있다. 
    //img.LayoutTransform = new RotateTransform(45);  Image 클래스에는 그 자체의 Background나 Foreground 프로퍼티는 없다. 이 프로퍼티는 COntrol클래스에 정의돼 있지만. Image는 Cont
    //rol을 상속받지 않기 때문이다. 처음에는 이 점이 약간 혼돈스러울 수 있다. 이전의 윈도우 애플리케이션 프로그래밍 인터페이스에서는 화면상의 모든 것들을 컨트롤로 간주했었다. 
    //그러나 지금은 그렇지가 않다. 컨트롤은 실제로 보이는 객체이며, 주로 사용자 입력에 대해 피드백을 준다는 특징을 갖고 있다. 물론 Image와 같은 엘리먼트는 사용자 입력을 받을 수는 
    //있다. 모든 키보드, 마웃, 스타일러스 펜 이벤트는 UIElement에 정의돼 있기 때문이다. System.Windows.Shapes 네임스페이스를 살펴보자. 여기에는 Shape라는 추상 클래스와 이를 상속받
    //은 여섯 개의 다른 클래스가 정의돼 있다. 아래 계층도와 같이 이 클래스들은 FrameworkElement를 거쳐 UIElement를 상속받고 있다. Image는 표준 방식으로 래스터 이미지를 화면에 출력
    //하지만 Shape 클래스는 이차원 벡터 그래픽을 구현한다. 다음 프로그램은 Ellipse타입의 객체를 생성한다. 
    class ShowMyFace : Window
    {
        public ShowMyFace()
        {
            Title = "Show My Face";
            Uri uri = new Uri("http://www.charlespetzold.com/PetzoldTattoo.jpg");
            BitmapImage bitmap = new BitmapImage(uri);
            Image img = new Image();
            img.Source = bitmap;
            Content = img;
        }
    }
}
