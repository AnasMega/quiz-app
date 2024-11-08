type currentQuestion = {
  currentQuestion: obj;
};
type obj = {
  category: string;
  difficulty: string;
};
function QuestionLevel({ currentQuestion }: currentQuestion) {
  return (
    <>
      <p className=" text-sm flex justify-center">
        {decodeURIComponent(currentQuestion.category)} Board Game
      </p>
      <p className=" text-sm flex justify-start  pl-8">
        {currentQuestion.difficulty == "hard"
          ? "⭐⭐⭐⭐⭐"
          : currentQuestion.difficulty == "medium"
          ? "⭐⭐⭐"
          : "⭐"}
      </p>
    </>
  );
}

export default QuestionLevel;
