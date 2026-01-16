import { useRef } from "react";


const GetRef = ()=>{
    const refH = useRef<HTMLHeadingElement>(null);
    const refI = useRef<HTMLInputElement>(null);
    const refP = useRef<HTMLParagraphElement>(null);

    const disp = ()=>{
        const msg = refI.current!.value;
        window.alert(msg);
        refH.current!.innerText = 'Result Changed';
        refP.current!.innerText = 'End of Demo'
    }

    return (
        <>
            <h1 ref={refH}>Welcome to the demo of useRef</h1>
            <br></br>
            <input ref={refI} type="text" placeholder="Enter anything"></input>
            <br></br>
            <p ref = {refP}>Start of Demo</p>
            <br></br>
            <button onClick={disp}>Check</button>
        </>
    )
}

export default GetRef;