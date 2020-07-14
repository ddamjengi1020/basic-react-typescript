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