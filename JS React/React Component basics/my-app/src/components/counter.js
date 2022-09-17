import { useState } from "react";


function Counter() {
    let color = '#282c34'
    const onChangeColor = () => {
        console.log(color);
        color = `#${Math.random() * 999999 | 0}`
    }
    const onClickEvent = () => setCount(count + 1);

    let [count, setCount] = useState(0);
    return (<>
        <h1 style={{ color: "red" }}>{count}</h1>
        <button onClick={onClickEvent}>Click here</button>
        <button onClick={onChangeColor}>Click to change color</button>
    </>
    )
}

export default Counter;