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
    class CircleTheRainbow : Window
    {
        //이제 브러시는 클라이언트 영역의 중심에서 빨간색으로 시작해, 클라이언트 영역을 채우는 타원까지 보라색으로 진행한다. 타원의 바깥 영역인 꼭지점 부분은 보라색이 계속될 것이
        //다. SpreadMethod의 기본값이 Pad이기 때문이다. RadialGradientBrush 클래스에는 유용한 기본값을 가진 몇 개의 프로퍼티가 있다. 타원은 세 가지 프로퍼티로 결정한다. Center 프
        //로퍼티는 Point 객체로 기본값은(0.5, 0.5)이며 브러시가 미치는 영역의 중심이다. RadiusX와 RadiusY는 double 값을 가지며 타원의 수평 반경과 수직 반경이다. 기본값으로 0.5이
        //므로 수평과 수직 모두 브러시로 칠해진 영역의 가장자리까지 타원이 도달된다.  Center, RadiusX, RadiusY로 정의되는 타원의 경계는 Offset 프로퍼티가 1일 때의 색이된다.
        //네 번째 프로퍼티인 GradientOrigin은 Center 프로퍼티처럼 기본값이(0.5, 0.5)인 Point객체다. 이름에서 알 수 있듯이 GradientOrigin은 그라디언트가 시작되는 지점이다. Offset
        //프로퍼티가 0인 색(CircleTheRainbow에서는 빨간색)을 볼 수 있는 지점이다. 
        //그라디언트는 GradientOrigin과 타원의 경계사이에서 생긴다. GradientOrigin이 Center와 같다면 그라디언트는 타원의 중심에서 그 둘레까지 생기게 된다. GradientOrigin이 Center
        //에서 다소 벗어나 있다면 그라디언트는 찌그러져 보일 것이고 GradientOrigin이 경계의 밖에 있다면 그라디언트는 부채꼴처럼 펼쳐져 보일 것이다. 이러한 효과를 보려면 CircleThe
        //Rainbow프로그램에 다음과 같은 구문을 추가해보자. 
        //다음의 ClickTheGradientCenter 프로그램을 통해 Center와 GradientOrigin프로퍼티 사이의 관계를 시험해 볼수 있다. RadialGradientBrush에는 두 개의 인자를 받는 생성자가 있어
        //서 GradientOrigin의 색상과 타원 둘레의 색상을 지정한다. 그러나 RadiusX와 RadiusY는 0.10으로 SpreadMethod는 Repeat로 할당해 브러시가 연속적인 동심원이 되게 한다. 
        public CircleTheRainbow()
        {
            Title = "Circle the Rainbow";
            RadialGradientBrush brush = new RadialGradientBrush();
            Background = brush;
            //무지개 색은 빨주노초 파남보
            brush.GradientStops.Add(new GradientStop(Colors.Red, 0));
            brush.GradientStops.Add(new GradientStop(Colors.Orange, .17));
            brush.GradientStops.Add(new GradientStop(Colors.Yellow, .33));
            brush.GradientStops.Add(new GradientStop(Colors.Green, .5));
            brush.GradientStops.Add(new GradientStop(Colors.Blue, .67));
            brush.GradientStops.Add(new GradientStop(Colors.Indigo, .84));
            brush.GradientStops.Add(new GradientStop(Colors.Violet, 1));
            brush.GradientOrigin = new Point(0.75, 0.75); //추가
        }
    }
}
