import React, { useEffect, useState } from "react";
import QuizList from "./components/QuizList/QuizList";
import QuizForm from "./components/QuizForm/QuizForm";
import QuizRunner from "./components/QuizRunner/QuizRunner";
import QuizSearch from "./components/QuizSearch/QuizSearch";
import { defaultQuizzes } from "./components/DefaultQuizzes/DefaultQuizzes";
import { fetchQuizzes, saveQuizzes } from "./utils/localStorage";
import { Quiz } from "./types/types";
import { Notify } from "notiflix/build/notiflix-notify-aio";

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
    Notify.success("Quiz successfully created!");
  };

  const handleDeleteQuiz = async (id: number) => {
    const updatedQuizzes = quizzes.filter((quiz) => quiz.id !== id);
    await saveQuizzes(updatedQuizzes);
    setQuizzes(updatedQuizzes);
    Notify.warning("Quiz was deleted");
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
          <h1 className="font-bold text-2xl text-center mb-10">Quiz App</h1>
          <QuizSearch onSearch={setSearchTerm} />
          <QuizList
            quizzes={filteredQuizzes}
            onEdit={handleEditQuiz}
            onDelete={handleDeleteQuiz}
            onRun={handleRunQuiz}
          />
          <div className="flex flex-col">
            <button
              onClick={() => setCurrentQuizId(0)}
              className="mb-4 max-w-40 text-white text-xl bg-blue-700 border-2 border-blue-700 p-2 rounded-md hover:bg-white hover:text-black focus:bg-white focus:text-black transition"
            >
              Add New Quiz
            </button>
          </div>
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
