import { useEffect,  useState } from "react";
import mycontext from './Create';

import Child from "./Child";


const Parent = ()=>{

    const[msg,setMsg] = useState<string>("Welcome to my context API");
    const [info, setInfo] = useState<{nm:string, em:string, dept:string}[]>([]);


    useEffect(()=>{
        setTimeout(()=>{
            setMsg("Updated data after another 5sec");
            setInfo([...info, {nm:'Sahil', em:'sahil@em.com', dept:'IT'}])
        },5000)
    },[msg])

    return(
        <>
            <h2>Parent Component</h2>
            <mycontext.Provider value={{msg, info}}>
                <Child/>
            </mycontext.Provider>
        </>
    )
}
export default Parent;