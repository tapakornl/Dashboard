type token = {
  name: string,
  balance: number,
  // price: number,
  // yesterdayPrice: number,
  // value: number,
  // chain: string
}
export const Portfolio = ({ tokens }: { tokens: token[] }) => {
  console.log(tokens[0])
  var res = tokens.map((tokendesc) => (
    <>
      <div>
        tokens: {tokendesc.name},
        balance: {tokendesc.balance}
      </div>
    </>
  ))
  console.log(res);
  return (<div>
    <h2 style={{float:"left"}}>Your Porfolio</h2> 
    {res}
    </div>)
}