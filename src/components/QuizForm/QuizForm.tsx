// import React, { useState } from "react";
// import { Quiz, Question } from "../../types/types";

// interface QuizFormProps {
//   quiz?: Quiz;
//   onSave: (quiz: Quiz) => void;
// }

// const QuizForm: React.FC<QuizFormProps> = ({ quiz, onSave }) => {
//   const [title, setTitle] = useState(quiz ? quiz.title : "");
//   const [questions, setQuestions] = useState<Question[]>(
//     quiz ? quiz.questions : []
//   );

//   const addQuestion = () => {
//     setQuestions([
//       ...questions,
//       { id: Date.now(), text: "", options: ["", ""], correctAnswer: 0 },
//     ]);
//   };

//   const updateQuestion = (index: number, question: Question) => {
//     const newQuestions = [...questions];
//     newQuestions[index] = question;
//     setQuestions(newQuestions);
//   };

//   const removeQuestion = (index: number) => {
//     const newQuestions = questions.filter((_, i) => i !== index);
//     setQuestions(newQuestions);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const newQuiz = {
//       id: quiz ? quiz.id : Date.now(),
//       title,
//       questions,
//     };
//     onSave(newQuiz);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label className="block text-sm font-medium">Title</label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
//         />
//       </div>
//       {questions.map((question, index) => (
//         <div key={question.id} className="border p-4 rounded">
//           <label className="block text-sm font-medium">Question Text</label>
//           <input
//             type="text"
//             value={question.text}
//             onChange={(e) =>
//               updateQuestion(index, { ...question, text: e.target.value })
//             }
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
//           />
//           <div className="mt-2">
//             {question.options.map((option, optIndex) => (
//               <div key={optIndex} className="flex items-center mt-1">
//                 <input
//                   type="text"
//                   value={option}
//                   onChange={(e) => {
//                     const newOptions = [...question.options];
//                     newOptions[optIndex] = e.target.value;
//                     updateQuestion(index, { ...question, options: newOptions });
//                   }}
//                   className="mr-2 flex-1 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
//                 />
//                 <input
//                   type="radio"
//                   name={`correct-${index}`}
//                   checked={question.correctAnswer === optIndex}
//                   onChange={() =>
//                     updateQuestion(index, {
//                       ...question,
//                       correctAnswer: optIndex,
//                     })
//                   }
//                 />
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={() =>
//                 updateQuestion(index, {
//                   ...question,
//                   options: [...question.options, ""],
//                 })
//               }
//               className="mt-2 text-blue-500"
//             >
//               Add Option
//             </button>
//           </div>
//           <button
//             type="button"
//             onClick={() => removeQuestion(index)}
//             className="mt-2 text-red-500"
//           >
//             Remove Question
//           </button>
//         </div>
//       ))}
//       <button type="button" onClick={addQuestion} className="text-blue-500">
//         Add Question
//       </button>
//       <button
//         type="submit"
//         className="block mt-4 bg-blue-500 text-white py-2 px-4 rounded"
//       >
//         Save Quiz
//       </button>
//     </form>
//   );
// };

// export default QuizForm;

// ======================================================

// import React, { useEffect, useState } from "react";
// import { Quiz, Question } from "../../types/types";

// interface QuizFormProps {
//   quiz?: Quiz;
//   onSave: (quiz: Quiz) => void;
// }

// const QuizForm: React.FC<QuizFormProps> = ({ quiz, onSave }) => {
//   const [title, setTitle] = useState(quiz ? quiz.title : "");
//   const [questions, setQuestions] = useState<Question[]>(
//     quiz ? quiz.questions : []
//   );

//   useEffect(() => {
//     if (quiz) {
//       localStorage.setItem("currentQuiz", JSON.stringify({ title, questions }));
//     }
//   }, [title, questions, quiz]);

//   useEffect(() => {
//     const savedQuiz = localStorage.getItem("currentQuiz");
//     if (savedQuiz) {
//       const { title, questions } = JSON.parse(savedQuiz);
//       setTitle(title);
//       setQuestions(questions);
//     }
//   }, []);

//   const addQuestion = () => {
//     setQuestions([
//       ...questions,
//       { id: Date.now(), text: "", options: ["", ""], correctAnswer: 0 },
//     ]);
//   };

//   const updateQuestion = (index: number, question: Question) => {
//     const newQuestions = [...questions];
//     newQuestions[index] = question;
//     setQuestions(newQuestions);
//   };

//   const removeQuestion = (index: number) => {
//     const newQuestions = questions.filter((_, i) => i !== index);
//     setQuestions(newQuestions);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const newQuiz = {
//       id: quiz ? quiz.id : Date.now(),
//       title,
//       questions,
//     };
//     onSave(newQuiz);
//     localStorage.removeItem("currentQuiz");
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label className="block text-sm font-medium">Title</label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
//         />
//       </div>
//       {questions.map((question, index) => (
//         <div key={question.id} className="border p-4 rounded">
//           <label className="block text-sm font-medium">Question Text</label>
//           <input
//             type="text"
//             value={question.text}
//             onChange={(e) =>
//               updateQuestion(index, { ...question, text: e.target.value })
//             }
//             className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
//           />
//           <div className="mt-2">
//             {question.options.map((option, optIndex) => (
//               <div key={optIndex} className="flex items-center mt-1">
//                 <input
//                   type="text"
//                   value={option}
//                   onChange={(e) => {
//                     const newOptions = [...question.options];
//                     newOptions[optIndex] = e.target.value;
//                     updateQuestion(index, { ...question, options: newOptions });
//                   }}
//                   className="mr-2 flex-1 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
//                 />
//                 <input
//                   type="radio"
//                   name={`correct-${index}`}
//                   checked={question.correctAnswer === optIndex}
//                   onChange={() =>
//                     updateQuestion(index, {
//                       ...question,
//                       correctAnswer: optIndex,
//                     })
//                   }
//                 />
//               </div>
//             ))}
//             <button
//               type="button"
//               onClick={() =>
//                 updateQuestion(index, {
//                   ...question,
//                   options: [...question.options, ""],
//                 })
//               }
//               className="mt-2 text-blue-500"
//             >
//               Add Option
//             </button>
//           </div>
//           <button
//             type="button"
//             onClick={() => removeQuestion(index)}
//             className="mt-2 text-red-500"
//           >
//             Remove Question
//           </button>
//         </div>
//       ))}
//       <button type="button" onClick={addQuestion} className="text-blue-500">
//         Add Question
//       </button>
//       <button
//         type="submit"
//         className="block mt-4 bg-blue-500 text-white py-2 px-4 rounded"
//       >
//         Save Quiz
//       </button>
//     </form>
//   );
// };

// export default QuizForm;

// ========================================

import React, { useState } from "react";
import { Quiz, Question } from "../../types/types";

interface QuizFormProps {
  quiz?: Quiz;
  onSave: (quiz: Quiz) => void;
}

const QuizForm: React.FC<QuizFormProps> = ({ quiz, onSave }) => {
  const [title, setTitle] = useState(quiz ? quiz.title : "");
  const [questions, setQuestions] = useState<Question[]>(
    quiz ? quiz.questions : []
  );

  const addQuestion = () => {
    setQuestions([
      ...questions,
      { id: Date.now(), text: "", options: ["", ""], correctAnswer: 0 },
    ]);
  };

  const updateQuestion = (index: number, question: Question) => {
    const newQuestions = [...questions];
    newQuestions[index] = question;
    setQuestions(newQuestions);
  };

  const updateOption = (
    questionIndex: number,
    optionIndex: number,
    text: string
  ) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options[optionIndex] = text;
    setQuestions(newQuestions);
  };

  const removeQuestion = (index: number) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const removeOption = (questionIndex: number, optionIndex: number) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].options = newQuestions[
      questionIndex
    ].options.filter((_, i) => i !== optionIndex);
    setQuestions(newQuestions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newQuiz = {
      id: quiz ? quiz.id : Date.now(),
      title,
      questions,
    };
    onSave(newQuiz);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
        />
      </div>
      {questions.map((question, index) => (
        <div key={question.id} className="border p-4 rounded">
          <label className="block text-sm font-medium">Question Text</label>
          <input
            type="text"
            value={question.text}
            onChange={(e) =>
              updateQuestion(index, { ...question, text: e.target.value })
            }
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
          />
          <div className="mt-2">
            {question.options.map((option, optIndex) => (
              <div key={optIndex} className="flex items-center mt-1">
                <input
                  type="text"
                  value={option}
                  onChange={(e) =>
                    updateOption(index, optIndex, e.target.value)
                  }
                  className="mr-2 flex-1 border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                />
                <input
                  type="radio"
                  name={`correct-${index}`}
                  checked={question.correctAnswer === optIndex}
                  onChange={() =>
                    updateQuestion(index, {
                      ...question,
                      correctAnswer: optIndex,
                    })
                  }
                />
                <button
                  type="button"
                  onClick={() => removeOption(index, optIndex)}
                  className="ml-2 text-red-500"
                >
                  Remove Option
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                updateQuestion(index, {
                  ...question,
                  options: [...question.options, ""],
                })
              }
              className="mt-2 text-blue-500"
            >
              Add Option
            </button>
          </div>
          <button
            type="button"
            onClick={() => removeQuestion(index)}
            className="mt-2 text-red-500"
          >
            Remove Question
          </button>
        </div>
      ))}
      <button type="button" onClick={addQuestion} className="text-blue-500">
        Add Question
      </button>
      <button
        type="submit"
        className="block mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Save Quiz
      </button>
    </form>
  );
};

export default QuizForm;

// =============================
