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
    //생성자에서는 햄릿에 나오는 대사를 단어를 분리해서 각 단어로 Run객체를 생성하고 이를 TextBlock 객체의 Inlines 컬렉션에 추가한다. 이와 함께 각 Run객체의 MouseDown 이벤트에 대
    //한 RunMouseDown 핸들러를 붙인다. Run클래스는 TextElement 클래스에서 FontStyle과 FontWeight를 상속받는데, 마우스 버튼을 클릭하면 이벤트 핸들러에서 이 세 가지 프로퍼티를 변경
    //한다. 왼쪽 버튼을 클릭하면 FontStyle이 FontStyles.Italic 일 경우에는 FontStyles.Normal로 바꾸고, FontStyles.Normal 인 경우에는 FontStyles.Italic으로 바꾼다. 오른쪽 클릭일 
    //경우에는 같은 방식을 써서 FontWeight의 값을 FontWeights.Normal이나 FontWeights.Bold로 전환한다. 
    //앞서 Content 프로퍼티에는 UIElement를 상속한 클래스의 인스턴스가 대입돼야 한다고 언급한 적이 있다. 클래스에 ONRender라는 메소드가 정의돼야 화면상에 객체가 보일 수 있기 때문
    //이다. 이번 장의 마지막 프로그램 이름은 RenderTheGraphic이며 두 개의 소스 코드파일이 있다. 첫번째 파일은 커스텀(custom)엘리먼트를 정의하는 클래스이고, 두 번째 파일에서는 그
    //클래스의 인스턴스를 Content에 설정한다. 다음의 클래스는 FrameworkElement를 상속받는다. FrameworkElement는 UIElement를 직접 상속받는 유일한 클래스다. 중요한 메소드인 OnRende
    //r 메소드를 오버라이딩해 DrawingContext 객체를 얻어오며 이 객체는 DrawEllipse 메소드를 이용해 타원을 그릴 때 사용된다. 이 클래스는 System.Windows.Shapes 네임스페이스에 있는
    //Ellipse 클래스를 간단하게 흉내 내고 있다. 
    class ToggleBoldAndItalic : Window
    {
        public ToggleBoldAndItalic()
        {
            Title = "Toggle Bold & Italic";
            TextBlock text = new TextBlock();
            text.FontSize = 32;
            text.HorizontalAlignment = HorizontalAlignment.Center;
            text.VerticalAlignment = VerticalAlignment.Center;
            Content = text;

            string strQuote = "To be, or not to be, that is the question";
            string[] strWords = strQuote.Split();
            foreach(string str in strWords)
            {
                Run run = new Run(str);
                run.MouseDown += RunOnMouseDown;
                text.Inlines.Add(run);
                text.Inlines.Add(" ");
            }
        }
        void RunOnMouseDown(object sender, MouseButtonEventArgs e)
        {
            Run run = sender as Run;
            if(e.ChangedButton == MouseButton.Left)
            {
                run.FontStyle = run.FontStyle == FontStyles.Italic ? FontStyles.Normal : FontStyles.Italic;
            }
            if(e.ChangedButton == MouseButton.Right)
            {
                run.FontWeight = run.FontWeight == FontWeights.Bold ? FontWeights.Normal : FontWeights.Bold;
            }
        }
    }
}
