# **React with Typescript**


## **Started**
terminal command
<br/>

```
npx create-react-app <myProject> --template typescript

= Success message =
cd <myProject>
yarn start
```
<br/>

## **Feature**

1. Compare to class and functional
2. With Typescript
    + State
    + Props
    + Events
    + Styled-components
    + Styled-components + **Theme**
<br/>
<br/>

**Compare to class and functional**

_Let's see difference between class and functional with counter component_

<br/>

> Class-Components pattern

```js
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

```js
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
<br/>

***
<br/>

**With Typescript**

<br/>

> State

```js
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

```js
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

```js
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

```js
const CountContainer = styled.div<{isBlue:boolean}>`
    color: ${props=> props.isBlue? "blue": "black"};
    font-size: 30px;
    font-weight: 700;
`;

interface ICounterProps {
    counter: number
}

const Counter:React.FunctionComponent<ICounterProps> = ({counter}) => {
    return (
        <CountContainer isBlue={counter> 10}>{counter}</CountContainer>
    )
}
```

> styled-components **Theme**

```js
/src/theme.ts

export default {
    redColor: "red",
    greenColor: "green"
}

/src/index.tsx

import theme from "./theme";

import { ThemeProvider } from 'styled-components';

ReactDOM.render(
<ThemeProvider theme={theme}>// App 컴포넌트에 theme을 뿌려줌
    <App />
</ThemeProvider>, document.getElementById('root'));
```
- Usage theme 

```js
  color: ${props=> props.isBlue? props.theme.redColor : props.theme.greenColor}
```

- Autocomplete  
  - custom한 theme을 자동완성되게 하려면 styled.d.ts\
  파일을 만들어 **DefaultTheme**에 명시해줘야함\
[https://styled-components.com/docs/api#create-a-declarations-file](https://styled-components.com/docs/api#create-a-declarations-file)\
(API Reference - Typescript section)

```js
/src/styled.d.ts

import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    redColor:string,
    greenColor:string
  }
}
```
<br/>

### Let's do it your project with **Typescript**!