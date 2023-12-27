import { useEffect } from 'react';
import React from 'react';
import { Button } from '@mui/material';

interface QuizProps {
  currentQuestion: number;
  submitted: boolean;
  answers: Array<any | null>;
  handleNext: () => void;
  handlePrevious: () => void;
  handleSpecificQuestion: (questionNumber: number) => void;
  handleAnswerSubmission: (answers: Array<string | null>) => void;
  sendDataToParent: (data: any[]) => void;
}

const Quiz: React.FC<QuizProps> = ({
  currentQuestion,
  answers,
  handleNext,
  handlePrevious,
  handleSpecificQuestion,
  handleAnswerSubmission,
  submitted,
  sendDataToParent,

}) => {


  
  // from API Initial Req Ans
  const quizData = [
    {
        question: 'What is the capital of France?',
        options: ['New York', 'Paris', 'London', 'Berlin'],
        answer: 'Paris',
      },
      {
        question: 'Who painted the Mona Lisa?',
        options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
        answer: 'Leonardo da Vinci',
      },
      {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
        answer: 'Mars',
      },
      {
        question: 'What is the largest mammal?',
        options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
        answer: 'Blue Whale',
      },
      {
        question: 'Who wrote the play "Hamlet"?',
        options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
        answer: 'William Shakespeare',
      },
      {
        question: 'What is the chemical symbol for gold?',
        options: ['Au', 'Ag', 'Hg', 'Fe'],
        answer: 'Au',
      },
      {
        question: 'Which country is known as the Land of the Rising Sun?',
        options: ['China', 'India', 'Japan', 'South Korea'],
        answer: 'Japan',
      },
      {
        question: 'What is the tallest mountain in the world?',
        options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Makalu'],
        answer: 'Mount Everest',
      },
      {
        question: 'What is the smallest prime number?',
        options: ['0', '1', '2', '3'],
        answer: '2',
      },
      {
        question: 'Who is known as the father of computer science?',
        options: ['Bill Gates', 'Alan Turing', 'Steve Jobs', 'Tim Berners-Lee'],
        answer: 'Alan Turing',
      },                 
  ];


  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedAnswer = e.target.value;
    const updatedAnswers = answers.map((answer, index) =>
      index === currentQuestion ? selectedAnswer : answer
    );
    // Update parent component state with the updated answers
    console.log(updatedAnswers)
    handleAnswerSubmission(updatedAnswers);
    
  };

  useEffect(() => {
    sendDataToParent(quizData);
  }, []);
  

  const correctAnswers = quizData.filter(
    (quiz, index) => answers[index] === quiz.answer
  ).length;

  const totalQuestions = quizData.length;
  const percentage = ((correctAnswers / totalQuestions) * 100);
  const scoreColor = percentage >= 50 ? 'green' : 'red';
  const currentQuiz = quizData[currentQuestion];

  return (
    <div style={{ paddingInline: '20px' }}>

{submitted ? (
        // Show the questions and user-selected answers along with the actual answers after submission
        <div>
      {currentQuiz && (
        <div>
          <p style={{fontSize:'15px',fontWeight:'300'}}>{currentQuiz.question}</p>
          <form>
            {currentQuiz.options.map((option, index) => (
              <div key={index} style={{marginBlock:'15px'}}>
                <label>
                  { (answers[currentQuestion] === option && currentQuiz.answer !== option) && (
                    <input style={{accentColor:'red',transform: 'scale(1.5)'}}
                    type="radio"
                    
                    value={option}
                    checked={answers[currentQuestion] === option}
                    onChange={handleOptionChange}
                  />
                  ) }
                  {(currentQuiz.answer === option)&&(
                    <input style={{accentColor:'green',transform: 'scale(1.5)'}}
                    type="radio"
                    value={option}
                    checked={currentQuiz.answer === option}
                    onChange={handleOptionChange}
                    />
                  )}
                  {(answers[currentQuestion] !== option && currentQuiz.answer !== option)&&(
                    <input
                    type="radio"
                    style={{ transform: 'scale(1.5)' }}
                    disabled={true}
                    value={option}
                    checked={answers[currentQuestion] === option}
                    onChange={handleOptionChange}
                    />
                  )}
                  
                  <span style={{marginLeft:'15px'}}>{` ${String.fromCharCode(65 + index)}. ${option}`}</span>
                </label>
              </div>
            ))}
          </form>
        </div>
      )}
      </div>
      ) : (
        <div>
      {currentQuiz && (
        <div>
          <p style={{fontSize:'20px',fontWeight:'400'}}>{currentQuiz.question}</p>
          <form>
            {currentQuiz.options.map((option, index) => (
              <div key={index} style={{marginBlock:'15px'}}>
                <label>
                  <input
                    type="radio"
                    value={option}
                    checked={answers[currentQuestion] === option}
                    onChange={handleOptionChange}
                    style={{ transform: 'scale(1.5)' }}
                  />
                  <span style={{marginLeft:'15px'}}>{` ${String.fromCharCode(65 + index)}. ${option}`}</span>
                </label>
              </div>
            ))}
          </form>
        </div>
      )}
      </div>
      )}
      
      {/* Example of how to navigate to a specific question */}
      {/* <Button onClick={() => handleSpecificQuestion(3)}>Go to Question 4</Button> */}
      
    </div>
  );
};

export default Quiz;
