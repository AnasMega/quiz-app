import { ProgressBar } from "./ProgressBar"
import QuestionLevel from "./QuestionLevel"
import StackHeading from "./StackHeading"

//  interface IHeaderProps{
//   score:number,
//   Questions:[],
//   currentQuestion:number

//  }
const Header = ({score,Questions,currentQuestion}:any) => {
  return (
    <>
    <ProgressBar score={currentQuestion} />
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <div className=" flex flex-col">
        <StackHeading
          Questions={Questions}f
          currentQuestion={currentQuestion}
        />

        <QuestionLevel currentQuestion={Questions[currentQuestion]} />
      </div>
    </div>
    </>
  )
}

export default Header