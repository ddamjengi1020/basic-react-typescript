# **React with Typescript**


## **Started**
terminal command
<br>

```
npx create-react-app <myProject> --template typescript

= Success message =
cd <myProject>
yarn start
```
<br>

## **Feature**

Let's see difference between class and functional with counter component
<br>
<br>
> Class-Components pattern

```
import React, { Component } from 'react';

// Component 에는 props, state의 타입을 지정해줄수 있음
interface IState {
  counter: number
}

class App extends Component<{}, IState> { // props가 없을 시 {}-(문서참고)
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
```

> Functional Components pattern

```
import React, { useState } from "react";

interface ICount {
    count: number
}

const App = () => {
    // useState Hooks 타입은 initialState를 제네릭으로 표시해주면 됨 
    const [counter, setCounter] = useState<ICount>({count:0});
    const add = ():void => {
        setCounter({count: counter.count + 1})
    }
    const remove = ():void => {
        setCounter({count: counter.count - 1})
    }
    return (
        <>
            <div>{counter.count}</div>
            <button onClick={add}>add</button>
            <button onClick={remove}>remove</button>
        </>
    )
}

export default App;
```