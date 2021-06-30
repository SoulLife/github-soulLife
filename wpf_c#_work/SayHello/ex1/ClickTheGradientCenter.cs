using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;
using System.Windows.Media;
using System.Reflection;
namespace SayHello.ex1
{
    //OnMouseDown를 오버라이딩해서 클라이언트 영역을 클릭할수 있게 한다. 왼쪽 마우스 버튼을 통해 Center와 Gradientorigin 프로퍼티를 같은 값으로 변경할수 있다. 이 경우 전체 브러시
    //가 클라이언트 영역의 중심에서 단순하게 이동된 것으로 보일것이다. 오른쪽 마우스 버튼을 클릭하면 Gradientorigin만 변경한다. Center지점의 근처로 옮겼으면 한쪽은 찌그러지고 한
    //쪽은 확장된 그라디언트를 볼수 있을 것이다. 효과가 너무 흥미로워서 애니메이션으로 만들어 볼 결심을 했다. 다음 프로그램 RotateTheGradientOrigin은 WPF의 내장된 애니메이션 기능
    //을 전혀 사용하지 않는다. 그 대신 Gradientorigin프로퍼티를 변경하기 위해 간단한 타이머를 사용한다. .NET에는 적어도 네 개의 타이머 클래스가 있고 그중 세 개의 이름은 Timer이다
    //System.Threading과 System.Timers에 있는 Timer클래스는 특정 프로그램에서는 사용할수 없다. 타이머 이벤트가 다른 스레드에서 발생하는데 Freezable 객체는 생성된 스레드와 같은 스
    //레드에서만 변경되기 때문이다. System.Windows.Forms에 있는 Timer클래스는 표준 윈도우 타이머를 캡슐화한 것이며 이를 사용하려면 참조 추가에서 System.Windows.Form.dll 어셈블리
    //를 추가해야 한다. DispatcherTimer 클래스는 System.Windows.Threading 네임스페이스에 있으며 WPF 프로그램에서 사용할수 있다. 특히 애플리케이션 스레드에서 이벤트가 발생돼야 할 
    //때 이 타이머를 선택한다. 타이머 발생 간격을 의미하는 Interval 프로퍼티에 TimeSpan프로퍼티로 설정하는데 10밀리초(millisecond)보다 더 작게 설정할 수는 없다. 여기서 정한 시간
    //마다 Tick이벤트가 발생한다. 다음 프로그램은 창의 크기를 4인치의 정사각형으로 해 처리 시간이 너무 길지 않게 한다. 
    class ClickTheGradientCenter : Window
    {        
        RadialGradientBrush brush;
        public ClickTheGradientCenter()
        {
            Title = "Click the Gradient Center";
            brush = new RadialGradientBrush(Colors.White, Colors.Red);
            brush.RadiusX = brush.RadiusY = 0.10;
            brush.SpreadMethod = GradientSpreadMethod.Repeat;
            Background = brush;
        }
        protected override void OnMouseDown(MouseButtonEventArgs e)
        {
            base.OnMouseDown(e);
            double width = ActualWidth - 2 * SystemParameters.ResizeFrameVerticalBorderWidth;
            double height = ActualHeight - 2 * SystemParameters.ResizeFrameHorizontalBorderHeight - SystemParameters.CaptionHeight;
            Point ptmouse = e.GetPosition(this);
            ptmouse.X /= width;
            ptmouse.Y /= height;
            if(e.ChangedButton == MouseButton.Left)
            {
                brush.Center = ptmouse;
                brush.GradientOrigin = ptmouse;
            }else if(e.ChangedButton == MouseButton.Right)
            {
                brush.GradientOrigin = ptmouse;
            }
        }
    }
}
