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
      <h1 className="text-xl font-bold">Quizzes</h1>
      <ul>
        {quizzes.map((quiz) => (
          <li key={quiz.id} className="mb-4 p-4 border rounded">
            <h2 className="text-lg font-semibold">{quiz.title}</h2>
            <button
              onClick={() => onRun(quiz.id)}
              className="mr-2 text-blue-500"
            >
              Run
            </button>
            <button
              onClick={() => onEdit(quiz.id)}
              className="mr-2 text-yellow-500"
            >
              Edit
            </button>
            <button onClick={() => onDelete(quiz.id)} className="text-red-500">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;
