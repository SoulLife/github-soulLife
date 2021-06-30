using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;
using System.Windows.Media;
using System.Reflection;
namespace SayHello.ex2
{
    //이벤트 핸들러의 시작 부분은 클라이언트 영역의 폭과 높이를 계산한다. Vector객체인 vectDiag는 좌측 하단에서부터 우측 상단까지의 대각 성분을 나타내는 백터이다. 다음과 같이 우
    //측 상단의 좌표에서 좌측 하단의 좌표를 빼는 방법으로 계산할수 있다. 
    //vectDiag = new Point(width, 0) - new Point(0, height);
    //vectPerp객체는 대각선에 대해 수직이다. 수직 벡터는 X와 Y프로퍼티를 서로 바꾸고 어느 한 쪽의 부호를 바꾸는 것으로 쉽게 만들수 있다. Normalize 메소드는 X와 Y프로퍼티를 Length
    //프로퍼티로 나누어서 결과적으로 Length프로퍼티를 1이 되게 만든다. 그 후에 앞서 설명한 L에 해당하는 길이를 vectPerp에 곱한다. 
    //마지막 단계는 LinearGradientBrush의 StartPoint와 EndPoint프로퍼티를 설정하는 것이다. 이 프로퍼티들은 보통 브러시 생성자를 통해 설정하는데 LinearGradientBrush 자체에 정의돼
    //있는 프로퍼티는 이 두 개 뿐이다. (이 외에는 GradientBrush추상 클래스로부터 몇 가지 프로퍼티를 상속받는다.) 다시 말하지만 브러시가 변경될 때 창도 스스로 다시 그려지기 때문에
    //프로그램에서 해야할 유일한 작업은 LinearGradientBrush의 프로퍼티를 변경하는 것뿐이다. 이는 Freezable 클래스에 정의된 Changed 이벤트의 마술이다. 
    //사실 LinearGradientBrush는 지금까지 살펴본 두 프로그램에서 사용했던 것보다 더 다양하게 사용할수 있다. 이 브러시는 여러 색들 사이에서의 그라디언트도 만들수 있다. 이런 특징을
    //사용하려면 GradientBrush에 정의된 GradientStops 프로퍼티를 이용해야 한다. GradientStops 프로퍼티는 GradientStopCollection타입의 객체이며 GradientStop 객체들의 모음이다. 
    //GradientStop에는 Color와 Offset이란 두 개의 프로퍼티가정의돼 있고 다음과 같이 프로퍼티를 받는 생성자가 있다. 
    //new GradientStop(clr, offset) Offset프로퍼티는 0부터 1까지의 값을 갖는데 StartPoint와 EndPoint사이의 상대적인 거리를 나타낸다. 예를 들어 StartPoint가(70,50)이고 EndPoint가
    //(150, 90)인 경우를 가정하면 0.25의 Offset프로퍼티는 StartPoint에서 EndPoint까지의 거리의 1/4가 되는 점인(90,60)을 의미하게 된다. 물론 StartPoint가 (0,0)이고 EndPoint가(0,1)
    //이나(1,0)또는 (1,1)이라면 Offset에 대응하는 점을 결정하기는 훨씬 쉽다. 
    //다음 프로그램에서는 수직 LinearGradientBrush를 생성하고 7가지의 무지개 색에 대응하는 7개의 GradientStop객체를 생성한다. 각 GradientStop은 창 폭의 1/6씩 오른쪽으로 위치한다.
    class AdjustTheGradient : Window
    {
        LinearGradientBrush brush;
        public AdjustTheGradient()
        {
            Title = "Adjust the Gradient";
            SizeChanged += WindowOnSizeChanged;
            brush = new LinearGradientBrush(Colors.Red, Colors.Blue, 0);
            brush.MappingMode = BrushMappingMode.Absolute;
            Background = brush;
        }
        void WindowOnSizeChanged(object sender, SizeChangedEventArgs e)
        {
            double width = ActualWidth - 2 * SystemParameters.ResizeFrameVerticalBorderWidth;
            double height = ActualHeight - 2 * SystemParameters.ResizeFrameHorizontalBorderHeight - SystemParameters.CaptionHeight;

            Point ptCenter = new Point(width / 2, height / 2);
            Vector vectDiag = new Vector(width, -height);
            Vector vectPerp = new Vector(vectDiag.Y, -vectDiag.X);
            vectPerp.Normalize();
            vectPerp *= width * height / vectDiag.Length;
            brush.StartPoint = ptCenter + vectPerp;
            brush.EndPoint = ptCenter - vectPerp;
        }
    }
}
