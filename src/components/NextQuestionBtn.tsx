type NextQuestionProps = {
  currentStatus: boolean;
  handleNextQuestion: () => void;
};
const NextQuestionBtn = ({
  currentStatus,
  handleNextQuestion,
}: NextQuestionProps) => {
  return (
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
  );
};

export default NextQuestionBtn;
