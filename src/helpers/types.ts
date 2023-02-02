export interface Question {
  is_correct: boolean;
  stimulus: string;
  order: number;
  user_answers: any[];
  feedback: string;
}

export interface Activity {
  activity_name: "Activity One" | "Activity Two";
  order: number;
  questions: Question[] | QuestionRound[];
}

export interface ApiResponse {
  name: string;
  heading: string;
  activities: Activity[];
}

export interface QuestionRound extends Question {
  round_title: string;
}

export interface Quiz {
  quiz: Activity;
}

export type Result = "correct" | "incorrect";

export interface QuizState {
  question: number;
  round: number;
  answers: string[][];
  showRound: boolean;
  roundChange: boolean;
}
