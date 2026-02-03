
import { useContext } from "react";
import mycontext from './Create';

const SubChild = ()=>{
    const {msg,info} = useContext(mycontext);
    return(
        <>
            <h2>SubChild-Component</h2>
            <h3>Message Received:{msg}</h3>
            <h3><ul>{info.map((obj,index)=>{
                return <li key={index}>Name:{obj.nm}|Dept:{obj.dept}|Email:{obj.em}</li>
            })}</ul></h3>
        </>
    )
}

export default SubChild;