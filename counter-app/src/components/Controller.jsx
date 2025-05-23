const Controller = ({onClickButton}) => {
  return (
    <div>
      <button onClick={(e) => {
        onClickButton(Number(e.target.textContent));
      }}>-1</button>
      <button onClick={(e) => {
        onClickButton(Number(e.target.textContent));
      }}>-10</button>
      <button onClick={(e) => {
        onClickButton(Number(e.target.textContent));
      }}>-100</button>
      <button onClick={(e) => {
        onClickButton(Number(e.target.textContent));
      }}>+100</button>
      <button onClick={(e) => {
        onClickButton(Number(e.target.textContent));
      }}>+10</button>
      <button onClick={(e) => {
        onClickButton(Number(e.target.textContent));
      }}>+1</button>
    </div>
  )
}

export default Controller