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

1. Compare to class and functional
2. With Typescript
    + State
    + Props
    + Events
    + Styled-components
<br>
<br>

**Compare to class and functional**

_Let's see difference between class and functional with counter component_

<br>

> Class-Components pattern

```
import React, { Component } from 'react';

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
```

**With Typescript**

> State

```
(alias) class Component<P(props) = {}, S(state) = {}, SS = any>
import Component

interface IState {
  counter: number
}// state 요소들의 타입을 지정

class App extends Component<{}, IState> {
  state={
    counter:0
  }
```

> Props

```
/src/App.tsx

  import Counter from './components/Counter';

  <Counter counter={counter}/>

  

/src/components/Counter.tsx

  import React from "react";
  import styled from "styled-components";

  const CountContainer = styled.span``;

  const Counter:React.FunctionComponent<{counter:number}> = ({counter}) => {
      return (
          <CountContainer>{counter}</CountContainer>
      )
  }

  or

  interface ICounter {
    counter: number
  }

  const Counter:React.FunctionComponent<ICounter> = ({counter}) => {
      return (
          <CountContainer>{counter}</CountContainer>
      )
  }
```

> Events

```
/src/components/Input.tsx

interface IInputProps {
    value: string,
    onChange: (event:React.ChangeEvent<HTMLInputElement>) => void
}

interface IFormProps {
    onSubmit: (event:React.FormEvent<HTMLFormElement>) => void
}

export const Input:React.FunctionComponent<IInputProps> =({value, onChange})=>(
    <input type="text" placeholder="Write here" value={value} onChange={onChange}/>
)

export const Form:React.FunctionComponent<IFormProps> = ({children, onSubmit}) => (
    <form onSubmit={onSubmit}>{children}</form>
)


/src/App.tsx

import { Input, Form } from './components/Input';

interface IState {
  text: string
}

class App extends Component<{}, IState> {
  state={
    text: ""
  }
  render(){
    const { text } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <Input value={text} onChange={this.onChange} />
      </Form>
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
```

> styled-components

```

```