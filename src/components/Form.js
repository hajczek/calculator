import React from 'react';

function Form(props) {
  return (
    <form onClick={props.displayVal}>
      <button id="clear" className="ac">AC</button>
      <button id="add" className="small act">+</button>
      <button id="subtract" className="small act">-</button>
      <button id="multiply" className="small act">*</button>
      <button id="divide" className="small act">/</button>
      <button id="seven" className="small num">7</button>
      <button id="eight" className="small num">8</button>
      <button id="nine" className="small num">9</button>
      <button id="four" className="small num">4</button>
      <button id="five" className="small num">5</button>
      <button id="six" className="small num">6</button>
      <button id="one" className="small num">1</button>
      <button id="two" className="small num">2</button>
      <button id="three" className="small num">3</button>
      <button id="zero" className="small num">0</button>
      <button id="decimal" className="small act">.</button>
      <button id='equals' className="small equal" disabled>=</button>
    </form>
  );
}

export default Form;