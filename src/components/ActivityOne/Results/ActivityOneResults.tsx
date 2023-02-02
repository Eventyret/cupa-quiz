import { Link } from "react-router-dom";
import { ACTIVITY } from "../../../helpers/enums";
import styles from "./ActivityOneResults.module.css";

interface Props {
  results: string[];
}

export const ActivityOneResults = ({ results }: Props) => {
  return (
    <div className={styles.main}>
      <h1>{ACTIVITY.ONE}</h1>
      <h2>Results</h2>
      {results.map((result: string, index: number) => (
        <div className={styles.result} key={index}>
          <span>{`Q${index + 1}`}</span>
          <span>{result}</span>
        </div>
      ))}
      <Link to="/" className={styles.homeBtn}>
        Home
      </Link>
    </div>
  );
};
