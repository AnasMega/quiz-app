"use client";
import Questions from "../../question.json";
import Question from "@/components/Question";
import NextQuestionBtn from "@/components/NextQuestionBtn";
import Options from "@/components/Options";
import { QuestionNumber } from "../hooks/useQuestions";
import { allQuestions } from "../utils/utility";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = QuestionNumber(0);
  const [showRemark, setShowRemark] = QuestionNumber(false);
  const [currentStatus, setcurrentStatus] = QuestionNumber(false);
  const [answered, setAnswered] = QuestionNumber(false);
  const [score, setScore] = QuestionNumber(0);
  const marks = (score / 20) * 100; 

  const handleSubmit = (answer: string) => {
    if (currentQuestion !== allQuestions[0].length - 1) {
      const currentAnswer = decodeURIComponent(answer);
      const result = allQuestions[0][currentQuestion].correct_answer;

      if (result == currentAnswer) {
        nextQuestion(true);
        setScore(score + 1);
        setcurrentStatus(true);
      } else {
        nextQuestion(false);
        setcurrentStatus(false);
        setcurrentStatus(false);
      }
      setAnswered(!answered);
    } else {
      console.log("Anas");
      alert(`Your Score is ${marks}`);
      refresh();
    }
  };
  const refresh = () => {
    setCurrentQuestion(0);
    setShowRemark(false);
    setAnswered(false);
    setScore(0);
  };

  const nextQuestion = (stats: boolean) => {
    if (stats) {
      setShowRemark(true);
    } else {
      setShowRemark(true);
    }
  };
 
  const handleNextQuestion = () => {
    setAnswered(false);
    if (currentStatus) {
      setCurrentQuestion(currentQuestion + 1);
      setShowRemark(false);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setShowRemark(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <Header
        score={score}
        Questions={Questions}
        currentQuestion={currentQuestion}
      />
      <Question currentQuestion={Questions[currentQuestion].question} />

      <div>
        {showRemark && (
          <NextQuestionBtn
            currentStatus={currentStatus}
            handleNextQuestion={handleNextQuestion}
          />
        )}
      </div>

      <Options
        questions={allQuestions[0][currentQuestion].incorrect_answers}
        answered={answered}
        handleSubmit={handleSubmit}
      />

      <Footer marks={marks} />
    </main>
  );
}
