import { Activity } from "./types";

const development: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

export const isDev = (): boolean => {
  return development;
};

export const formatQuizType = (quizType: string): string => quizType.split("-").join("");

export const extractActivity = (activities: Activity[], urlname: string): Activity | undefined =>
  activities?.find((activity) => {
    return activity.activity_name.split(" ")[1].toLowerCase() === urlname?.split("-")[1].toLowerCase();
  });
