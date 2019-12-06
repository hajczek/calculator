import React, { Component } from 'react';

class App extends Component {
  state = {
    result: ''
  }

  displayVal = (e) => {
    e.preventDefault();
    if (e.target.nodeName !== 'FORM') {
      let value = e.target.firstChild.nodeValue;
      let display = document.getElementById('display');
      display.classList.remove('result');
      display.classList.add('resultNew');
      display.innerHTML += value;
      let result = display.firstChild.nodeValue;
      this.setState({
        result: result
      });
    }

    // Functionality for AC button - reset value of result
    if (e.target.firstChild.nodeValue === 'AC') {
      let display = document.getElementById('display');
      display.classList.add('result');
      this.setState({
        result: ''
      });
    }
    e.stopPropagation();
  }

  render() {

    return (
      <div className="App">
        <div className="container">
          <div id="display" className="result display" value="0">{this.state.result}</div>
          <form onClick={this.displayVal}>
            <button id="clear" className="ac">AC</button>
            <button id="add" className="small display">+</button>
            <button id="subtract" className="small display">-</button>
            <button id="multiply" className="small display">*</button>
            <button id="divide" className="small display">/</button>
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
            <button id="decimal" className="small display">.</button>
            <button id='equals' className="small display">=</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
