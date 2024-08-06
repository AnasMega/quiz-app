 
function Question({currentQuestion}) {
  return (
    <div>{decodeURIComponent(currentQuestion)}</div>
  )
}

export default Question