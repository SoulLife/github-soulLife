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
    //이 프로그램에서 처음으로 TextBlock객체를 명시적으로 생성하고 있지만 사실 전에도 한번 나온 적이 있다. Content 프로퍼티에 문자열을 대입할 때 ContentControl(Window가 상속
    //받음)이 TextBlock 타입의 객체를 생성한 것으로 화면에 문자열을 실제로 출력하기 위한 것이다. TextBlock 클래스는 FrameworkElement를 직접 상속받는다. 여기에는 InlineCollec
    //tion타입의 Inlines라는 프로퍼티가 정의돼 있는데, Inline 객체의 컬렉션이다. TextBlock은 System.Windows.Controls 네임스페이스에 있지만 Inline은 System.Windows.Documents에
    //있다. Inline은 심지어 UIElement를 상속받지도 않는다. 다음은 Inline과 그 일부를 보여주는 클래스 계층도다. 
    //이 클래스 계층도를 보면 앞에서 보아온 것들보다 다소 병렬적인 구조라고 느낄 것이다. ContentElement와 FrameworkContentElement 클래스는 UIElement와 FrameworkElement 클래스
    //와 유사하다. 그러나 COntentElement 클래스에는 OnRender 메소드가 없다. 그래서 ContentElement를 상속받은 클래스들의 객체는 화면상에서 단독적으로는 그려지지 않는다. 대신
    //OnRender 메소드가 제공되는 UIElement를 상속받은 클래스를 통해 화면상에 그려질수 있는 시각적 화면(visual repressnation)을 얻게 된다. 
    //더 구체적으로 말하면 Bold와 Italic 타입의 객체는 스스로 그려지지 않는다. FormatTheText프로그램을 보면 이 Bold와 Italic객체는 TextBlock 객체를 통해서 그려지고 있다. 
    //ContentElement와 ContentControl을 혼동해서는 안 된다. ContentControl은 Window와 같은 컨트롤이며 Content프로퍼티도 있다. ContentControl객체는 Content프로퍼티가 null일지
    //라도 화면상에 그려질 수 있다. 그러나 ContentElement객체는 그려지는 다른 엘리먼트의 일부분이 된다.(즉 Content).  FormatTheText프로그램은 TextBlock의 Inlines 컬렉션을 추
    //가하는데 대부분을 할당하고 있다. InlineCollection 클래스에는 Add메소드가 구현돼 있어서 문자열이나. Inline, UIElement 객체를 추가할수 있다. 그러나 Bold와 Italic의 생성자
    //에는 문자열을 쓸 수 없고 오직 Inline 객체만을 받기 때문에 각 Bold와 Italic 객체에 대해 Run 생성자를 먼저 사용한다. TextBlock의 FontSize 프로퍼티를 다음과 같이 지정한다.
    //txt.FontSize = 32;  Window의 FOntSize를 설정해도 똑같이 동작한다. FontSize = 32;  Window의 Foreground 프로퍼티를 설정하면 TextBlock의 텍스트가 지정된 색으로 출력된다.
    //Foreground = Brushes.CornflowerBlue;    화면상의 엘리먼트들은 부모 자식 계층도라는 트리 형태로 존재한다. Window는 TextBlock의 부모가 되고 TextBlock은 몇 가지 Inline 엘
    //리먼트의 부모가 된다. 이 엘리먼트들은 부모 엘리먼트에게서 Foreground 프로퍼티 값과 폰트와 관련된 모든 프로퍼티 값들을 계승한다. 단 자식 엘리먼트에서 원하는 프로퍼티를 
    //명시적으로 설정할수 있다. 이에 대해서는 8장에서 더 자세히 살펴볼 것이다. UIElement 클래스처럼 ContentElement 클래스에는 많은 사용자 입력 이벤트가 정의돼 있다. TextBlock
    //의 텍스트를 이루는 개별 inline 엘리먼트에 이벤트 핸들러를 붙이는 것도 가능하다. 다음 프로그램에서 이런 기법을 배울수 있다. 
    class FormatTheText : Window
    {
        public FormatTheText()
        {
            Title = "Format the Text";
            TextBlock txt = new TextBlock();
            txt.FontSize = 32; //24포인트
            txt.Inlines.Add("This is some ");
            txt.Inlines.Add(new Italic(new Run("italic")));
            txt.Inlines.Add(" text, and this is some ");
            txt.Inlines.Add(new Bold(new Run("bold")));
            txt.Inlines.Add(" text, and let's cap it off with some ");
            txt.Inlines.Add(new Bold(new Italic(new Run("bold italic"))));
            txt.Inlines.Add(" text.");
            txt.TextWrapping = TextWrapping.Wrap;
            Content = txt;
        }
    }
}
