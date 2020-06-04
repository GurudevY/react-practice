import React, { Component } from 'react';
import './App.css';

class App extends Component {

  // State of the component
  state = {
    textInput: ""
  };


  getString = (event) => {
    // Get the input value here.
    let inputString = event.target.value;
    // Hold the current state.
    const updatedState = [...this.state];
    console.log(updatedState.textInput);
    // Update the state here.
    updatedState.textInput = inputString;
    // Set the updated state.
    this.setState({ textInput: inputString });
  }

  render() {
    console.log(this.state.textInput);
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input type='text' onChange={(event) => this.getString(event)} />
      </div>
    );
  }
}

export default App;
