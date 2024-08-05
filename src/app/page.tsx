"use client";
import { useState } from "react";
import Questions from "../question.json";

type questions = {
  Question: string;
  incorrect_answers: string[];
  category: string;
  type: string;
  difficulty: string;
  correct_answer: string;
};
export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showRemark, setShowRemark] = useState(false);
  const [currentStatus, setcurrentStatus] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);

  // console.log("Questions", Questions);
  const handleSubmit = (answer: string) => {
    const result = allQuestions[0][currentQuestion].correct_answer;
    if (result == answer) {
      nextQuestion(true);
      setScore(score + 1);
      setcurrentStatus(true);
    } else {
      nextQuestion(false);
      setcurrentStatus(false);
    }
    setAnswered(!answered);
    // console.log("real asnwer", result);
    // console.log("User Answer", answer);
  };
  const nextQuestion = (stats: boolean) => {
    if (stats) {
      setShowRemark(true);
    } else {
      // setCurrentQuestion(currentQuestion + 1);
      setShowRemark(true);
    }
  };
  const marks = (score / 20) * 100;

  console.log("marks", marks);
  const temp = new Array();
  const allQuestions = Questions.map((item) => {
    temp.push({
      Question: decodeURIComponent(item.question),
      incorrect_answers: fisherYatesShuffle([
        ...item.incorrect_answers,
        item.correct_answer,
      ]),
      category: decodeURIComponent(item.category),
      type: item.type,
      difficulty: item.difficulty,
      correct_answer: decodeURIComponent(item.correct_answer),
    });
    return temp;
    //  console.log("item",item)
  });

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
  function fisherYatesShuffle(arr: any) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  console.log("Score", score);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className=" w-full bg-white flex flex-col ">
        <span
          style={{ width: score * 60 }}
          className={`   h-8 bg-green-400`}
        ></span>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className=" flex flex-col">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b  text-lg bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Question {currentQuestion + 1} out of {Questions?.length}&nbsp;
          </p>

          <p className=" text-sm flex justify-center">
            {decodeURIComponent(Questions[currentQuestion].category)} Board Game
          </p>
          <p className=" text-sm flex justify-start  pl-8">
            {Questions[currentQuestion].difficulty == "hard"
              ? "⭐⭐⭐⭐⭐"
              : Questions[currentQuestion].difficulty == "medium"
              ? "⭐⭐⭐"
              : "⭐"}
          </p>
        </div>
      </div>
      <div>{decodeURIComponent(Questions[currentQuestion].question)}</div>

      <div>
        {showRemark && (
          <div className=" flex flex-col space-y-4">
            <p className=" justify-center flex  tex-lg font-bold ">
              {currentStatus ? "Correct!" : "Wrong!"}
            </p>
            <button
              onClick={() => handleNextQuestion()}
              className="bg-gray-400 p-2 rounded-sm text-black font-semibold"
            >
              Next Question
            </button>
          </div>
        )}
      </div>
      <div className=" flex  space-x-12">
        {allQuestions[0][currentQuestion].incorrect_answers.map(
          (data: string) => (
            <button
              disabled={answered}
              className=" bg-gray-400 rounded-sm p-3 hover:bg-slate-900  hover:text-white text-black"
              onClick={() => handleSubmit(decodeURIComponent(data))}
            >
              {decodeURIComponent(data)}
            </button>
          )
        )}
      </div>
      <p>{"Score " + marks + "%"}</p>
      <div className=" w-full bg-white flex flex-row ">
        <span
          style={{ width: marks * 10 }}
          className={`   h-8 ${
            marks < 30
              ? "bg-red-400"
              : marks > 30 && marks < 50
              ? "bg-yellow-400"
              : "bg-green-400"
          } `}
        ></span>
      </div>
    </main>
  );
}
