import { useState } from "react";

//A simple counter project project to test out
export default function Counter() {
  const [ count, setCount ] = useState(0);

  function handleClickPos() {
      setCount( count + 1);
  }
  
  function handleClickNeg() {
    if (count === 0) return;
     
    setCount( count - 1); 
  }

  return (
    <>
      <div id='cont'>
        <div id="show">
          {count}
        </div>
        <div id="btnCont">
        <Button textCont='Rem' onClick={handleClickNeg} /> 
        <Button textCont='Add' onClick={handleClickPos} /> 
        </div>
      </div>
      <div className='cont'></div>
    </>
  );

}

function Button({ textCont, onClick }) {
  return (
    <button onClick={onClick}>
      {textCont}
    </button>
  );
}