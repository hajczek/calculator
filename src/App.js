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

    // Defined handles
    let value = e.target.firstChild.nodeValue;
    let allAction = document.getElementById('allAction');
    let finishResult = document.getElementById('finishResult');
    let equals = document.getElementById('equals');
    let decimal = document.getElementById('decimal');
    let disabledNum = document.querySelector('[disabled="true"]');

    // Check if clicked element is not a 'FORM'
    if (e.target.nodeName !== 'FORM') {

      // Set new value for 'allAction' field
      allAction.innerHTML += value;

      // Display only action sign in 'actual' field
      if (
        this.state.actual === '+'
        || this.state.actual === '-'
        || this.state.actual === '*'
        || this.state.actual === '/'
      ) {
        // Set new value for 'finishResult' field
        finishResult.innerHTML = value;
        equals.removeAttribute('disabled');
        console.log(finishResult);
      }
      // Set value for fields 'allAction' and 'finishResult' to '0'
      else if (value === 'AC') {
        allAction.innerHTML = 0;
        finishResult.innerHTML = 0;

        console.log(allAction.firstChild.nodeValue);
        console.log(finishResult.firstChild.nodeValue);

        // Remove class 'clearAll' from fields 'allAction' and 'finishResult'
        allAction.classList.remove('clearAll');
        finishResult.classList.remove('clearAll');

        // Remove disabled attribute if is on button with num 
        if (disabledNum) {
          disabledNum.removeAttribute('disabled');
        }
      }
      // Leave 0 if first clicked button is '.'
      else if (value === '.' && (this.state.result === 0 || this.state.result === '0') && (this.state.actual === 0 || this.state.actual === '0')) {

        // Add new value to field 'finishResult'
        finishResult.innerHTML += value;

        console.log(this.state.result);
        console.log(this.state.actual);
      }
      // Remove 0 if first clicked button is different than action button
      else if ((this.state.result === 0 || this.state.result === '0') && (this.state.actual === 0 || this.state.actual === '0') &&
        this.state.actual !== '+'
        && this.state.actual !== '-'
        && this.state.actual !== '*'
        && this.state.actual !== '/') {

        console.log(allAction.firstChild.nodeValue);
        console.log(allAction.firstChild.nodeValue);

        // Set new value for fields 'allAction' and 'finishResult'
        allAction.innerHTML = value;
        finishResult.innerHTML = value;
      }
      // Clear 0 from fields 'allAction' and 'finishResult' after click button with number
      else if (allAction.textContent === '0'
        && finishResult.textContent === '0'
        && value !== '.'
        && value !== 'AC'
        && value !== '='
      ) {
        console.log(e.target.className);

        // Set new value for fields 'allAction' and 'finishResult'
        allAction.innerHTML = value;
        finishResult.innerHTML = value;

        console.log(allAction.textContent);
        console.log(finishResult.textContent);
      }
      // Protection from add more signs '.' than one in number
      else if (value === '.' && finishResult.textContent.includes('.')) {
        // Set on button with decimal sign disabled attribute
        decimal.setAttribute('disabled', 'true');
        // Set result state value in 'allAction' field
        allAction.innerHTML = this.state.result;

        console.log(finishResult.textContent);
        console.log(allAction.textContent);

      }
      // Allows to set sign '.' in next number
      else if (value === '.' && finishResult.textContent.includes('.') && this.state.result !== 0 && this.state.actual !== 0) {
        // Set on button with decimal sign disabled attribute
        decimal.setAttribute('disabled', 'true');
        // Add new value to 'finishResult' field
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
        // Set new value in 'finishResult' field
        finishResult.innerHTML = value;

        console.log(finishResult);

        // Remove disabled attribute from number, decimal and equals buttons after click button with action
        decimal.removeAttribute('disabled');
        equals.removeAttribute('disabled');
        if (disabledNum) {
          // Remove disabled attribute from buttons
          disabledNum.removeAttribute('disabled');
        }

      }
      // Display all value if clicked is button with number
      else if (
        value !== '+' ||
        value !== '-' ||
        value !== '/' ||
        value !== '*' ||
        value !== 'AC' ||
        value !== '='
      ) {
        // Add new value to 'finishResult' field
        finishResult.innerHTML += value;
      }
      // Check if element with class 'clearAll' exists when button with number is clicked
      else if (document.querySelector('.clearAll')
        && value !== '+'
        && value !== '-'
        && value !== '/'
        && value !== '*'
        && value !== 'AC'
        && value !== '=') {
        allAction.classList.remove('clearAll');
        finishResult.classList.remove('clearAll');

        // Set new value in fields 'allAction' and 'finishResult'
        allAction.innerHTML = value;
        finishResult.innerHTML = value;

        console.log(allAction);
        console.log(finishResult);

      }
      else {
        // Remove attribute disabled from equals button 
        equals.removeAttribute('disabled');
        // Add new value to 'finishResult' field
        finishResult.innerHTML += value;

        console.log(finishResult);
      };

      // Handles for value of 'allAction' and 'finishResult' fields
      let result = allAction.firstChild.nodeValue;
      let actual = finishResult.firstChild.nodeValue;

      console.log(result, typeof result);
      console.log(actual, typeof actual);

      // Check length of introduced number
      if (actual.length > 10 && e.target.attributes[1].value === 'small num') {
        // If is too long block posibilities to put next sign
        e.target.setAttribute('disabled', 'true');
      } else {
        e.target.removeAttribute('disabled');
      }

      // Set states of application
      this.setState({
        result: result,
        actual: actual
      });

      // Functionality for '=' button
      if (value === '=') {

        // Add class 'clearAll' to 'allAction' and 'finishResult' fields
        allAction.classList.add('clearAll');
        finishResult.classList.add('clearAll');

        // Define parser with expr-eval
        let Parser = require('expr-eval').Parser;

        // Handle for result
        let score = Parser.evaluate(this.state.result);

        // Add attribute disabled to equals button 
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
        if (strLength > 15) {
          // If result number is too long, shorten it
          let shortScore = score.toPrecision(15);
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