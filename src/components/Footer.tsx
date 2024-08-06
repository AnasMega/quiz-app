import Score from "./Score";
import ScoreGraph from "./ScoreGraph";
type marksProps = {
  marks: number;
};

const Footer = ({ marks }: marksProps) => {
  return (
    <>
      <Score marks={marks} />
      <ScoreGraph marks={marks} />
    </>
  );
};

export default Footer;
