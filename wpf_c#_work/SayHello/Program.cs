using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;
using System.Windows.Media;
using SayHello.ex1;
using SayHello.ex2;
using SayHello.ex3;
namespace SayHello
{
    class Program
    {
        
        [STAThread]
        public static void Main(string[] args)
        {
            //ThrowWindowParty win = new ThrowWindowParty();
            //MyApplication myApp = new MyApplication();
            //Application app = new Application();
            //app.Run(new CircleTheRainbow());
            Application app = new Application();
            //app.Run(new VaryTheBackground());
            //app.Run(new FlipThroughTheBrushes());
            //app.Run(new GradiateTheBrush());
            //app.Run(new AdjustTheGradient());
            //app.Run(new FollowTheRainbow());
            //app.Run(new CircleTheRainbow());
            //app.Run(new ClickTheGradientCenter());
            //app.Run(new RotateTheGradientOrigin());
            //app.Run(new DisplaySomeText());
            //app.Run(new RecordKeystrokes());
            //app.Run(new ShowMyFace());
            //app.Run(new ShapeAnEllipse());
            //app.Run(new FormatTheText());
            app.Run(new ToggleBoldAndItalic());

        }
    }
}
