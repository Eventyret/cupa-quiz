import { Link } from "react-router-dom";
import styles from "./ActivityTwoResults.module.css";

interface Props {
  results: string[][];
}
export const ActivityTwoResults = ({ results }: Props) => {
  return (
    <div className={styles.main}>
      <h1>Activity Two</h1>
      <h2>Results</h2>
      {results.map((round: string[], index: number) => (
        <div>
          <div className={styles.roundTitle}>round {index + 1}</div>
          {round.map((singleRound: string, index: number) => (
            <div className={styles.result}>
              <span>{`Q${index + 1}`}</span> <span> {singleRound}</span>
            </div>
          ))}
        </div>
      ))}
      <Link className={styles.homeLink} to="/">
        home
      </Link>
    </div>
  );
};
