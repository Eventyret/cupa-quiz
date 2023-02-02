import { useState } from "react";
import { Question } from "../Question/Question";
import styles from "./ActivityTwo.module.css";
import { ActivityTwoResults } from "./Results/ActivityTwoResults";

export const ActivityTwo = ({ quiz }: any) => {
  const [quizState, setQuizState] = useState<{
    question: number;
    round: number;
    answers: string[][];
  }>({ question: 0, round: 0, answers: [] });

  const getResult = (choice: boolean): "correct" | "incorrect" | undefined => {
    if (!quiz) return;
    const currentRound = quiz.questions[quizState.round] as any;

    const currentQuestion = currentRound.questions ? currentRound.questions[quizState.question] : currentRound;
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
          <h2 className={styles.questionNum}>{`Q${quizState.question + 1}.`}</h2>
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
