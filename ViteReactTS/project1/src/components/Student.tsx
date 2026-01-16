import { useRef, type ChangeEvent } from "react";
import { useState } from "react";
import View from "./View";


interface Stud{
    name:string,
    dept:string,
    email:string
}


const Student = ()=>{
    const [studInfo, setStudInfo] = useState<Stud>({name:'',dept:'',email:''});
    const [flag, setFlag] = useState<Boolean>(false);

    const valUpdate = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setStudInfo({...studInfo, [event.target.name]:event.target.value});
        setFlag(false);
    }
    

    const push = ()=>{
       setFlag(true);
      
    }
    
    return(
        <>
            Name:
            <input type="text" name = "name" onChange={valUpdate}/>
            <br></br>
            Department:
            <input type="text"  name="dept" onChange={valUpdate}/>
            <br></br>
            Email:
            <input type="text"  name="email" onChange={valUpdate}/>
            <br></br>
            <button onClick={push}>Show</button>
            {
                (flag)?<><View name={studInfo.name} dept={studInfo.dept} email={studInfo.email}/></>:<h1>You have not sent Anything yet!</h1>
            }
        </>
    )

    
}

export default Student;