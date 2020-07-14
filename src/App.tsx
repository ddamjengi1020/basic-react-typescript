import React, { Component } from 'react';
import SecondApp from "./_App";

interface IState {
  counter: number
}

class App extends Component<{}, IState> {
  state={
    counter:0
  }

  render(){
    const {counter} = this.state;
    return (
      <>
        <div>{counter}</div>
        <button onClick={this.add}>add</button>
        <button onClick={this.remove}>remove</button>
        <SecondApp />
      </>
    );
  }

  add = () => {
    this.setState(prev=>{
      return{
        counter: prev.counter + 1
      }
    })
  }
  remove =() => {
    this.setState(prev=>{
      return{
        counter: prev.counter - 1
      }
    })
  }
}

export default App;
