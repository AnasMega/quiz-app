interface scoreProps {
  score: number;
}
export const ProgressBar = ({ score }: scoreProps) => {
  return (
    <div className=" w-full bg-white flex flex-col rounded-md ">
      <span style={{ width: score * 60 }}
      className={`   h-8 bg-green-300 rounded-lg`} />
    </div>
  );
};
 