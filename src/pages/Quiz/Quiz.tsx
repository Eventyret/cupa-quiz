import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestions } from "../../api/api";
import { ActivityOne } from "../../components/ActivityOne/ActivityOne";
import { ActivityTwo } from "../../components/ActivityTwo/ActivityTwo";
import { formatQuizType } from "../../helpers/helpers";
import { Activity } from "../../types";

export const Quiz = () => {
  const { type } = useParams<{ type: string }>();
  const [currentQuiz, setCurrentQuiz] = useState<Activity | null>(null);

  useEffect(() => {
    // Making another async function instead of make useEffect async.
    const getQuiz = async () => {
      const { activities } = (await getQuestions()) || {};
      console.log(formatQuizType(type!));
      const activity = activities?.find((activity) => activity.activity_name.toLocaleLowerCase() === formatQuizType(type!));
      console.log(activity);
      setCurrentQuiz(activity!);
    };
    getQuiz();
  }, [type]);

  return (
    <div>
      {currentQuiz && currentQuiz.activity_name === "Activity One" ? <ActivityOne quiz={currentQuiz} /> : null}
      {currentQuiz && currentQuiz.activity_name === "Activity Two" ? <ActivityTwo quiz={currentQuiz} /> : null}
    </div>
  );
};
