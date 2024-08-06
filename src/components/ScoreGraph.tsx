interface INumberProps {
  marks: number;
}
function ScoreGraph({ marks }: INumberProps) {
  return (
    <div className=" w-full bg-white flex flex-row ">
      <span
        style={{ width: marks * 10 }}
        className={`   h-8 ${
          marks < 30
            ? "bg-red-400"
            : marks >= 30 && marks < 50
            ? "bg-yellow-400"
            : marks > 60
            ? "bg-green-400"
            : "bg-gray-300"
        } `}
      ></span>
    </div>
  );
}

export default ScoreGraph;
