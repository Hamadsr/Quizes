import React from 'react'

export default function comp2() {

    const [insideInput, setInsideInput] = useState("");
    const [changeCounter, setchangeCounter] = useState(0);
    const [number, setNumber] = useState("");
    return (
        <div>
            <input type="text" onChange={(e)=>{setInsideInput(e.target.value)}} />

            <h1>{changeCounter}</h1>
            <button onClick={()=> setchangeCounter(1)}></button>
        </div>
    )
}

