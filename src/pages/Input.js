import React, { useState } from "react";


function Counter() {
    const [txtvalue, setTextValue] = useState("");

    function onChange(e) {
        setTextValue(e.target.value)
    }

    return (
        <div>
            <input type="text" value={txtvalue} onChange={onChange}></input>
            <br></br>
            <p>{txtvalue}</p>
        </div>

    )
}
export default Counter;

