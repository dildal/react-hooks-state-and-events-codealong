import React, {useState} from "react";


function Toggle() {
  const [buttonState, toggle] = useState(false);

  function handleClick(){
    toggle((buttonState) => !buttonState)
  }
  return <button 
    onClick={handleClick}
    style={{background: buttonState ? 'white' : 'red'}}
    >
      {buttonState ? 'ON' : 'OFF'}
    </button>;
}

export default Toggle;
