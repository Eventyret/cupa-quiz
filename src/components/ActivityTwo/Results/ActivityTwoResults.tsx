import { Link } from "react-router-dom";
import { ACTIVITY } from "../../../helpers/enums";
import styles from "./ActivityTwoResults.module.css";

interface Props {
  results: string[][];
}
export const ActivityTwoResults = ({ results }: Props) => {
  return (
    <div className={styles.main}>
      <h1>{ACTIVITY.TWO}</h1>
      <h2 className="big-text">Results</h2>
      {results.map((round: string[], index: number) => (
        <div key={index}>
          <div className={styles.roundTitle}>Round {index + 1}</div>
          {round.map((singleRound: string, innerIndex: number) => (
            <div className={styles.result} key={innerIndex}>
              <span>{`Q${innerIndex + 1}`}</span> <span> {singleRound}</span>
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
