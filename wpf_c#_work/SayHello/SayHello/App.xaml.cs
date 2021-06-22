using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using System.Windows;

namespace SayHello
{
    /// <summary>
    /// App.xaml에 대한 상호 작용 논리
    /// </summary>
    public partial class App : Application
    {
        protected override void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);
            Window win = new Window();
            win.Title = "Inherit the App";
            win.Show();
        }
        protected override void OnSessionEnding(SessionEndingCancelEventArgs e)
        {
            base.OnSessionEnding(e);
            MessageBoxResult result = MessageBox.Show("Do you want to save your data?", MainWindow.Title, MessageBoxButton.YesNoCancel, MessageBoxImage.Question,
                MessageBoxResult.Yes);
            e.Cancel = (result == MessageBoxResult.Yes);
        }
    }
}
