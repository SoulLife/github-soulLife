//
//  ViewController.h
//  Quiz
//
//  Created by macmini on 2021/07/10.
//

#import <UIKit/UIKit.h>

@interface ViewController : UIViewController
{
    int currentQuestionIndex;
    //모델 객체
    NSMutableArray *questions;
    NSMutableArray *answers;
    
    //뷰 객체 - IBOutlet 매크로에 대해서는 걱정하지 않아도 된다. 곧 설명할 것이다
    //IBOutlet UILabel *questionField;
    __weak IBOutlet UILabel *lbQuesionField;
    
    //IBOutlet UILabel *answerField;
    __weak IBOutlet UILabel *lbAnswerField;
}
-(IBAction)showQuestion:(id)sender;
-(IBAction)showAnswer:(id)sender;
@end

