import React, { Component } from 'react';
import Form from './components/Form';
import Display from './components/Display';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: 0,
      actual: 0
    }
  }

  displayVal = (e) => {

    e.preventDefault();

    let value = e.target.firstChild.nodeValue;
    let allAction = document.getElementById('allAction');
    let finishResult = document.getElementById('finishResult');
    let equals = document.getElementById('equals');
    let decimal = document.getElementById('decimal');
    let disabledNum = document.querySelector('[disabled="true"]');

    if (e.target.nodeName !== 'FORM') {

      allAction.innerHTML += value;

      // Display only number in actual field
      if (
        this.state.actual === '+'
        || this.state.actual === '-'
        || this.state.actual === '*'
        || this.state.actual === '/'
      ) {
        finishResult.innerHTML = value;
        console.log(finishResult);
      }

      else if (value === 'AC') {
        allAction.innerHTML = 0;
        finishResult.innerHTML = 0;

        console.log(allAction.firstChild.nodeValue);
        console.log(finishResult.firstChild.nodeValue);

        allAction.classList.remove('clearAll');
        finishResult.classList.remove('clearAll');

        // Remove disabled attribute if is on button with num 
        if (disabledNum) {
          disabledNum.removeAttribute('disabled');
        }
      }
      else if (value === '.' && (this.state.result === 0 || this.state.result === '0') && (this.state.actual === 0 || this.state.actual === '0')) {
        finishResult.innerHTML += value;

        console.log(this.state.result);
        console.log(this.state.actual);
      }
      else if ((this.state.result === 0 || this.state.result === '0') && (this.state.actual === 0 || this.state.actual === '0') &&
        this.state.actual !== '+'
        && this.state.actual !== '-'
        && this.state.actual !== '*'
        && this.state.actual !== '/') {

        console.log(allAction.firstChild.nodeValue);
        console.log(allAction.firstChild.nodeValue);

        finishResult.innerHTML = value;
        allAction.innerHTML = value;
      }

      // Clear 0 from fields 'actual' and 'result' after click button with number
      else if (allAction.textContent === '0'
        && finishResult.textContent === '0'
        && value !== '.'
        && value !== 'AC'
        && value !== '='
      ) {
        console.log(e.target.className);

        allAction.innerHTML = value;
        finishResult.innerHTML = value;

        console.log(allAction.textContent);
        console.log(finishResult.textContent);
      }
      else if (value === '.' && finishResult.textContent.includes('.') && allAction.textContent.includes('.')) {
        decimal.setAttribute('disabled', 'true');
        allAction.innerHTML = this.state.result;
        console.log(finishResult.textContent);
        console.log(allAction.textContent);

      }
      else if (value === '.' && finishResult.textContent.includes('.') && allAction.textContent.includes('.') && this.state.result !== 0 && this.state.actual !== 0) {
        decimal.setAttribute('disabled', 'true');
        finishResult.innerHTML += value;
        console.log(finishResult.textContent);
        console.log(allAction.textContent);

      }
      // Display only action sign in actual field
      else if (
        value === '+' ||
        value === '-' ||
        value === '/' ||
        value === '*'
      ) {
        finishResult.innerHTML = value;

        console.log(finishResult);

        // Remove disabled attribute from number, decimal and equals buttons after click button with action
        decimal.removeAttribute('disabled');
        equals.removeAttribute('disabled');
        if (disabledNum) {
          disabledNum.removeAttribute('disabled');
        }

      }
      else if (document.querySelector('.clearAll')
        && value !== '+'
        && value !== '-'
        && value !== '/'
        && value !== '*'
        && value !== 'AC') {
        allAction.classList.remove('clearAll');
        finishResult.classList.remove('clearAll');

        allAction.innerHTML = value;
        finishResult.innerHTML = value;

        console.log(allAction);
        console.log(finishResult);

      }
      else {
        // Remove attribute disabled from equals button 
        equals.removeAttribute('disabled');
        finishResult.innerHTML += value;

        console.log(finishResult);
      };

      let result = allAction.firstChild.nodeValue;
      let actual = finishResult.firstChild.nodeValue;

      console.log(result, typeof result);
      console.log(actual, typeof actual);

      // Check length of introduced number
      if (actual.length > 18 && e.target.attributes[1].value === 'small num') {
        // If is to long block posibility to put next sign
        e.target.setAttribute('disabled', 'true');
      } else {
        e.target.removeAttribute('disabled');
      }

      // Set state of application
      this.setState({
        result: result,
        actual: actual
      });

      // Functionality for '=' button
      if (value === '=') {

        allAction.classList.add('clearAll');
        finishResult.classList.add('clearAll');

        // Define parser with expr-eval
        let Parser = require('expr-eval').Parser;

        // Handler for result
        let score = Parser.evaluate(this.state.result);

        // Add attribute disabled for equals button 
        equals.setAttribute('disabled', 'true');

        // Condition for result of except with 0.1+0.2 in JS
        if (allAction.firstChild.nodeValue === '0.1+0.2=' ||
          allAction.firstChild.nodeValue === '0.2+0.1=' ||
          allAction.firstChild.nodeValue === '.1+.2=' ||
          allAction.firstChild.nodeValue === '0.1+.2=' ||
          allAction.firstChild.nodeValue === '.1+0.2=' ||
          allAction.firstChild.nodeValue === '0.2+.1=' ||
          allAction.firstChild.nodeValue === '0.1+.2=' ||
          allAction.firstChild.nodeValue === '.2+.1=') {
          score = score.toFixed(1); // 0.3
        }

        // Handle for length of result
        let scoreStr = score.toString();
        let strLength = scoreStr.length;

        // Functionality for long numbers
        if (strLength > 16) {
          // If result number is too long, shorten it
          let shortScore = score.toPrecision(13);
          this.setState({
            result: shortScore,
            actual: shortScore
          });

        } else {
          this.setState({
            result: score,
            actual: score
          });
        }
      }
    }
    e.stopPropagation();
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Display
            result={this.state.result}
            actual={this.state.actual}
          />
          <Form
            displayVal={this.displayVal}
          />
        </div>
      </div>
    );
  }
}

export default App;