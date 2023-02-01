import { useEffect } from "react";
import { getQuestions } from "../../api/api";
import styles from "./HomeScreen.module.css";

export const HomeScreen = () => {
  useEffect(() => {
    getQuestions();
  }, []);
  return (
    <div className={styles.main}>
      <h1>Cupa Quiz / Error Find</h1>
    </div>
  );
};
