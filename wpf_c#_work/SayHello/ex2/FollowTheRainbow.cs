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
    //이제 주제를 LinearGradientBrush에서 RadialGradientBrush로 옮겨보자. 이를 위해서 브러시에 사용된 클래스 이름을 RadialGradientBrush로 바꾸고 StartPoint와 EndPoint의 대입문을
    //모두 지운다. 이렇게 하면 다음과 같이 될것이다. 
    class FollowTheRainbow : Window
    {
        public FollowTheRainbow()
        {
            Title = "Follow the Rainbow";
            LinearGradientBrush brush = new LinearGradientBrush();
            brush.StartPoint = new Point(0, 0);
            brush.EndPoint = new Point(1, 0);
            Background = brush;
            //무지개 색은 빨주노초 파남보
            brush.GradientStops.Add(new GradientStop(Colors.Red, 0));
            brush.GradientStops.Add(new GradientStop(Colors.Orange, .17));
            brush.GradientStops.Add(new GradientStop(Colors.Yellow, .33));
            brush.GradientStops.Add(new GradientStop(Colors.Green, .5));
            brush.GradientStops.Add(new GradientStop(Colors.Blue, .67));
            brush.GradientStops.Add(new GradientStop(Colors.Indigo, .84));
            brush.GradientStops.Add(new GradientStop(Colors.Violet, 1));
        }
    }
}
