using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;
namespace SayHello.ex1
{
    //KeyDown 이벤트와 관련된 OnKeyDown 메소드는 키 누름을 통지한다. 키보드의 키를 누르고 뗄때 OnkeyDown과 OnkeyUp메소드가 호출된다. 이 메소드를 오버라이딩해 키 입력을 처리할 수
    //있다. KeyEventArgs객체의 Key 프로퍼티는Key열거형의 멤버로 설정돼 있으며 누르거나 뗀 키가 어떤 키인지를 알려준다. Left, Top, Width, Height프로퍼티는 모두 부동 소수점 값 이
    //므로 창의 크기를 늘리거나 줄이기 위해 이 값들을 사용한다. 윈도우 전체 화면보다 더 크거나 작게 해서는 안 되므로 크기가 특정한 값에 도달하면 프로퍼티 값을 더 이상 변경 하지
    //않고 그대로 유지해야 한다. OnKeyDown과 OnKeyUp메소드는 커서 이동 키나 기능 키에 대한 조작을 처리하는데 유용하게 사용된다. 키보드에서 실제 유니코드 문자를 얻을 때에는 OnTe
    //xtInput 메소드를 오버라이딩해야 하며 TextCompositionEventArgs인자의 Text 프로퍼티에는 유니코드의 문자열이 저장된다. 일반적으로 이 문자열은 하나의 문자가 되겠지만 음성이나
    //필기 형태의 입력도 OnTextInput메소드를 호출하게 되는데 이때의 문자열은 더 길어질 것이다. 
    public class GrowAndShrink : Window
    {
        public GrowAndShrink()
        {
            Title = "Grow & Shrink";
            WindowStartupLocation = WindowStartupLocation.CenterScreen;
            Width = 192;
            Height = 192;
        }
        protected override void OnKeyDown(KeyEventArgs e)
        {
            base.OnKeyDown(e);
            if (e.Key == Key.Up)
            {
                Left -= 0.05 * Width;
                Top -= 0.05 * Height;
                Width *= 1.1;
                Height *= 1.1;
            }
            else if (e.Key == Key.Down)
            {
                Left += 0.05 * (Width /= 1.1);
                Top += 0.05 * (Height /= 1.1);
            }
        }
    }
}
