import React, { Component } from 'react';

class App extends Component {
  state = {
    result: 0
  }

  displayVal = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({
      result: e.target.firstChild.nodeValue
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div id="display" className="result display">{this.state.result}</div>
          <button id="clear" className="ac">AC</button>
          <button id="add" className="small display" onClick={this.displayVal}>+</button>
          <button id="subtract" className="small display" onClick={this.displayVal}>-</button>
          <button id="multiply" className="small display" onClick={this.displayVal}>*</button>
          <button id="divide" className="small display" onClick={this.displayVal}>/</button>
          <button id="seven" className="small display" onClick={this.displayVal}>7</button>
          <button id="eight" className="small display" onClick={this.displayVal}>8</button>
          <button id="nine" className="small display" onClick={this.displayVal}>9</button>
          <button id="four" className="small display" onClick={this.displayVal}>4</button>
          <button id="five" className="small display" onClick={this.displayVal}>5</button>
          <button id="six" className="small display" onClick={this.displayVal}>6</button>
          <button id="one" className="small display" onClick={this.displayVal}>1</button>
          <button id="two" className="small display" onClick={this.displayVal}>2</button>
          <button id="three" className="small display" onClick={this.displayVal}>3</button>
          <button id="zero" className="small display" onClick={this.displayVal}>0</button>
          <button id="decimal" className="small display" onClick={this.displayVal}>.</button>
          <button id='equals' className="small display" onClick={this.displayVal}>=</button>
        </div>

      </div>
    );
  }
}

export default App;
