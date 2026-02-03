import { useMemo, useState } from "react";


const Demo1 = ()=>{
    const [count,setCount] = useState<number>(0);
    const sq = (num:number)=>{
        console.log('sq function called');
        return num*num;
    }
    const con = ()=>{
        console.log('Function Called!');
    }
    const result = useMemo(()=>sq(count),[count]);
    return(
        <>
            <h3>Count:{count}</h3>
            <button onClick={()=>{setCount(count+1)}}>+</button>
            <br></br>
            <h3>Squared:{result}</h3>
            <button onClick={con}>Press to Call</button>

        </>
    )
}
export default Demo1;