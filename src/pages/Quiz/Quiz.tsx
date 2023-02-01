import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getQuestions } from "../../api/api";
import { Activity } from "../../api/api.model";


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
      const { name, heading, activities } = await getQuestions();
      const
    };
  }, [currentQuiz]);

  return <div>{type}</div>;
};
