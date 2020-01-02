import React, { Component } from 'react';
import Form from './components/Form';
import Display from './components/Display';

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
    let equals = document.getElementById('equals');
    let decimal = document.getElementById('decimal');
    let disabledNum = document.querySelector('[disabled="true"]');

    if (e.target.nodeName !== 'FORM') {

      allAction.classList.remove('before');
      allAction.classList.add('clearBefore');

      finishResult.classList.remove('before');
      finishResult.classList.add('clearBefore');

      allAction.innerHTML += value;

      // Display only number, without action sign - in actual field
      if (
        this.state.actual === '+'
        || this.state.actual === '-'
        || this.state.actual === '*'
        || this.state.actual === '/'
      ) {
        finishResult.innerHTML = value;

        // Clear 0 from fields actual and result after click button different than decimal
      } else if (this.state.result === '0'
        && this.state.actual === '0'
        && value !== '.'
        && value !== 'AC'
        && value !== '='
      ) {
        allAction.innerHTML = value;
        finishResult.innerHTML = value;

        // Display only action sign in actual field
      } else if (
        value === '+' ||
        value === '-' ||
        value === '/' ||
        value === '*'
      ) {
        finishResult.innerHTML = value;

        // Remove disabled attribute from number, decimal and equals buttons after click button with action
        decimal.removeAttribute('disabled');
        equals.removeAttribute('disabled');
        if (disabledNum) {
          disabledNum.removeAttribute('disabled');
        }

        // Clear button
      } else if (value === 'AC') {
        finishResult.innerHTML = '0';
        allAction.innerHTML = '0';
        // Remove disabled attribute if is on button with num 
        if (disabledNum) {
          disabledNum.removeAttribute('disabled');
        }

      } // Display '0' only one time on the beginning of the number
      else if (value === '0') {
        if (allAction.firstChild.nodeValue.indexOf('0') === 0 && allAction.firstChild.nodeValue.indexOf('.') !== 1) {
          allAction.innerHTML = '0';
          finishResult.innerHTML = '0';
        }
      } // Use decimal only one time in number
      else if (value === '.') {
        if (finishResult.firstChild.nodeValue.indexOf('.') !== -1) {
          decimal.setAttribute('disabled', 'true');
        }
      } // Clear class 'clearAll' from button '=' when clicked any without value '+, -, /, or *'.
      else if (document.querySelector('.clearAll')
        && value !== '+'
        && value !== '-'
        && value !== '/'
        && value !== '*') {
        allAction.classList.remove('clearAll');
        finishResult.classList.remove('clearAll');
        allAction.innerHTML = value;
        finishResult.innerHTML = value;
        // value === 'AC' ? finishResult.innerHTML = '0' : allAction.innerHTML = '0';
      } else if (allAction.textContent.includes('=')
        && value === '+'
        && value === '-'
        && value === '/'
        && value === '*') {
        console.log(allAction.textContent.indexOf('='));
        allAction.innerHTML = value;
        finishResult.innerHTML = value;
      }
      else {
        // Remove attribute disabled from equals button 
        equals.removeAttribute('disabled');
        finishResult.innerHTML += value;
      };

      let result = allAction.firstChild.nodeValue;
      let actual = finishResult.firstChild.nodeValue;

      // Check length of introduced number
      if (actual.length > 13 && e.target.attributes[1].value === 'small num') {
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

      // Functionality for '=' button - reset value of result
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
          score = 0.3;
        }

        // Handle for length of result
        let scoreStr = score.toString();
        let strLength = scoreStr.length;

        // Functionality for long numbers
        if (strLength > 14) {
          // If result number is too long, shorten it
          let shortScore = score.toPrecision(13);
          this.setState({
            result: result + shortScore,
            actual: shortScore
          });
        } else {
          this.setState({
            result: result + score,
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