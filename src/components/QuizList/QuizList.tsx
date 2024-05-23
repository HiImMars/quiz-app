import React from "react";
import { Quiz } from "../../types/types";

interface QuizListProps {
  quizzes: Quiz[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
  onRun: (id: number) => void;
}

const QuizList: React.FC<QuizListProps> = ({
  quizzes,
  onEdit,
  onDelete,
  onRun,
}) => {
  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Quizzes</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 justify-center items-center">
        {quizzes.map((quiz) => (
          <li
            key={quiz.id}
            className="mb-4 p-4 max-w-xl border shadow bg-white rounded-md"
          >
            <h2 className="text-lg font-semibold mb-4">{quiz.title}</h2>
            <div className="flex justify-between">
              <button
                onClick={() => onRun(quiz.id)}
                className="text-md font-semibold text-blue-500"
              >
                Run
              </button>
              <button
                onClick={() => onEdit(quiz.id)}
                className="text-md font-semibold text-yellow-500"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(quiz.id)}
                className="text-md font-semibold text-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
