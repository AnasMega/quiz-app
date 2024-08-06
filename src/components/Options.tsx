

const Options = ({questions,answered,handleSubmit }:any) => {
  return (
    <div className=" flex  space-x-12">
    {questions.map(
      (data: string, index: number) => (
        <button
          key={index}
          disabled={answered}
          className=" bg-gray-400 rounded-sm p-3 hover:bg-slate-900  hover:text-white text-black"
          onClick={() => handleSubmit(data)}
        >
          {decodeURIComponent(data)}
        </button>
      )
    )}
  </div>
  )
}

export default Options