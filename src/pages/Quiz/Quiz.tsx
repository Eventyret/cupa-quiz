import { useState } from "react";
import { useParams } from "react-router-dom";
import { Activity } from "../../api/api.model";

export const Quiz = () => {
  const { type } = useParams<{ type: string }>();
  const [currentQuiz, setCurrentQuiz] = useState<Activity | null>(null);
  const [metaData, setMetaData] = useState({
    quizName: "",
    heading: "",
  });

  return <div></div>;
};
