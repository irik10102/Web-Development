import { useState } from "react";
import { useRef } from "react";
import Show from "./Show";



const StudentInfo = ()=>{

    const [studArray, setstudArray] = useState<string[]>([]);
    const refInp = useRef<HTMLInputElement>(null);

    const add=()=>{
        const nm = refInp.current!.value;

        setstudArray([...studArray,nm ]);
    };

    const del = (ind:number)=>{
        studArray.splice(ind,1);
        setstudArray([...studArray]);
    }

    return(
         <>
            Name:<input type ="text" ref={refInp}/>
            <br></br>
            <button onClick={add}>Add</button>
            {(studArray.length>0)?<Show info={studArray} del={del}></Show>:"No Names Added yet!"}
            
            
        </>
    );
}
export default StudentInfo;