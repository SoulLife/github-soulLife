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
    //다음 FlipThroughTheBrushes 프로그램은 클라이언트 영역을 141개의 브러시로 각기 그린 결과를 볼수 있다. 위와 아래 화살표 키를 이용해서 브러시를 변경할수 있다. 
    //이 프로그램에서는 Brushes클래스의 멤버를 얻기위해 System.Reflection을 사용한다. 생성자의 첫줄에서 typeof(Brushes)라는 표현식을 이용해 Type이라는 타입의 객체를 얻게 된다. Ty
    //pe 클래스에는 GetProperties라는 메소드가 정의돼 있어서 클래스의 프로퍼티에 하나씩 대응되는 PropertyInfo 객체의 배열을 반환한다. GetProperties의 인자에 BindingFlags를 사용함
    //으로써 명시적으로 public과 static 프로퍼티만으로 제한하고 있음을 확인하자. Brushes의 프로퍼티는 모두 public과 static이기 때문에 이런 제한이 반드시 필요한건 아니지만 그렇다
    //고 문제될 것도 없다. 생성자와 OnKeyDown모두에서 SetTitleAndBackground를 호출하고 있으며 이 메소드에서는 Title프로퍼티와 Background 프로퍼티를 설정한다. Background 프로퍼티
    //는 Brushes클래스 멤버중 하나로 설정해야 한다. props[0].Name이란 표현식은 클래스의 첫 프로퍼티의 이름인 "AliceBlue를 문자열로 반환한다. props[0].GetValue(null,null)표현식은
    //실제 SolidColorBrush객체를 반환한다. GetValue에 두 개의 null인자를 전달했다. 첫번째 인자는 원래 얻고자 하는 프로퍼티 값을 갖고 있는 객체가 돼야 하지만 Brushes는 정적 프로퍼
    //티이므로 객체가 없다. 두번째 인자는 인덱스를 갖는 프로퍼티일 경우에만 사용된다. 
    //System.Windows 네임스페이스에는 SystemColors 클래스가 있는데 읽기 전용의 프로퍼티만 있다는 점에서 Colors나 Brushes와 유사하다. 이 클래스는 윈도우 레지스트리에 저장된 현재 
    //사용자의 색 구성표를 알려준다. 예를 들어 SystemColors.WindowColor에는 클라이언트 영역의 배경색이 들어 있으며 SystemColors.WindowBrush와 SystemColors.WindowTextBrush는 같은
    //색상에 대해 SolidColorBrush객체로 반환한다. 대부분의 애플리케이션에서 이 색들을 사용해야 한다. 
    //SystemColors에서 얻은 브러시 객체는 고정돼 있으므로 아래와 같이 써야한다. 
    //Brush brush = new SolidColorBrush(SystemColors.WindowColor); 여기에서 아래와 같이 쓸수는 없다. 고정된 값을 할당했기 때문에 앞서 살펴본 것처럼 잘못된 연산 오류가 나올 것이다
    //Brush brush = SystemColors.WindowBrush;       Freezable에서 상속된 클래스의 객체만이 고정될 수 있다. Color는 구조체이므로 Color 객체는 고정될 수 없다. 
    //SolidColorBrush대신에 쓸수 있는 브러시로는 그라디언트 브러시(gradient brush)가 있다. 그라디언트 브러시는 두 개 이상의 색을 점진적으로 섞어서 표시하는 방법이다. 보통 그라디
    //언트 브러시는 프로그래밍의 고급 주제에 속하지만 WPF에서는 쉽게 만들수 있으며 현대적 배색으로 꽤 인기가 있다. 
    //가장 간단한 형태인 LinearGradientBrush에는 두 개의 Color객체와(이 둘을 clr1과 clr2로 부르기로하자)두 개의 Point객체(pt1과 pt2)가 필요하다. 점 pt1은 clr1의 색으로 칠해지고
    //pt2는 clr2의 색으로 칠해진다. pt1과 pt2를 잇는 선은 clr1과 clr2가 혼합된 색으로 칠해지며 선의 중간 지점은 clr1과 clr2의 평균이 된다. pt1과 pt2를 잇는 선에 대한 모든 수직 성
    //분은 두 색의 비율에 따라 결정된 색으로 균일하게 칠해진다. 
    //이제 정말 좋은 소식이 있다. 보통 두 점을 픽셀 단위나 장치 독립적 단위로 지정했는데 창의 크기가 변경될 때마다 그라디언트가 적용되게 하려면 매번 두 점을 다시 지정해야만 할것
    //이다. 그러나 WPF의 그라디언트 브러시는 창의 크기에 따라 브러시를 다시 생성하거나 수정할 필요가 없다는 특징이 있다. 기본값으로 그라디언트 브러시가 색칠하는 화면에 대해 상대
    //위치로 두 점을 지정한다. 화면의 가로와 세로 모두 1을 기준으로 하는 단위이다. 즉 화면의 좌측 상단 꼭지점은 점(0,0)이며 우측 하단 꼭지점은 점(1,1)이다. 예를 들어 보자 좌측 상
    //단 꼭지점이 빨간색이고 우측 하단 꼭지점이 파란색이면 다음 생성자를 사용하면된다. 이 생성자는 두 색과 두 점을 지정한다.     
    class FlipThroughTheBrushes : Window
    {
        LinearGradientBrush brush = new LinearGradientBrush(Colors.Red, Colors.Blue, new Point(0, 0), new Point(1, 1));
        int index = 0;
        PropertyInfo[] props;
        public FlipThroughTheBrushes()
        {
            props = typeof(Brushes).GetProperties(BindingFlags.Public | BindingFlags.Static);
            SetTitleAndBackground();
        }
        protected override void OnKeyDown(KeyEventArgs e)
        {
            if (e.Key == Key.Down || e.Key == Key.Up)
            {
                index += e.Key == Key.Up ? 1 : props.Length - 1;
                index %= props.Length;
                SetTitleAndBackground();
            }
            base.OnKeyDown(e);
        }
        void SetTitleAndBackground()
        {
            Title = "Flip Through the Brushes - " + props[index].Name;
            Background = (Brush)props[index].GetValue(null, null);
        }
    }
}
