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
namespace SayHello.ex3
{
    //컨텐트 : Window클래스에는 100개가 넘는 public프로퍼티가 있고 Title프로퍼티와 같은 일부 프로퍼티는 상당히 중요하다. 그러나 Window의 가장 중요한 프로퍼티는 역시 Content라 할
    //수 있다. 클라이언트 영역에 붙이고 싶은 객체를 Content프로퍼티에 지정하게 된다. Content프로퍼티에는 문자열이나 비트맵(bitmap), 그림, 버튼 스크롤바 등을 지정할수 있고 WPF에서
    //지원하는 50여 가지 컨트롤을 이용할수 있다. Content 프로퍼티에는 무엇이든지 지정할수 있는 것이다. 한 가지 작은 문제가 있긴 하다. 하나의 Content프로퍼티에는 오직 하나의 객체
    //만 할당할수 있다. 이런 제약 때문에 처음 컨텐트를 사용하면 약간 실망스러울 수도 있겠지만 좀더 뒷부분에서 Content프로퍼티에 여러 개의 객체를 할당하는 방법에 대해 설명할 것이
    //다. 그전까지는 하나의 Content객체만을 논의할 것이다. Window클래스는 ContentControl로부터 Content프로퍼티를 상속받는다. ContentControl은 Control을 상속받는 클래스이고 Window
    //가 ContentControl을 직접 상속받는다. ContentControl클래스는 거의 Content프로퍼티를 정의하기 위해 존재한다고 할 정도로 Content와 관련된 프로퍼티와 메소드를 가진다. 
    //Content프로퍼티는 object타입으로 정의돼 있어서 어떤 객체라도 할당할 수 있다는 걸 암시하는 셈인데 거의 사실이라고 할 수 있다. 거의 사실이라고 말한건 Content 프로퍼티에 Windo
    //w 타입의 객체를 할당하는 것이 불가능하기 때문이다. Window는 반드시 트리의 루트(root)가 되어야지 다른 Window객체의 가지(branch)가 돼선 안된다. 이를 어기면 런타임 예외 상황(r
    //un-time exception)이 발생한다. 다음예는 Content프로퍼티에 텍스트 문자열을 할당하는 프로그램이다. 
    //이 프로그램은 클라이언트 영역의 좌측 상단 부분에 "Content can be simple text!라는 텍스트를 출력한다. 모든 텍스트가 들어가지 못할 정도로 창을 좁게 만들면, 자동으로 줄 바꿈되
    //는게 아니라 텍스트가 잘려진다는 사실을 발견할수 있을 것이다. 그러나 캐리지 리턴("\r")이나, 라인피드("\n")또는 둘 모두("\r\n")를 사용해서 줄 바꿈을 넣을 수는 있다. 
    //시험삼아 텍스트의 폰트 색상과 관련된 프로퍼티들을 변경할수 있게 System.Windows.Media 네임스페이스를 추가했다. 관련 프로퍼티들은 모두 Window가 상속받은 Control 클래스에 정의
    //돼 있다. 다음고 같이 클라이언트 영역에 출력되는 텍스트의 폰트를 바꿀 수 있다. 
    //이 구문은 클래스의 생성자 어디에든 올 수 있다. 
    //WPF에서는 Font클래스란 것이 없다. 첫 번째 줄을 보면 FontFamily객체를 참조하고 있다. 폰트 패밀리(font family)란 타입 패밀리(type family)라고도 부르며, 관련된 서체의 모음이다
    //윈도우 에서는 굴림, 돋움, 궁서, Courier new, Times new Roman, Arial Palaino Linotype, Verdana Comic Sans MS와같은 폰트 패밀리가 있다. 
    //타입페이스(typeface)는 페이스 이름이라고도 하는데 폰트 패밀리와 이를 이용한 변화를 조합한 개념이다. Times New Roman Bold Times New Roman Italic, Times New Roman Bold Italic
    //과 같은 예를 들수 있다. 모든 폰트 패밀리에 대해서도 이런 변화가 가능한 것은 아니다. 그리고 어떤 폰트 패밀리에는 Arial Narrow처럼 각 글자의 폭이 달라지는 변화도 있다. 
    //폰트(font)라는 용어는 일반적으로 특정한 크기를 가진 특정 글자체들의 조합을 의미하는 말로 쓰인다. 폰트의 크기를 측정하는 일반적인 용어는 em size(이 용어는 과거에 사용된 대문
    //자 M에 대한 사각형 금속 활자 조각의 크기에서 유래됐다)em size는 통상적으로 라틴 알파벳에서 글자의 높이를 지칭한다. 여기에서의높 이란 발음기호를 제외한 알파벳의 대소문자를
    //통 틀어 상승 문자의 윗부분부터 하강 문자의 아랫부분까지의 거리를 의미한다(역자주: 영어에서 상승 문자(ascender)는 기준선 위에 표기하는 글자(a, b, l, m 등)를, 하강 문자(desce
    //nder)는 기준선에 걸쳐 표기하는 글자(p, q, y 등)를 말한다) 그렇지만 em size는 측량적인 개념이 아닌 인쇄상의 디자인 개념이기 때문에 특정 폰트에서 실제 글자의 크기는 em size
    //보다 다소 크거나 작을 수 있다. 보통 em size는 포인트(point)라는 단위로 명기한다. 전통적인 인쇄술에서 1포인트는 0.01384인치지만, 컴퓨터에서는 정확히 1/72인치로 정한다. 그래
    //서 36 포인트의 em size는 글자의 높이가 1/2인치라는 것을 의미한다. 
    //WPF에서는 원하는 em size를 FOntSize프로퍼티에 지정한다. 이때 FontSize의 단위는 포인트가 아니고 WPF에서 늘 사용되는 1/96인치의 장치 독립적 단위이다. FontSize프로퍼티에 48을 
    //대입하면 em size는 1/2인치 즉 36포인트가 되는 것이다. em size를 포인트로 쓰는 것에 익숙해 있다면 FontSize프로퍼티에 대입할 때 포인트 크기에 4/3을 곱하면 된다(EHsms 0.75로
    //나눠도 된다) 포인트에 익숙하지 않다면 익숙해지게 해야 한다. FontSize프로퍼티를 대입할 때는 단순히 4/3만 곱하면 된다. 
    //FOntSize프로퍼티의 기본값은 11즉 8.25포인트이다. 뉴욕 타임즈(The New Times)는 8포인트 글자체로 인쇄되며 뉴스워크(Newsweek)는 9포인트 글자체를 사용한다. 이책은 9.5 포인트 글
    //자체를 사용했다. FontFamily 생성자에는 다음과 같이 타입페이스 전체의 이름을 쓴다 
    //24포인트의 크기이며 굵은(bold)기울임꼴 (italic)의 Times New Roman글자체를 의미한다. 그 러나 FOntFamily생성자에서는 폰트 패밀리의 이름만을 사용하고 굵은꼴과 기울임꼴은 Font 
    //Style과 FontWeight 프로퍼티에서 설정하는 게 더 일반적이다. 다음 예를 보자
    //FOntStyle과 FontWeight 프로퍼티에 대입하는 값은 FOntStyles와 FOntWeights클래스의 정적 읽기 전용 프로퍼티다. 이 프로퍼티는 FOntStyle과 FontWeight 타입의 객체를 반환한다. 
    //다음 변화도 약간 흥미롭다. 기울임꼴의 타입페이스는 기울임꼴이 아닌 타입페이스와 모양이 조금 다르다. 소문자 "a"를 자세히 보면 차이를 알수 있다. 그러나 oblique 타입페이스는
    //단순히 글자체를 오른쪽으로 눕힌 것뿐이다. 일부 폰트 패밀리에서는 FontStretch 프로퍼티를 FontStretches 클래스의 프로퍼티로 대입할수 있다. 클라이언트 영역 배경을 색칠할 때 썻
    //던 Background 프로퍼티에 대해서는 이제 잘 알고 있을것이다. 텍스트 자체의 색은 Foreground 프로퍼티를 이용한다. 다음과같이 해보자.
    //이제 Foreground와 Background가 모두 같은 브러시로 색이 적용돼서 텍스트가 보이지 않을 것이라 염려스러울수 있지만 그런일은 일어나지 않는다. 2장에서 살펴본 것처럼 배경색을 칠
    //할 때 쓰는 그라디언트 브러시는 자동적으로 클라이언트 영역의 크기에 따라 조정된다. 비슷하게 Foreground의 브러시도 자동적으로 컨텐트인 실제 텍스트 문자열의 크기에 맞게 조정된
    //다 창 크기를 변경하는 것은 Foreground의 브러시에 영향을 미치지 않지만 클라이언트 영역을 정확하게 텍스트의 크기로 조정하면 두 브러시가 일치하게돼 텍스트가 보이지 않을수 있다
    //이제 다음과같이 해보자.
    //Window 클래스에 정의된 SizeToContent 프로퍼티를 사용해 창의 크기를 컨텐트의 크기에 맞게 조정할수 있다. Foreground와 Backgroud에 같은 LinearGradientBrush를 계속 쓰고 있다면
    //텍스트가 보이지 않게 된다. SizeToContent 프로퍼티에는 SizeToContent 열거형의 멤버를 대입한다. 여기에는 기본값인 Manual이 있고 그 밖에 Width, Height, WidthAndHeight가 있다 
    //이 3개는 각기 컨텐트의폭 높이, 전체 크기에 맞추어 창의 크기를 조정한다. 대화상자나 다른 폼을 설계할 때 편리하게 사용할수 있는 프로퍼티다. 창의 크기를 변경할 때 혹은 창의 크
    //기 조절용 경계를 없애는 것도 고려할만 한데, 이는 다음과 같이 한다. 
    //2장의 끝 부분에서 봤던 구문처럼 클라이언트 영역 안쪽에 경계선을 추가할수도 있다. 
    //Foreground 브러시와 SizeToContent 모두 이 경계선의 영향을 받고있다. 컨텐트는 항상 이 경계선의 안쪽에 나타난다. DisplaySomeText 프로그램에서 텍스트 문자열을 출력하는 것은 사
    //실 매우 일반화된 방법을 사용한다. 이미 알고 있겠지만 모든 객체에는 ToString 메소드가 있어서 그 객체를 표현하는 문자열을 반환한다. 객체의 출력은 이 ToString 메소드를 사용한
    //다. 문자열이 아닌 다른 형태도 Content 프로퍼티에 넣을수 있으며 다음이 그런 예다. 
    //Content = Math.PI; 다음 예도 살펴보자  Content = DateTime.Now;
    //두 경우 모두 창에 출력되는 것은 ToString이 반환하는 문자열이다. 그 객체의 클래스가 ToString을 오버라이딩하지 않았으면 기본 ToString메소드에서 클래스 이름 전체를 반환한다.
    //다음의 예를 살펴보자
    //출력되는 문자열은 "System.EventArgs"이다. 유일한 예외를 배열인 경우에서 찾았다 다음과 같이 해보자.
    //ToString 메소드는 "System.Int32[]"를 반환하는 반면에 출력되는 내용은 "Int32[] Array"이다. 
    class DisplaySomeText : Window
    {
        public DisplaySomeText()
        {
            Title = "Display Some Text";
            //FontFamily = new FontFamily("Comic Sans MS"); //추가
            //FontSize = 48; //추가
            FontFamily = new FontFamily("Times New Roman Bold Italic");//추가2
            FontSize = 32; //추가2
            FontStyle = FontStyles.Italic;//추가2
            FontStyle = FontStyles.Oblique; //추가3
            FontWeight = FontWeights.Bold; //추가2
            Brush brush = new LinearGradientBrush(Colors.Black, Colors.White, new Point(0, 0), new Point(1, 1));//추가4
            Background = brush;//추가4
            Foreground = brush;//추가4
            SizeToContent = SizeToContent.WidthAndHeight; // 추가5
            ResizeMode = ResizeMode.NoResize; //추가6
            BorderBrush = Brushes.SaddleBrown;//추가7
            BorderThickness = new Thickness(25, 50, 75, 100);//추가7
            Content = EventArgs.Empty; //추가8
            Content = new int[57]; //추가9
            Content = "Content can be simple text!";
        }
    }
}
