import { useState } from "react";
import { Quiz } from "../../helpers/types";
import { Question } from "../Question/Question";
import styles from "./ActivityOne.module.css";
import { ActivityOneResults } from "./Results/ActivityOneResults";

export const ActivityOne = ({ quiz }: Quiz) => {
  const [quizState, setQuizState] = useState<{ question: number; answers: string[] }>({ question: 0, answers: [] });

  const choiceHandler = (choice: boolean) => {
    const result = quiz?.questions[quizState.question].is_correct === choice ? "correct" : "incorrect";
    setQuizState({
      question: quizState.question + 1,
      answers: [...quizState.answers, result],
    });
  };

  return (
    <div>
      {quiz && quizState.question < quiz.questions.length ? (
        <div>
          <h1 className={styles.title}>Activity One</h1>
          <h2 className={styles.questionNum}>{`Q${quizState.question + 1}`}.</h2>
          <Question questionText={quiz ? quiz.questions[quizState.question].stimulus : ""} />
          <button className={styles.answerButton} onClick={() => choiceHandler(true)}>
            CORRECT
          </button>
          <button className={styles.answerButton} onClick={() => choiceHandler(false)}>
            INCORRECT
          </button>
        </div>
      ) : null}
      {quiz && quizState.question === quiz.questions.length ? <ActivityOneResults results={quizState.answers} /> : null}
    </div>
  );
};
