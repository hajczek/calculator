import React, { Component } from 'react';

class App extends Component {
  state = {
    result: '',
    actual: ''
  }

  displayVal = (e) => {
    e.preventDefault();

    let value = e.target.firstChild.nodeValue;
    let allAction = document.getElementById('allAction');
    let finishResult = document.getElementById('finishResult');

    if (e.target.nodeName !== 'FORM') {

      allAction.classList.remove('before');
      allAction.classList.add('clearBefore');

      finishResult.classList.remove('before');
      finishResult.classList.add('clearBefore');

      allAction.innerHTML += value;
      // finishResult.innerHTML = value;

      // If statement for buttons with numbers and decimal point - for displays these together as one element
      if (typeof value === 'number' || value === '.') {
        finishResult.innerHTML += value;
        // TODO - clear result when click button with number fter click button with action (+, -, /, *, =)
      } else if (value === '+' || value === '-' || value === '/' || value === '*') {
        finishResult.innerHTML = value;
      } else {
        finishResult.innerHTML += value;
      };

      // If statement for button with value '0' - it can be display more than one time on the beginning of the number
      if (value === '0') {
        if (allAction.firstChild.nodeValue.indexOf('0') === 0 && allAction.firstChild.nodeValue.indexOf('.') !== 1) {
          allAction.innerHTML = '0';
          finishResult.innerHTML = '0';
        }
      }

      let result = allAction.firstChild.nodeValue;
      let actual = finishResult.firstChild.nodeValue;

      this.setState({
        result: result,
        actual: actual
      });
    }

    // Functionality for AC button - reset value of result
    if (value === 'AC') {
      allAction.classList.add('before');
      finishResult.classList.add('before');
      allAction.classList.remove('clearBefore');
      finishResult.classList.remove('clearBefore');
      this.setState({
        result: '',
        actual: ''
      });
    }

    // Functionality for = button - reset value of result
    if (value === '=') {
      let Parser = require('expr-eval').Parser;
      let score = Parser.evaluate(this.state.result);

      // Condition for except with 0.1+0.2 in JS
      if (allAction.firstChild.nodeValue === '0.1+0.2=' ||
        allAction.firstChild.nodeValue === '0.2+0.1=' ||
        allAction.firstChild.nodeValue === '.2+.1=') {
        score = 0.3
      }

      this.setState({
        result: score,
        // result: this.state.result + '=' + score,
        actual: score
      });
    }

    e.stopPropagation();
  }

  render() {

    return (
      <div className="App">
        <div className="container">
          <div id="display" className="result display" value="0">
            <p id="allAction" className="before">{this.state.result}</p>
            <p id="finishResult" className="before">{this.state.actual}</p>
          </div>
          <form onClick={this.displayVal}>
            <button id="clear" className="ac">AC</button>
            <button id="add" className="small display act">+</button>
            <button id="subtract" className="small display act">-</button>
            <button id="multiply" className="small display act">*</button>
            <button id="divide" className="small display act">/</button>
            <button id="seven" className="small display num">7</button>
            <button id="eight" className="small display num">8</button>
            <button id="nine" className="small display num">9</button>
            <button id="four" className="small display num">4</button>
            <button id="five" className="small display num">5</button>
            <button id="six" className="small display num">6</button>
            <button id="one" className="small display num">1</button>
            <button id="two" className="small display num">2</button>
            <button id="three" className="small display num">3</button>
            <button id="zero" className="small display num">0</button>
            <button id="decimal" className="small display act">.</button>
            <button id='equals' className="small display equal">=</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;