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
namespace SayHello.ex3
{
    class ShapeAnEllipse : Window
    {
        //이 프로그램은 클라이언트 영역에 타원을 그린다. 타원의 경계는 1/4인치의 두께이며 그라디언트 브러시로 칠한다. 내부는 Alice Blue라는 색의 브러시로 칠한다. Shape 클래스나 E
        //llipse 클래스 모두 타원의 크기와 관련된 프로퍼티는 따로 없으나 Ellipse 클래스에는 FrameworkElement에서 상속받은 Width와 Height프로퍼티가 있다. 다음과 같이 대입해보자.
        //Image에서처럼 HorizontalAlignment와 VerticalAlignment프로퍼티를 설정해서 타원의 위치를 지정할 수 있다. 즉 가로는 중앙이나 왼쪽/오른쪽을 세로는 위/아래로 정할 수 있다.
        //다음은 이런 예를 나타낸다.
        //HorizontalAlignment와 VerticalAlignment열거형에는 모두 Center란 멤버가 있고 Stretch란 멤버도 있으며 많은 엘리먼트에서 Stretch가 기본값이다. Ellipse의 기본값도 Stretch인
        //데 처음에 타원이 클라이언트 영역을 가득 채운 이유가 바로 이때문이다. 즉 엘리먼트를 컨테이너의 경계까지 늘리는 것이다. 사실 HorizontalAlignment와 VerticalAlignment를 Str
        //etch가 아닌 다른 값으로 설정하고 Width와 Height프로퍼티를 특정 값으로 설정하면 타원의 직경을 1/4인치 정도로 줄일수 있다. Width와 Height프로퍼티를 설정하지 않고 특정 범
        //위의 크기로 제한하기 위해서 MinWIdth, MaxWidth, MinHeight, MaxHeight 프로퍼티(모두 FrameworkElement에서 상속)중에서 일부나 모두를 설정한다. 기본값은 정의되지 않은 상태
        //다. Window의 생성자 부분을 제외하면 어느 시점에라도 타원의 실제 크기를 얻을 수 있다. 이는 읽기 전용인 ActualWidth와 ActualHeight프로퍼티를 참조하면 된다. 
        //Window의 컨텐트에서도 그랬지만 엘리먼트의 크기에 대해서 조금 강박적으로 다루는 것처럼 보일 수 있겠으나. 그만큼 중요한 주제이기 때문이다. 아마도 기존에는 컨트롤이나 그래
        //픽객체에 특정한 값을 직접 할당해 왔을 것이다. 그러나 WPF에서는 그렇게 하지 않고 객체의 크기를 어떤 형태로 보여줄 것인가에 대해 느낌을 갖는 것이 중요하다. 
        //Ellipse 클래스에는 클라이언트 영역의 특정한 곳에 타원을 위치시킬 수 있는 프로퍼티가 없다. 가장 비슷하게 할수 있는 방법은 HorizontalAlignment와 VerticalAlignment 프로퍼
        //티를 설정하는 것이다. 2장에서 Widow의 COntent 프로퍼티에 텍스트 문자열을 어떻게 설정하는지 텍스트의 폰트는 어떻게 설정하는지에 대해 살펴본바 있다. 그러나 COntent 프로퍼
        //티에 직접 대입한 텍스트는 단일한 형식이었다. 즉 특정 단어에 대해서만 폰트를 굵게(볼드)하거나 기울임꼴(이탤릭)로 할수는 없었다. 이를 가능하게 하려면 Content프로퍼티에 문
        //자열을 대입하는 대신에 TextBlock타입의 객체를 대입해야 한다. 
        public ShapeAnEllipse()
        {
            Title = "Shape an Ellipse";
            Ellipse elips = new Ellipse();
            elips.Fill = Brushes.AliceBlue;
            elips.StrokeThickness = 24; //1/4인치
            elips.Stroke = new LinearGradientBrush(Colors.CadetBlue, Colors.Chocolate, new Point(1, 0), new Point(0, 1));
            elips.Width = 300; //추가
            elips.Height = 300; //추가
            elips.HorizontalAlignment = HorizontalAlignment.Left; //추가1
            elips.VerticalAlignment = VerticalAlignment.Bottom; //추가1
            Content = elips;
        }
    }
}
