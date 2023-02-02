import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestions } from "../../helpers/api";
import { ActivityOne } from "../../components/ActivityOne/ActivityOne";
import { ActivityTwo } from "../../components/ActivityTwo/ActivityTwo";
import { ACTIVITY } from "../../helpers/enums";
import { extractActivity } from "../../helpers/helpers";
import { Activity } from "../../helpers/types";

export const Quiz = () => {
  const { type } = useParams<{ type: string }>();
  const [currentQuiz, setCurrentQuiz] = useState<Activity | null>(null);

  useEffect(() => {
    // Making another async function instead of make useEffect async.
    const getQuiz = async () => {
      const { activities } = (await getQuestions()) || {};
      // Getting Getting last part of Activity so we match one and one or two and two
      if (!activities || !type) return;
      const activity = extractActivity(activities, type);
      setCurrentQuiz(activity!);
    };
    getQuiz();
  }, [type]);

  return (
    <div>
      {currentQuiz && currentQuiz.activity_name === ACTIVITY.ONE ? <ActivityOne quiz={currentQuiz} /> : null}
      {currentQuiz && currentQuiz.activity_name === ACTIVITY.TWO ? <ActivityTwo quiz={currentQuiz} /> : null}
    </div>
  );
};
