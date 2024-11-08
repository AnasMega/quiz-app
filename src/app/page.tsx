import "regenerator-runtime/runtime";

import Questions from "../question.json";
import { ProgressBar } from "@/components/ProgressBar";
import StackHeading from "@/components/StackHeading";
import QuestionLevel from "@/components/QuestionLevel";
import Question from "@/components/Question";
import NextQuestionBtn from "@/components/NextQuestionBtn";
import Options from "@/components/Options";
import Score from "@/components/Score";
import ScoreGraph from "@/components/ScoreGraph";
import QuizScreen from "./Screens/QuizScreen";
import BankDashboard from "./Screens/BankDashboard/page";
type questions = {
  Question: string;
  incorrect_answers: string[];
  category: string;
  type: string;
  difficulty: string;
  correct_answer: string;
};
export default function Home() {
  return <QuizScreen />;
  // <BankDashboard/>
}
