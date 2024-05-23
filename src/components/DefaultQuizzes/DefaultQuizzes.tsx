// src/defaultQuizzes.ts
import { Quiz } from "../../types/types";

export const defaultQuizzes: Quiz[] = [
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
