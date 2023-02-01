import { Activity, Question, QuestionRound } from "../models";

const development: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

export const isDev = (): boolean => {
  return development;
};

export const formatQuizType = (quizType: string): string => quizType.split("-").join("");
