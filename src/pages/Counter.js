import React, { useState } from "react";


function Counter() {
    const [num, setNumber] = useState(0);
    // const num = 0; 과 같음 seNumver는 num을 설정해주는 seter 개념
    function increase() {
        setNumber(num + 1);

        // useState 를 통해서 State를 관리한다면 
        // num = num + 1 방식으로는 불가능
    }

    function decrease() {
        setNumber(num - 1);
    }
    return (
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>

    )
}
export default Counter;

