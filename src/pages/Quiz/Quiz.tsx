import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestions } from "../../api/api";
import { ActivityOne } from "../../components/ActivityOne/ActivityOne";
import { Activity } from "../../models";

export const Quiz = () => {
  const { type } = useParams<{ type: string }>();
  const [currentQuiz, setCurrentQuiz] = useState<Activity | null>(null);

  useEffect(() => {
    // Making another async function instead of make useEffect async.
    const getQuiz = async () => {
      const { activities } = (await getQuestions()) || {};

      setCurrentQuiz(activities![0]);
    };
    getQuiz();
  }, [type]);

  return (
    <div>
      {currentQuiz && currentQuiz.activity_name === "Activity One" ? <ActivityOne quiz={currentQuiz} /> : null}
      {currentQuiz && currentQuiz.activity_name === "Activity Two" ? <p>Render {type?.toUpperCase()}</p> : null}
    </div>
  );
};
