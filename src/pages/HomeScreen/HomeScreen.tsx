import { useEffect, useState } from "react";
import { getQuestions } from "../../api/api";
import { ChooseQuiz } from "../../components/Choose/Choose";
import styles from "./HomeScreen.module.css";

export const HomeScreen = () => {
  const [metaData, setMetaData] = useState({
    name: "",
    heading: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { name, heading } = (await getQuestions()) || {};
        setMetaData({ name: name!, heading: heading! });
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className={styles.main}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.main}> Error: {(error as Error).message}</div>;
  }

  return (
    <div className={styles.main}>
      <h1>{metaData.name}</h1>
      <h2>{metaData.heading}</h2>
      <ChooseQuiz />
    </div>
  );
};
