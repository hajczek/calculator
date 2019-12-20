import React from 'react';

function Display(props) {
  return (
    <div id="display" className="result" value="0">
      <p id="allAction" className="before">{props.result}</p>
      <p id="finishResult" className="before">{props.actual}</p>
    </div>
  );
}

export default Display;