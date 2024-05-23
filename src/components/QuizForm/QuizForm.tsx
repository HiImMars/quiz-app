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
    <form onSubmit={handleSubmit} className="space-y-4 mb-20">
      <div>
        <label className="block text-lg font-medium">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 px-3 py-2 block w-full md:max-w-xl border-gray-500 rounded-md shadow"
          required
        />
      </div>
      {questions.map((question, index) => (
        <div key={question.id} className="border-2 shadow p-4 rounded">
          <label className="block text-md font-medium">Question Text</label>
          <input
            type="text"
            value={question.text}
            onChange={(e) =>
              updateQuestion(index, { ...question, text: e.target.value })
            }
            className="mt-1 px-1 py-1 block w-full border-gray-300 rounded-md shadow"
            required
          />
          <div className="my-8 flex flex-col gap-5">
            {question.options.map((option, optIndex) => (
              <div
                key={optIndex}
                className="w-full max-w-3xl flex flex-col mt-1"
              >
                <label htmlFor={option} className="text-md font-medium">
                  Answer option
                </label>
                <input
                  name={option}
                  type="text"
                  value={option}
                  onChange={(e) =>
                    updateOption(index, optIndex, e.target.value)
                  }
                  className="border-gray-300 rounded-md shadow w-full max-w-3xl px-1 py-1"
                  required
                />
                <div className="w-full flex justify-between items">
                  <div className="flex flex-col">
                    <label htmlFor={`correct-${index}`}>Correct answer</label>
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
                  </div>
                  <button
                    type="button"
                    onClick={() => removeOption(index, optIndex)}
                    className="ml-2 text-red-500"
                  >
                    Remove
                  </button>
                </div>
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
              className="self-start text-white text-md bg-blue-700 border-2 border-blue-700 p-2 rounded-md hover:bg-white hover:text-black focus:bg-white focus:text-black transition"
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
      <button
        type="button"
        onClick={addQuestion}
        className=" text-white text-md bg-blue-700 border-2 border-blue-700 p-1 rounded-md hover:bg-white hover:text-black focus:bg-white focus:text-black transition"
      >
        Add Question
      </button>
      <button
        type="submit"
        className="block mt-10 text-white text-xl bg-green-700 border-2 border-green-700 p-2 rounded-md hover:bg-white hover:text-black focus:bg-white focus:text-black transition"
      >
        Save Quiz
      </button>
    </form>
  );
};

export default QuizForm;
