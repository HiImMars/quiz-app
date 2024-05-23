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
  {
    id: 3,
    title: "General Knowledge",
    questions: [
      {
        id: 1,
        text: "What is the capital of France?",
        options: ["Paris", "Berlin", "Rome", "Kyiv"],
        correctAnswer: 0,
      },
      {
        id: 2,
        text: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter"],
        correctAnswer: 1,
      },
      {
        id: 3,
        text: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Pacific", "Arctic"],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: 4,
    title: "Science and Technology",
    questions: [
      {
        id: 1,
        text: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "None of the above"],
        correctAnswer: 1,
      },
      {
        id: 2,
        text: "Who is known as the father of modern physics?",
        options: ["Albert Einstein", "Isaac Newton", "Nikola Tesla"],
        correctAnswer: 0,
      },
      {
        id: 3,
        text: "What does HTML stand for?",
        options: [
          "Home Tool Markup Language",
          "Hyper Trainer Marking Language",
          "Hyper Text Markup Language",
        ],
        correctAnswer: 2,
      },
    ],
  },
];
