import { useState } from "react";

export const QuestionNumber = (initialValue: any) => {
  const [currentQuestion, setCurrentQuestion] = useState(initialValue);
  return [currentQuestion, setCurrentQuestion];
};

 

 