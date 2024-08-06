interface IProps {
  currentQuestion: number;
  Questions: questionsProp[];
}
type questionsProp = {
  Question: string;
  incorrect_answers: string[];
  category: string;
  type: string;
  difficulty: string;
  correct_answer: string;
};
const StackHeading = ({ currentQuestion, Questions }: IProps) => {
  return (
    <p className="fixed left-0 top-0 flex w-full justify-center border-b  text-lg bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
      Question {currentQuestion + 1} out of {Questions?.length}&nbsp;
    </p>
  );
};

export default StackHeading;
