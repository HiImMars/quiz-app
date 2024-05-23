import { defaultQuizzes } from "../components/DefaultQuizzes/DefaultQuizzes";
import { Quiz } from "../types/types";

export const fetchQuizzes = (): Promise<Quiz[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let quizzes = localStorage.getItem("quizzes");
      if (!quizzes) {
        localStorage.setItem("quizzes", JSON.stringify(defaultQuizzes));
        quizzes = JSON.stringify(defaultQuizzes);
      }
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
