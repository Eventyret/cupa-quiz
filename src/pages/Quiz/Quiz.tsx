import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestions } from "../../api/api";
import { Activity } from "../../api/api.model";
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
    const currentQuiz = async () => {
      const { name, heading, activities } = (await getQuestions()) || {};

      // Could be extracted to helper function to clean up readability of useEffect
      const quiz = activities?.filter((activity) => activity.activity_name.toLowerCase() === formatQuizType(type ? type : ""));
      if (quiz) setCurrentQuiz(quiz[0]);
    };
    currentQuiz();
  }, [currentQuiz, type]);

  return <div>{type}</div>;
};
