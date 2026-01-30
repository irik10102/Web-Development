import { useState, useEffect,useRef } from "react";


const CountdownUpdate = ()=>{
    const [count,setCount] = useState<number>(5);
    const refH = useRef<HTMLHeadingElement>(null);

    const dec = ()=>{setTimeout(()=>{
        setCount(count-1);
    },1000)}

    useEffect(()=>{
        if(count > 0)
            dec();
        
    },[count])
    
    
    
    
    return(
        <>
            <h3 ref={refH} style={{textAlign:'center'}}>{(count == 0)?'Welcome':`Please wait for ${count} Seconds`}</h3>
        </>
    )
}
export default CountdownUpdate;