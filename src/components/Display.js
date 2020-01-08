import React from 'react';

function Display(props) {
  return (
    <div id="display" className="result" value="0">
      <p id="allAction">{props.result}</p>
      <p id="finishResult">{props.actual}</p>
    </div>
  );
}

export default Display;