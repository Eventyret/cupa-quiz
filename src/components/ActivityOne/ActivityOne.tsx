import { useState } from "react";
import { isQuestionRoundGuard } from "../../helpers/helpers";
import { Question, Quiz } from "../../models";

export const ActivityOne = ({ quiz }: Quiz) => {
  const [quizState, setQuizState] = useState<{ question: number; answers: string[] }>({ question: 0, answers: [] });

  const choiceHandler = (choice: boolean) => {
    let question: Question;
    const currentQuestion = quiz?.questions[quizState.question];
    if (isQuestionRoundGuard(currentQuestion)) {
      question = currentQuestion.questions[0];
    } else {
      question = currentQuestion;
    }
    const result = question.is_correct === choice ? "correct" : "incorrect";
    setQuizState({
      question: quizState.question + 1,
      answers: [...quizState.answers, result],
    });
  };
  
  return ()
};
