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
    //타원이 클라이언트 영역을 채울 것이다. 물론 SimpleEllipse의 Width와 Height 프로퍼티, HorizontalAlignment, VerticalAlignment 프로퍼티를 조정해가면서 시험해 볼 수 있다. 
    //3장에서는 System.Windows.Controls 네임스페이스의 엘리먼트들을 사용했고, Control을 상속받는 다른 클래스(물론 Window는 예외)는 사용하지 않았다 컨트롤은 사용자로부터 입력을 
    //받고 그 입력으로 무엇인가를 하기 위해 만들어졌다. 4장에서는 이에 대해 살펴볼 것이다. 
    class RenderTheGraphic : Window
    {
        public RenderTheGraphic()
        {
            Title = "Render the Graphic";
            SimpleEllipse elips = new SimpleEllipse();
            Content = elips;
        }
    }
}
