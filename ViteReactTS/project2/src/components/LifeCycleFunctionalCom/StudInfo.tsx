 import { useState, useEffect, useLayoutEffect,useRef } from "react";
import StudList from "./StudList";
 

 interface Student{
    nm:string,
    dept:string
 }
 const StudInfo = ()=>{

    const refName = useRef<HTMLInputElement>(null);
    const refEmail = useRef<HTMLInputElement>(null);
    const [studArray, setStudArray] = useState<Student[]>([]);

    const add = ()=>{
        const name:string = refName.current!.value;
        const department:string = refEmail.current!.value;

        setStudArray([...studArray, {nm:name, dept:department}]);

    }
    
    return(
        <>
            <table className="container mt-5">
                <tr>
                    <td>Name:</td>
                    <td><input type="text" ref={refName} placeholder="Enter your name"/></td>
                </tr>
                 <tr>
                    <td>Email:</td>
                    <td><input type="text" ref={refEmail} placeholder="Enter your department"/></td>
                </tr>
                <tr>
                    <td colSpan={2}><button className="btn btn-primary" onClick={add}>Add</button></td>
                    <td></td>
                </tr>
            </table>
            <div className="container mt-5">
                {(studArray.length>0) ? <StudList studArray={studArray}/>:<h4>No name added yet</h4>}
            </div>
        </>
    )
 }
 export default StudInfo;