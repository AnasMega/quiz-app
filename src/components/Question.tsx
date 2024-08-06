type QuestionProps = {
  currentQuestion: any;
};
function Question({ currentQuestion }: QuestionProps) {
  return <div>{decodeURIComponent(currentQuestion)}</div>;
}

export default Question;
