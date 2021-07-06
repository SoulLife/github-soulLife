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
namespace SayHello.ex3
{
    //OnRender가 호출되기 전에 RenderSize 프로퍼티가 정해지는데, 이는 Width와 Height 설정, 클래스와 그 클래스가 나타날 컨테이너간의 조율을 통해 결정된다. 예전 방식의 윈도우 프로
    //그래밍에 경험이 있다면 이 메소드에서 화면에 직접 타원을 그릴것이라고 추측하겠지만 그렇지 않다 최종 시점에서 화면에 타원을 그릴수 있게 DrawEllipse의 인자들을 보관한다. 이
    //최종시점이라는 것이 바로 지금이 될 수도 있겠지만 다양한 곳에서 이 그래픽을 보관하고 또 화면상에서 이를 조합하는 것이 WPF가 그래픽의 마술을 보여 줄 수 있는 이유이다.
    //다음은 SimpleEllipse 객체를 생성해서 Content 프로퍼티에 대입하는 프로그램이다. 
    class SimpleEllipse : FrameworkElement
    {
        protected override void OnRender(DrawingContext dc)
        {
            base.OnRender(dc);
            dc.DrawEllipse(Brushes.Blue, new Pen(Brushes.Red, 24), new Point(RenderSize.Width / 2, RenderSize.Height / 2), RenderSize.Width / 2, RenderSize.Height / 2);
        }
    }
}
