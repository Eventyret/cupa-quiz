import { Link } from "react-router-dom";
import { ACTIVITY } from "../../helpers/enums";
import styles from "./Choose.module.css";
export const ChooseQuiz = () => {
  return (
    <>
      <div className={styles.parent}>
        <Link to="/quiz/activity-one" className="upperCase">
          {ACTIVITY.ONE}
        </Link>
        <Link to="/quiz/activity-two" className="upperCase">
          {ACTIVITY.TWO}
        </Link>
      </div>
    </>
  );
};
