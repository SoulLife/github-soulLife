using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;
namespace SayHello.ex1
{
    class MyApplication : Application
    {
        public MyApplication()
        {
            this.Run(new MyWindow());
        }
        
    }
}
