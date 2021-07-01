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
    //w 타입의 객체를 할당하는 것이 불가능하기 때문이다. Window는 반드시 트리의 루트(root)가 되어야지 다른 Window객체의 가지(branch)가 돼선 안된다. 이를 어기면 런타임 예외 상황(ru
    //n-time exception)이 발생한다. 다음예는 Content프로퍼티에 텍스트 문자열을 할당하는 프로그램이다. 


    class DisplaySomeText : Window
    {
    }
}
