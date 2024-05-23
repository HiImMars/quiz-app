import { Quiz } from "../types/types";

export const fetchQuizzes = (): Promise<Quiz[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const quizzes = localStorage.getItem("quizzes");
      resolve(quizzes ? JSON.parse(quizzes) : []);
    }, 500); // затримка в 500 мс
  });
};

export const saveQuizzes = (quizzes: Quiz[]): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem("quizzes", JSON.stringify(quizzes));
      resolve();
    }, 500); // затримка в 500 мс
  });
};
