import Score from "./Score"
import ScoreGraph from "./ScoreGraph"

 
const Footer = ({marks}) => {
  return (
    <>
     <Score marks={marks.toFixed(2)} />
     <ScoreGraph marks={marks} />
    </>
  )
}

export default Footer