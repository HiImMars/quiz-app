export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

export interface Quiz {
  id: number;
  title: string;
  questions: Question[];
}
