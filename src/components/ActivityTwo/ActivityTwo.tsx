import { useState } from "react";
import { QuizState } from "../../helpers/types";
import { Question } from "../Question/Question";
import styles from "./ActivityTwo.module.css";
import { ActivityTwoResults } from "./Results/ActivityTwoResults";

export const ActivityTwo = ({ quiz }: any) => {
  const [quizState, setQuizState] = useState<QuizState>({ question: 0, round: 0, answers: [] });

  const getCurrentRound = () => {
    return quiz!.questions[quizState.round] as any;
  };

  const getCurrentQuestion = () => {
    return getCurrentRound().questions ? getCurrentRound().questions[quizState.question] : getCurrentRound();
  };

  const getResult = (choice: boolean): "correct" | "incorrect" | undefined => {
    const currentQuestion = getCurrentQuestion();
    return currentQuestion.is_correct === choice ? "correct" : "incorrect";
  };

  const choiceHandler = (choice: boolean) => {
    const results = getResult(choice);
    const newRound = quizState.question + 1 === (quiz?.questions[quizState.question] as any).questions.length;
    const answers = [...quizState.answers];
    if (!answers[quizState.round]) answers.push([]);
    answers[quizState.round] = [...answers[quizState.round], results!];
    setQuizState({
      question: newRound ? 0 : quizState.question + 1,
      round: newRound ? quizState.round + 1 : quizState.round,
      answers,
    });
  };

  return (
    <div>
      {quiz && quizState.round < quiz.questions.length ? (
        <div>
          <h1 className={styles.title}>Activity Two / {quiz.questions[quizState.round].round_title}</h1>
          <h2 className={styles.questionNum}>{`Q${quizState.question + 1}`}</h2>
          <Question questionText={quiz ? quiz.questions[quizState.round].questions[quizState.question].stimulus : ""} />
          <button className="answerBtn" onClick={() => choiceHandler(true)}>
            CORRECT
          </button>
          <button className="answerBtn" onClick={() => choiceHandler(false)}>
            INCORRECT
          </button>
        </div>
      ) : null}
      {quiz && quizState.round === quiz.questions.length ? <ActivityTwoResults results={quizState.answers} /> : null}
    </div>
  );
};
