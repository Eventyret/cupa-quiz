import styles from "./Question.module.css";

interface Props {
  questionText: string;
}
export const Question = ({ questionText }: Props) => {
  return <div className={styles.questionText}>{questionText}</div>;
};
