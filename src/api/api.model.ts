export interface Question {
  is_correct: boolean;
  stimulus: string;
  order: number;
  user_answers: any[];
  feedback: string;
}

export interface Activity {
  activity_name: string;
  order: number;
  questions: Question[];
}

export interface ApiResponse {
  name: string;
  heading: string;
  activities: Activity[];
}
