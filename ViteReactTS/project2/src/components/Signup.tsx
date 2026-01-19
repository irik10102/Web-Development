import { useRef, type ChangeEvent } from "react";
import { useState } from "react";
import List from "./List";


interface Stud{
    nm:string,
    em:string
}


const Signup = ()=>{
    const [studInfo, setStudInfo] = useState<Stud>({nm:'',em:''});
    const [flag, setFlag] = useState<Boolean>(false);
    const [infoList,setInfoList] = useState<Stud[]>([])

    const valUpdate = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setStudInfo({...studInfo, [event.target.name]:event.target.value});
        setFlag(false);
    }
    
    const push = ()=>{
       setFlag(true);
       setInfoList([...infoList, studInfo]);
    }
    
    return(
        <>
            Name:
            <input type="text" name = "nm" onChange={valUpdate}/>
            <br></br>
            Email:
            <input type="text"  name="em" onChange={valUpdate}/>
            <br></br>
            <button onClick={push}>Show</button>
            {
                (flag)?<><List data={infoList}/></>:<h1>You have not sent Anything yet!</h1>
            }
        </>
    )

    
}

export default Signup;