using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;
using System.Windows.Media;
using SayHello.ex1;
namespace SayHello
{
    class Program
    {
        [STAThread]
        public static void Main(string[] args)
        {
            ThrowWindowParty win = new ThrowWindowParty();
            //Application app = new Application();
            //app.Run(new CircleTheRainbow());

        }
    }
}
