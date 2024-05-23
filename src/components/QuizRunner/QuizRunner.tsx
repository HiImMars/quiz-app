import React, { useState } from "react";
import { Quiz } from "../../types/types";

interface QuizRunnerProps {
  quiz: Quiz;
  onFinish: (score: number) => void;
}

const QuizRunner: React.FC<QuizRunnerProps> = ({ quiz, onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const handleAnswer = (answer: number) => {
    setAnswers([...answers, answer]);
    if (currentQuestionIndex + 1 < quiz.questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      const score = answers.reduce(
        (acc, answer, index) =>
          answer === quiz.questions[index].correctAnswer ? acc + 1 : acc,
        0
      );
      onFinish(score + 1); // Додаємо 1 бал за останню правильну відповідь
    }
  };

  const question = quiz.questions[currentQuestionIndex];

  return (
    <div>
      <h2 className="text-xl font-bold">{quiz.title}</h2>
      <div className="mt-4 p-4 border rounded">
        <h3 className="text-lg font-semibold">{question.text}</h3>
        <div className="mt-2">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="block w-full mt-2 bg-gray-200 p-2 rounded"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizRunner;

// import React, { useState, useEffect } from "react";
// import { Quiz } from "../../types/types";

// interface QuizRunnerProps {
//   quiz: Quiz;
//   onFinish: (score: number) => void;
// }

// const QuizRunner: React.FC<QuizRunnerProps> = ({ quiz, onFinish }) => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [answers, setAnswers] = useState<number[]>([]);
//   const [timeRemaining, setTimeRemaining] = useState(quiz.timeLimit || 0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (timeRemaining > 0) {
//         setTimeRemaining(timeRemaining - 1);
//       } else {
//         finishQuiz();
//       }
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, [timeRemaining]);

//   const handleAnswer = (answer: number) => {
//     setAnswers([...answers, answer]);
//     if (currentQuestionIndex + 1 < quiz.questions.length) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       finishQuiz();
//     }
//   };

//   const finishQuiz = () => {
//     const score = answers.reduce(
//       (acc, answer, index) =>
//         answer === quiz.questions[index].correctAnswer ? acc + 1 : acc,
//       0
//     );
//     onFinish(score);
//   };

//   const question = quiz.questions[currentQuestionIndex];

//   return (
//     <div>
//       <h2 className="text-xl font-bold">{quiz.title}</h2>
//       {timeRemaining > 0 ? (
//         <p className="text-red-500 font-bold mb-4">
//           Time Remaining: {timeRemaining} seconds
//         </p>
//       ) : (
//         <p className="text-red-500 font-bold mb-4">Time's up!</p>
//       )}
//       <div className="mt-4 p-4 border rounded">
//         <h3 className="text-lg font-semibold">{question.text}</h3>
//         <div className="mt-2">
//           {question.options.map((option, index) => (
//             <button
//               key={index}
//               onClick={() => handleAnswer(index)}
//               className="block w-full mt-2 bg-gray-200 p-2 rounded"
//             >
//               {option}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuizRunner;
