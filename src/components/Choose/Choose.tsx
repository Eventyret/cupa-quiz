import { Link } from "react-router-dom";
import styles from "./Choose.module.css";
export const ChooseQuiz = () => {
  return (
    <>
      <div className={styles.parent}>
        <Link to="/quiz/one" className="upperCase">
          Activity One
        </Link>
        <Link to="/quiz/two" className="upperCase">
          Activity Two
        </Link>
      </div>
    </>
  );
};
