type scoreProps ={
  marks:number

} 
const Score = ({marks}:scoreProps) => {
  return (
    <p>{"Score " + marks + "%"}</p>
  )
}

export default Score