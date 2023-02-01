import { Activity } from "../api/api.model";

const development: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

export const isDev = (): boolean => {
  return development;
};

export const formatQuizType = (quizType: string): string => quizType.split("_").join("");
