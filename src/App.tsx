// import React, { useEffect, useState } from "react";
// import QuizList from "./components/QuizList/QuizList";
// import QuizForm from "./components/QuizForm/QuizForm";
// import QuizRunner from "./components/QuizRunner/QuizRunner";
// import { fetchQuizzes, saveQuizzes } from "./utils/localStorage";
// import { Quiz } from "./types/types";

// const App: React.FC = () => {
//   const [quizzes, setQuizzes] = useState<Quiz[]>([]);
//   const [currentQuizId, setCurrentQuizId] = useState<number | null>(null);
//   const [runningQuizId, setRunningQuizId] = useState<number | null>(null);

//   useEffect(() => {
//     fetchQuizzes().then(setQuizzes);
//   }, []);

//   const handleSaveQuiz = async (quiz: Quiz) => {
//     const updatedQuizzes = quizzes.map((q) => (q.id === quiz.id ? quiz : q));
//     if (!updatedQuizzes.includes(quiz)) {
//       updatedQuizzes.push(quiz);
//     }
//     await saveQuizzes(updatedQuizzes);
//     setQuizzes(updatedQuizzes);
//     setCurrentQuizId(null);
//   };

//   const handleDeleteQuiz = async (id: number) => {
//     const updatedQuizzes = quizzes.filter((quiz) => quiz.id !== id);
//     await saveQuizzes(updatedQuizzes);
//     setQuizzes(updatedQuizzes);
//   };

//   const handleEditQuiz = (id: number) => {
//     setCurrentQuizId(id);
//   };

//   const handleRunQuiz = (id: number) => {
//     setRunningQuizId(id);
//   };

//   const handleFinishQuiz = (score: number) => {
//     alert(`You scored ${score} points!`);
//     setRunningQuizId(null);
//   };

//   const currentQuiz = quizzes.find((quiz) => quiz.id === currentQuizId);
//   const runningQuiz = quizzes.find((quiz) => quiz.id === runningQuizId);

//   return (
//     <div className="p-4">
//       {!currentQuizId && !runningQuizId && (
//         <div>
//           <button
//             onClick={() => setCurrentQuizId(0)}
//             className="mb-4 text-blue-500"
//           >
//             Add New Quiz
//           </button>
//           <QuizList
//             quizzes={quizzes}
//             onEdit={handleEditQuiz}
//             onDelete={handleDeleteQuiz}
//             onRun={handleRunQuiz}
//           />
//         </div>
//       )}
//       {currentQuizId !== null && (
//         <QuizForm quiz={currentQuiz || undefined} onSave={handleSaveQuiz} />
//       )}
//       {runningQuizId !== null && runningQuiz && (
//         <QuizRunner quiz={runningQuiz} onFinish={handleFinishQuiz} />
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";
import QuizList from "./components/QuizList/QuizList";
import QuizForm from "./components/QuizForm/QuizForm";
import QuizRunner from "./components/QuizRunner/QuizRunner";
import QuizSearch from "./components/QuizSearch/QuizSearch";
import { defaultQuizzes } from "./components/DefaultQuizzes/DefaultQuizzes";
import { fetchQuizzes, saveQuizzes } from "./utils/localStorage";
import { Quiz } from "./types/types";

const App: React.FC = () => {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [currentQuizId, setCurrentQuizId] = useState<number | null>(null);
  const [runningQuizId, setRunningQuizId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const initializeQuizzes = async () => {
      const fetchedQuizzes = await fetchQuizzes();
      if (fetchedQuizzes.length === 0) {
        await saveQuizzes(defaultQuizzes);
        setQuizzes(defaultQuizzes);
      } else {
        setQuizzes(fetchedQuizzes);
      }
    };

    initializeQuizzes();
  }, []);

  const handleSaveQuiz = async (quiz: Quiz) => {
    const updatedQuizzes = quizzes.map((q) => (q.id === quiz.id ? quiz : q));
    if (!updatedQuizzes.includes(quiz)) {
      updatedQuizzes.push(quiz);
    }
    await saveQuizzes(updatedQuizzes);
    setQuizzes(updatedQuizzes);
    setCurrentQuizId(null);
  };

  const handleDeleteQuiz = async (id: number) => {
    const updatedQuizzes = quizzes.filter((quiz) => quiz.id !== id);
    await saveQuizzes(updatedQuizzes);
    setQuizzes(updatedQuizzes);
  };

  const handleEditQuiz = (id: number) => {
    setCurrentQuizId(id);
  };

  const handleRunQuiz = (id: number) => {
    setRunningQuizId(id);
  };

  const handleFinishQuiz = (score: number) => {
    alert(`You scored ${score} points!`);
    setRunningQuizId(null);
  };

  const currentQuiz = quizzes.find((quiz) => quiz.id === currentQuizId);
  const runningQuiz = quizzes.find((quiz) => quiz.id === runningQuizId);

  const filteredQuizzes = quizzes.filter((quiz) =>
    quiz.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      {!currentQuizId && !runningQuizId && (
        <div>
          <button
            onClick={() => setCurrentQuizId(0)}
            className="mb-4 text-blue-500"
          >
            Add New Quiz
          </button>
          <QuizSearch onSearch={setSearchTerm} />
          <QuizList
            quizzes={filteredQuizzes}
            onEdit={handleEditQuiz}
            onDelete={handleDeleteQuiz}
            onRun={handleRunQuiz}
          />
        </div>
      )}
      {currentQuizId !== null && (
        <QuizForm quiz={currentQuiz || undefined} onSave={handleSaveQuiz} />
      )}
      {runningQuizId !== null && runningQuiz && (
        <QuizRunner quiz={runningQuiz} onFinish={handleFinishQuiz} />
      )}
    </div>
  );
};

export default App;
