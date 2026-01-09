import {useState} from "react";


interface user{
    nm:string,
    dept:string,
    em:string
}


const UserInput = ()=>{
    const [info, setInfo] = useState<user>({nm:"",dept:"", em:""});
    
    const valupd = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value} = e.target;
        setInfo({...info,[name]:value});
    }
    return(
        <>
            Enter Name:
            <input type="text" name="nm" onChange={valupd}/>
            <br></br>
            Enter Department:
            <input type="text" name="dept" onChange={valupd}/>
            <br></br>
            Enter Email:
            <input type="text" name="em" onChange={valupd}/>
            <br></br>
            <ol>
                <li>Name:{info.nm}</li>
                <li>Dept:{info.dept}</li>
                <li>Email:{info.em}</li>

            
            </ol>
        </>
    )
}

export default UserInput;