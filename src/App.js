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
      // let display = document.getElementById('display');

      allAction.classList.remove('before');
      allAction.classList.add('clearBefore');

      finishResult.classList.remove('before');
      finishResult.classList.add('clearBefore');

      allAction.innerHTML += value;
      finishResult.innerHTML = value;

      let result = allAction.firstChild.nodeValue;
      let actual = finishResult.firstChild.nodeValue;

      this.setState({
        result: result,
        actual: actual
      });
    }

    // Functionality for AC button - reset value of result
    if (e.target.firstChild.nodeValue === 'AC') {
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
    if (e.target.firstChild.nodeValue === '=') {
      var Parser = require('expr-eval').Parser;
      let score = Parser.evaluate(this.state.result);
      console.log(score);
      this.setState({
        result: this.state.result + '=' + score,
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
            <button id="seven" className="small display">7</button>
            <button id="eight" className="small display">8</button>
            <button id="nine" className="small display">9</button>
            <button id="four" className="small display">4</button>
            <button id="five" className="small display">5</button>
            <button id="six" className="small display">6</button>
            <button id="one" className="small display">1</button>
            <button id="two" className="small display">2</button>
            <button id="three" className="small display">3</button>
            <button id="zero" className="small display">0</button>
            <button id="decimal" className="small display act">.</button>
            <button id='equals' className="small display equal">=</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
