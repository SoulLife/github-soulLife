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
    //다음은 이 그라디언트를 이용한 예제 프로그램이다. 
    //클라이언트 영역의 크기가 변경될 때 그라디언트 브러시도 저절로 변경된다. 즉 Change 이벤트가 Freezable 클래스에 의해 구현됐기에 가능한 것이다. 상대 좌표계를 이용해 점의 위치
    //를 설정하는 것이 편리하지만 반드시 그렇게 해야 하는 것은 아니다. GradientBrush 클래스에는 MappingMode 프로퍼티가 정의돼 있으며 BrushMappingMode 열거형의 멤버로 대입한다. 
    //멤버에는 기본값인 RelativeToBoundingBox가 있고 장치 독립적 단위를 사용한다는 의미인 Absolute가 있다. 
    //GradiateTheBrush 프로그램에서 클라이언트 영역의 좌측 상단은 16진수의 RGB로 FF-00-00이며 우측 하단은 00-00-FF이다. ColorInterpolationMode의 기본값이 ColorInterpolationMode.
    //SRgbLinearInterpolation이기 때문에 중간에서의 색상은 반올림에 따라 7F-00-7F나 80-00-80이 될것이다. ColorInterpolationMode.ScRgbLinearInterpolation으로 하면 중간색이 scRGB
    //값으로 0.5-0.5가 되며 이에 해당하는 sRGB값은 BC-00-BC가 된다. 수평이나 수직의 그라디언트를 만들려면 다음과 같은 생성자를 사용하는 것이 더 쉽다. 
    //new LinearGradientBrush(clr1, clr2, RectangleGeometry);    angle은 각도로 지정하므로 0이면 수평 그라디언트가 된다. 이때 clr1은 왼쪽에서의 색상이 된다. 위의 구문은 아래의 구
    //문과 동일한 효과를 갖는다. new LinearGradientBrush(clr1, clr2, new Point(0,0), new Point(1,1));   값이 90이면 수직 그라디언트가 되고 clr1은 위쪽의 색상이 된다. 역시 아래 아
    //래 구문과 동일한 효과가 있다.  new LinearGradientBrush(clr1, clr2, new Point(0,0), new Point(0,1));   다른 각도를 사용하려면 약간 기교를 부려야한다. 일반적인 경우에는 첫 번
    //째 점을 항상 원점으로 하고 두 번쨰 점을 다음과 같이 계산한다. 
    //new Point(cos(angle), sin(angle));     45도를 예로 들면 두 번째 점은 대략(0.707, 0.707)이된다. 이때 클라이언트 영역에 대해 상대적이라는 사실을 기억해야 한다. 그래서 클라이
    //언트 영역이 정사각형이 아니라면 두 점을 잇는선이 정확히 45도가 될수 없ㄷ. 또한 우측하단에 남는 영역도 생긴다. 이 남는 영역은 어떻게 될까? 기본값은 두 번째 색으로 칠하게된
    //다. 이는 SpreadMethod프로퍼티가 어떤 값을 갖는지에 따라 달라지는데 이 프로퍼티에는 GradientSpreadMethod열거형의 멤버로 대입한다. 기본값은 Pad이며 마지막에서는 색이 필요한
    //만큼 계속된다는 의미이다. 다른 값으로는 Reflect와 Repeat가 있다. GradiateTheBrush 프로그램에서 다음 구문을 이용해 시험 해보자. 
    //LinearGradientBrush brush = new GradientBrush(Colors.Red, Colors.Blue, new Point(0,0),new Point(0.25, 0.25));   
    //brush.SpreadMethod = GradientSpreadMethod.Reflect;
    //이 브러시는 점(0,0)과 점(0.25, 0.25)사이를 빨간색에서 파란색까지의 그라디언트로 출력한다. 그리고 점(0.25, 0.25)부터 점(0.5, 0.5)까지는 파란색에서 빨간색으로 점(0.5, 0.5)부
    //터 점(0.75, 0.75)까지는 다시 빨간색에서 파란색으로 점(0.75, 0.75)부터 점(1,1)까지는 파란색에서 빨간색으로 그라디언트가 된다. 
    //가로 크기와 세로 크기의 차이를 강조하기 위해 창을 옆으로 매우좁게 하거나 위/아래로 짧게하면 균일한 색상의 선이 거의 수평이나 수직으로 보이게된다. 마주 보는 꼭지점을 그라디
    //언트로 할수도 있는데 이렇게 하면 다른 두 꼭지점에 균일한 색의 선이 생긴다. 이를 이해하는데 다음 그림이 도움이 될것이다. 직사각형 모양으로 크기를 늘린 클라이언트 영역의 모습
    //점선은 pt1과 pt2를 잇는 점에 수직 성분을 표시한 것으로 균일한 색으로 칠해지는 영역을 나타낸다. 위와 약간 다른 아래 형태의 그라디언트를 만들어 보자. 
    //자홍색의 영역이 두 꼭지점을 지나고 있다. 문제는 좌측 하단과 우측 상단을 잇는 선에 대해 두 점을 잇는 선이 수직이되게 pt1과 pt2를 계산해야 한다는 점이다. 사각형의 중심에서 pt
    //1과 pt2를 잇는 선의 길이(L)는 다음과같이 계한할수있다. 여기서 W는 창의 폭이며 H는 높이가 된다. 다음은 클라이언트 영역을 보여주는데 몇 가지 선과 설명을 추가했다. 
    //직선 L은 pt1과 pt2를 잇는 선과 평행이다. sin(a)를 두 가지 방법으로 계산할수 있다. 먼저 다음과 같이 H를 사각형의 대각선 길이로 나누는 방법이다. 
    //또다른 방법으로 L에 대해서는 W가 빗변이 될수 있으므로 다음과 같이 계산할수도 있다. 이 두 방정식을 결합해서 L을 구하는 것이다. 

    //다음 예제의 생성자에서는 LinearGradientBrush를 생성하는데 MappingMode를 Absolute로 지정한다. 또한 생성자에서 SizeChanged 이벤트에 대한 핸들러를 설치하고 있는데 Size Changed
    //는 창의 크기가 변경될 때마다 발생하는 이벤트이다. 
    class GradiateTheBrush : Window
    {        
        public GradiateTheBrush()
        {
            Title = "Gradiate the Brush";
            LinearGradientBrush brush = new LinearGradientBrush(Colors.Red, Colors.Blue, new Point(0, 0), new Point(1, 1));
            Background = brush;
        }
    }
}
