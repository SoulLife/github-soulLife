//
//  ViewController.m
//  Quiz
//
//  Created by macmini on 2021/07/10.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    questions = [[NSMutableArray alloc] init];
    answers = [[NSMutableArray alloc] init];
    
    [questions addObject:@"What is 7 + 7?"];
    [answers addObject:@"14"];
    
    [questions addObject:@"What is the capital of Vermont?"];
    [answers addObject:@"Montpelier"];
    [questions addObject:@"From what is cognac made?"];
    [answers addObject:@"Grapes"];
}
-(IBAction)showQuestion:(id)sender
{
    //다음 질문으로 넘어간다
    currentQuestionIndex++;
    //마지막 질문을 통과했나?
    if(currentQuestionIndex == [questions count])
    {
        //첫번째 질문으로 돌아간다.
        currentQuestionIndex = 0;
    }
    //질문 배열에서 해당 인덱스의 스트링을 가져온다.
    NSString *question = [questions objectAtIndex:currentQuestionIndex];
    //가져온 스트링을 콘솔에 기록한다.
    NSLog(@"displaying question: %@", question);
    //가져온 스트링을 질문 필드에 표시한다.
    [lbQuesionField setText:question];
    //답변 필드를 지운다.
    [lbAnswerField setText:@"???"];
}
-(IBAction)showAnswer:(id)sender
{
    //현재 질문의 답은 무엇인가?
    NSString *answer = [answers objectAtIndex:currentQuestionIndex];
    //답변을 필드에 표시한다.
    [lbAnswerField setText:answer];
}
@end
