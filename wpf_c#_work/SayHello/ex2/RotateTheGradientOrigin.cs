using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;
using System.Windows.Media;
using System.Reflection;
using System.Windows.Threading;
namespace SayHello.ex2
{
    //이번 장에서는 Window의 Background 프로퍼티에 초점을 맞췄지만 이외에 Window의 다른 세가지 프로퍼티도 Brush 타입이다. 그 중 하나는 OpacityMask로서 UIElement에서 상속받은 프로
    //퍼티인대 이에 대해서는 31장에서 더 자세히 논의할 것이다. 또한 Window는 COntrol로부터 두 개의 Brush를 상속받는다. 첫 번째는 BorderBrush로 클라이언트 영역의 경계선을 그리는데
    //사용된다. 예제 프로그램에 다음 구문을 추가해보자. 
    //Thickness 구조체는 Left, Top, Right, Bottom이라는 4개의 프로퍼티가 있고 이 4개의 인자를 차례로 생성자로 넘긴다. 이 프로퍼티는 클라이언트 영역의네 경계선 두께를 장치 독립적
    //단위로 지정한다. 네 경계선을 모두 같은 두께로 설정하려면 다음과 같이 하나의 인자만을 취하는 생성자를 사용한다. 
    //BorderThickness = new Thickness(50); 물론 다음과 같이 경계에 대해서도 그라디언트를 사용할수 있다. 
    //BorderBrush = new LinearGradientBrush(Colors.Red, Colors.Blue, new Point(0, 0), new Point(1,1));
    //클라이언트 영역의 경계에서만 볼수 있다는 점을 제외하면 클라이언트 영역을 채우는 그라디언트 브러시와 매우 닮았다. 좌측 상단의 꼭지점에서 빨간색을 우측 하단 꼭지점에서는 파란
    //색을 보게된다. 다음과 같이 BorderBrush와 Background에 모두 같은 그라디언트 브러시를 지정해도 두 개의 브러시가 완전히 섞이지는 않는다. 
    //Background = new LinearGradientBrush(Colors.Red, Colors.Blue, new Point(0,0), new Point(1,1));
    //경계 브러시로 칠해지지 않은 영역내에서 배경 브러시가 완전히 나타난다. 마지막 Window의 Brush타입 프로퍼티는 Foreground이다. 그러나 이 프로퍼티로 무엇을 하려면 먼저 창에 어떤
    //컨텐트(content)를 넣어야 한다. 컨텐트는 텍스트나 그래픽 이미지, 또는 컨트롤 등 매우 다양한 형태를 갖는다.
    class RotateTheGradientOrigin : Window
    {
        RadialGradientBrush brush;
        double angle;
        public RotateTheGradientOrigin()
        {
            Title = "Rotate the Gradient Origin";
            WindowStartupLocation = WindowStartupLocation.CenterScreen;
            Width = 384; //즉 4인치
            Height = 384;
            brush = new RadialGradientBrush(Colors.White, Colors.Blue);
            brush.Center = brush.GradientOrigin = new Point(0.5, 0.5);
            brush.RadiusX = brush.RadiusY = 0.10;
            brush.SpreadMethod = GradientSpreadMethod.Repeat;
            Background = brush;
            BorderBrush = Brushes.SaddleBrown; //추가
            BorderThickness = new Thickness(25, 50, 75, 100); //추가
            DispatcherTimer tmr = new DispatcherTimer();
            tmr.Interval = TimeSpan.FromMilliseconds(100);
            tmr.Tick += TimeronTick;
            tmr.Start();
        }

        private void TimeronTick(object sender, EventArgs e)
        {
            Point pt = new Point(0.5 + 0.05 * Math.Cos(angle), 0.5 + 0.05 * Math.Sin(angle));
            brush.GradientOrigin = pt;
            angle += Math.PI / 6; //즉 30도
        }
    }
}
