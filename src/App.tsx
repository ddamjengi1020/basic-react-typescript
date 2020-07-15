import React, { Component } from 'react';
import Counter from './components/Counter';
import { Input, Form } from './components/Input';

interface IState {
  counter: number,
  text: string
}

class App extends Component<{}, IState> {
  state={
    counter:0,
    text: ""
  }

  render(){
    const {counter, text} = this.state;
    return (
      <>
        <Counter counter={counter}/>
        <button onClick={this.add}>add</button>
        <button onClick={this.remove}>remove</button>
        <Form onSubmit={this.onSubmit}>
          <Input value={text} onChange={this.onChange} />
        </Form>
      </>
    );
  }

  onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const text:string = event.target.value
    this.setState({text})
  }

  onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({text:""})
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
