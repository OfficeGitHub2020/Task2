import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
  state = {
    input: ''
  }

  inputChangedHandler = (event) => {
    this.setState({ input: event.target.value });
  }

  deleteCharHandler =(index)=>{
    const text=this.state.input.split('');
    text.splice(index,1);
    const newText=text.join('');
    this.setState({input: newText});

  }

  render() {
    const charList=this.state.input.split('').map((ch,index )=> {
      return <Char 
      character={ch} 
      key={index}
      click={()=> this.deleteCharHandler(index)}/>;
    });

    return (
      <div className="App">
        <input
          type="text"
          onChange={this.inputChangedHandler}
          value={this.state.input} />
        <p> {this.state.input} </p>
        <Validation inputLength={this.state.input.length} />
        {charList}
      </div>

    );
  }
}

export default App;
