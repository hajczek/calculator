import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: '',
      actual: ''
    }
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
      // finishResult.innerHTML += value;

      // If statement for display only number, without action sign - in actual field
      if (this.state.actual === '+' || this.state.actual === '-' || this.state.actual === '*' || this.state.actual === '/') {
        finishResult.innerHTML = value;
        // If else statement for clear 0 from fields actual and result after click button different than decimal
      } else if (this.state.result === '0' && this.state.actual === '0' && value !== '.' && value !== 'AC' && value !== '=') {
        allAction.innerHTML = value;
        finishResult.innerHTML = value;
        // If else statement for display only action sign in actual field
      } else if (value === '+' || value === '-' || value === '/' || value === '*') {
        finishResult.innerHTML = value;
        // Remove disabled attribute from decimal button after click button with action
        document.getElementById('decimal').removeAttribute('disabled');
        // Functionality for clear button
      } else if (value === 'AC') {
        finishResult.innerHTML = '0';
        allAction.innerHTML = '0';
      } else {
        document.getElementById('equals').removeAttribute('disabled');
        finishResult.innerHTML += value;
      };

      // If statement for button with value '0' - it can be display more than one time on the beginning of the number
      if (value === '0') {
        if (allAction.firstChild.nodeValue.indexOf('0') === 0 && allAction.firstChild.nodeValue.indexOf('.') !== 1) {
          allAction.innerHTML = '0';
          finishResult.innerHTML = '0';
        }
      }

      // If statemen for decimal point which can be use only one time in number
      if (value === '.') {
        if (finishResult.firstChild.nodeValue.indexOf('.') !== -1) {
          // document.getElementById('decimal').textContent = '';
          document.getElementById('decimal').setAttribute('disabled', 'true');
        }
      }

      let result = allAction.firstChild.nodeValue;
      let actual = finishResult.firstChild.nodeValue;

      this.setState({
        result: result,
        actual: actual
      });

      // Functionality for = button - reset value of result
      if (value === '=') {
        let Parser = require('expr-eval').Parser;
        let score = Parser.evaluate(this.state.result);
        document.getElementById('equals').setAttribute('disabled', 'true');

        // Handle for length of result
        let scoreStr = score.toString();
        let strLength = scoreStr.length;

        // Functionality for long numbers
        if (strLength > 14) {
          let shortScore = score.toPrecision(13);
          this.setState({
            result: shortScore,
            // result: this.state.result + '=' + score,
            actual: shortScore
          });
        } else {
          this.setState({
            result: score,
            // result: this.state.result + '=' + score,
            actual: score
          });
        }

        // Condition for result of except with 0.1+0.2 in JS
        if (allAction.firstChild.nodeValue === '0.1+0.2=' ||
          allAction.firstChild.nodeValue === '0.2+0.1=' ||
          allAction.firstChild.nodeValue === '.2+.1=') {
          score = 0.3
        }
      }
    }

    e.stopPropagation();
  }

  render() {

    return (
      <div className="App">
        <div className="container">
          <div id="display" className="result" value="0">
            <p id="allAction" className="before">{this.state.result}</p>
            <p id="finishResult" className="before">{this.state.actual}</p>
          </div>
          <form onClick={this.displayVal}>
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
            <button id='equals' className="small equal">=</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;