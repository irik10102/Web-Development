import { useState } from "react";
import Child from "./Child";


interface Stud{
    name:string,
    email:string
}
const Parent = ()=>{

    const [flag, setFlag] = useState<Boolean>(false);
    const [studInfo, setstudInfo] = useState<Stud[]>([]);
    const [stud, setStud] = useState<Stud>({name:'', email:''});


    const valUpdate = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target;
        setStud({...stud, [name]:value});

    }


    const add = ()=>{
        setstudInfo([...studInfo, stud]);
        setFlag(!flag);
    }
    return(
        <>
            Enter Name:
            <input type="text" name="name" onChange={valUpdate} />
            <br>
            </br>
            Enter Email:
            <input type="text" name="email" onChange={valUpdate}/>
            <button onClick ={add}>{(flag)?"Hide":"Show"}</button>
            {
               (flag)?
                    <Child data={studInfo}/>:<h3>No Names Added yet!</h3>
                
            }
        </>
    )
}

export default Parent;