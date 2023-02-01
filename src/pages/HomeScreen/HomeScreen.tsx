import { useEffect, useState } from "react";
import { getQuestions } from "../../api/api";
import { ChooseQuiz } from "../../components/Choose/Choose";
import styles from "./HomeScreen.module.css";

export const HomeScreen = () => {
  const [metaData, setMetaData] = useState({
    name: "",
    heading: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      const { name, heading } = (await getQuestions()) || {};
      setMetaData({ name: name!, heading: heading! });
    };
    fetchData();
  }, []);
  return (
    <div className={styles.main}>
      <h1>{metaData.name}</h1>
      <h2>{metaData.heading}</h2>
      <ChooseQuiz />
    </div>
  );
};
