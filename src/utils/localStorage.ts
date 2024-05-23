import { Quiz } from "../types/types";

const defaultQuizzes: Quiz[] = [
  {
    id: 1,
    title: "JavaScript Basics",
    questions: [
      {
        id: 1,
        text: "What is the use of isNaN function?",
        options: [
          "Returns true if the argument is not a number",
          "Returns false if the argument is not a number",
          "Checks if the argument is a number",
          "None of the above",
        ],
        correctAnswer: 0,
      },
      {
        id: 2,
        text: "Which company developed JavaScript?",
        options: ["Netscape", "Bell Labs", "Sun Microsystems", "IBM"],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: 2,
    title: "CSS Fundamentals",
    questions: [
      {
        id: 3,
        text: "What does CSS stand for?",
        options: [
          "Computer Style Sheets",
          "Cascading Style Sheets",
          "Creative Style Sheets",
          "Colorful Style Sheets",
        ],
        correctAnswer: 1,
      },
      {
        id: 4,
        text: "Which HTML attribute is used to define inline styles?",
        options: ["styles", "style", "class", "font"],
        correctAnswer: 1,
      },
    ],
  },
];

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
