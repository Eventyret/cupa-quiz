import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestions } from "../../api/api";
import { Activity } from "../../models";
import { formatQuizType } from "../../helpers/helpers";

export const Quiz = () => {
  const { type } = useParams<{ type: string }>();
  const [currentQuiz, setCurrentQuiz] = useState<Activity | null>(null);
  const [metaData, setMetaData] = useState({
    quizName: "",
    heading: "",
  });
  useEffect(() => {
    // Making another async function instead of make useEffect async.
    const getQuiz = async () => {
      const { name, heading, activities } = (await getQuestions()) || {};

      // Could be extracted to helper function to clean up readability of useEffect
      const quiz = activities?.filter((activity) => {
        return activity.activity_name.toLowerCase() === formatQuizType(type ? type : "");
      });
      if (quiz) setCurrentQuiz(quiz[0]);

      // Could do some more if checks here and not infer that it never will be undefined, technically we would have
      // thrown an error in the getQuestions  and return null instead so we can check for that here.

      setMetaData({ quizName: name!, heading: heading! });
    };
    getQuiz();
  }, [type]);

  return (
    <div>
      {type}
      {currentQuiz && currentQuiz.activity_name === "Activity One" ? <h2>Render {type}</h2> : null}
      {currentQuiz && currentQuiz.activity_name === "Activity Two" ? <p>Render {type?.toUpperCase()}</p> : null}
    </div>
  );
};
